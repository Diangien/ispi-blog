'use client'
import {  LogOut } from "lucide-react"
import { useRouter } from "next/navigation"


export const NavLogout = () => {

    const router = useRouter()

    const handleClick = () => {
        router.replace('/login')
    } 

    return (
        <div className="flex items-center gap-6 py-3 cursor-pointer opacity-60 hover:opacity-100" onClick={handleClick}>
            <LogOut />
            <div className="text-lg">Sair</div>
        </div>
    )
}