"use client"

import { useState } from "react"
import Logo from "../ui/logo"
import { Menu } from "lucide-react"
import { HomeMenu } from "./home-menu"

export const HomeHeader = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="flex justify-between p-4 border-b-2 border-gray-400 items-center">
            <div className="lg:hidden">
                <Logo size={40}/>
            </div>
            <div className="hidden lg:block text-3xl">
                Bem-Vindo! 👋
            </div>

            <div className="cursor-pointer lg:hidden" onClick={()=>setShowMenu(true)}>
                <Menu size={40}/>
            </div>

            {showMenu &&
            
            <HomeMenu closeAction={()=>setShowMenu(false)}/>}

        </header>
    )
}