import { NavItem } from "@/components/nav/nav-item";
import { NavLogout } from "@/components/nav/nav-logout";
import Logo from "@/components/ui/logo";
import { Home, Search, User } from "lucide-react";
import { ReactNode } from "react"

type LayoutProps = {
    children: ReactNode;
}

export default function Layout({ children }:LayoutProps){
    return (
        <div className="min-h-screen flex mx-auto max-w-7xl">
            <section className="hidden lg:flex flex-col sticky top-0 h-screen w-52 px-2 border-r border-gray-400 bg-gray-800 text-white">

                <div className="flex-1 mt-4">
                    <Logo size={40}/>
               
                    <nav className="mt-10">
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
                    </nav>
                </div>

                <div className="mb-6 flex flex-col">
                    <NavLogout/>
                </div>
            </section>
             
            <section className="flex-1">
                {children}
            </section>
        </div>
    )
}