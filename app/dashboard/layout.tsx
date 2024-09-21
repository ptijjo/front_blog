"use client"
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { login, selectUser, selectUserStatus } from '@/lib/features/users/userSlice'
import { Dispatch, Selector } from '@/lib/hooks'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Loading from '../loading'
import axios from 'axios'
import Url from '@/lib/Url'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const navigate = useRouter();
    const dispatch = Dispatch();
    const userData = Selector(selectUser);
    const userStatus: string = Selector(selectUserStatus);
    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
    const [user, setUser] = useState<{ pseudo: string; id: string; photo_profil: string } | null>(null)

    useEffect(() => {
        if (!token) {
            navigate.push("/");
        } else {
            if (userStatus === 'idle') {
                dispatch(login(token));
            }

            if (userStatus === "failed") {
                navigate.push("/")
            }
        }
    }, [token, dispatch, userStatus, navigate]);

    useEffect(() => {
        if (userData) {
            axios.get(Url.getUserById + userData.userId, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(resp => {
                    setUser(resp.data.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [userData, token])

    while (userStatus === "loading") return <Loading />

    if (user)
        return (
            <div className="flex flex-col items-center w-dvw max-w-[1480px] border min-h-dvh relative">
                <Header avatar={user.photo_profil} pseudo={user.pseudo} id={user.id} />
                {children}
                <Footer />
            </div>
        )
}

export default Layout
