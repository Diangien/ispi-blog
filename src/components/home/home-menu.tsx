"use client"

import { useState } from "react"
import Logo from "../ui/logo";
import { Home, Search, User, X } from "lucide-react";
import { NavItem } from "../nav/nav-item";
import { NavLogout } from "../nav/nav-logout";
import { Input } from "../ui/input";

type Props = {
    closeAction:() => void;
}

export const HomeMenu = ({closeAction}:Props) => {

    return (
        <div className="lg:hidden fixed inset-0 p-4 bg-gray-800">
            <div className="flex justify-between items-center">
                <Logo size={40}/>
                <div onClick={closeAction} className="cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-gray-900">
                    <X />
                </div>
            </div>

            <div>
                <Input
                placeholder="Buscar"
                icon={<Search/>}
                filled
                />
            </div>

            <div className="text-gray-100">
                <NavItem
                    label="Home"
                    icon={<Home/>}
                    href="/home"
                />

                <NavItem
                    label="Pesquisar"
                    icon={<Search/>}
                    href="Buscar"
                />

                <NavItem
                    label="Meu Perfil"
                    icon={<User/>}
                    href="/profile"
                />

                <NavLogout/>
            </div>
        </div>
    )
}