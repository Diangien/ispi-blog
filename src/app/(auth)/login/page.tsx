import { LoginForm } from "@/components/auth/loginForm";
import Logo from "@/components/ui/logo";
import Link from "next/link";

export default function Page(){
    return (
        <div className="max-w-lg mx-auto py-12 px-6 text-white">
            <Logo size={40}/>
            <h1 className="mt-10 text-2xl font-bold">Entre na sua conta
            </h1>

            <div className="mt-10 mb-14 flex flex-col gap-6">
                <LoginForm/>
            </div>
            <Link href="/cadastro" className=" text-lg hover:underline text-gray-400">Ainda não tem uma conta? cadastre-se</Link>
        </div>
    )
}