import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu,MenubarTrigger } from "@/components/ui/menubar";
import { Button } from '../ui/button';
import { logout } from '@/lib/features/users/userSlice';
import { Dispatch } from '@/lib/hooks';


const Header = ({ avatar, pseudo, id }: { avatar: string, pseudo: string, id: string }) => {
    const dispatch = Dispatch();

    const handleDeconnection = () => {
        dispatch(logout());
    }



    return (
        <header className=' border w-full max-w-[1480px] flex flex-row items-center justify-around fixed top-0 bg-blue-500'>
            <Link href="/dashboard">
                <div className='w-[80px] h-[80px] relative'>
                    <Image src="/logos/logo.png" alt="logo du site" fill={true} />
                </div>
            </Link>

            <Menubar className='border-none shadow-none'>
                <MenubarMenu>
                    <MenubarTrigger className='gap-3 border-none hover:cursor-pointer'>
                        <p>{pseudo}</p>
                        <Avatar>
                            <AvatarImage src={avatar} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </MenubarTrigger>
                    <MenubarContent className=' bg-white'>
                        <MenubarItem asChild>
                            <Link href={"/dashboard/profil/" + id} className='w-full'>
                                <p>Profil</p>
                            </Link>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarItem>Share</MenubarItem>
                        <MenubarItem><Button className='bg-blue-500 rounded-lg' onClick={handleDeconnection}>Déconnection</Button></MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

        </header>
    )
}

export default Header
