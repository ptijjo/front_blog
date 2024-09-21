"use client"
import Url from '@/lib/Url'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Profil = ({ params }: { params: { slug: string } }) => {

    const [user, setUser] = useState<{ pseudo?: string }>({});
    const [token, setToken] = useState<string | null>(null);
    const id: string = params.slug;
    const navigate = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        setToken(storedToken)
    }, []);

    useEffect(() => {
        if (token) {
            axios.get(Url.getUserById + id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(resp => setUser(resp.data.data))
                .catch(error => {
                    console.error('Error fetching user:', error);
                    navigate.push("/");
                });
        }
    }, [id, token]);

    return (
        <main>
            {user!.pseudo}
        </main>
    )
}

export default Profil
