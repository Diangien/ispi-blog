'use client'

import { HeartOff, LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

type Props = {
    label: string,
    icon: ReactNode,
    href:string,
    active?:boolean,
}

export const NavItem = ({href,icon,label,active}:Props) => {
    const pathName = usePathname();
    const souEu = pathName == href;

    return (
        <Link href={href} className={`flex items-center gap-6 py-3 ${active || souEu ? 'opacity-100':'opacity-60'} hover:opacity-100`} >
        
            {icon}
            <div className="text-lg">{label}</div>
        
        </Link>
    )

}