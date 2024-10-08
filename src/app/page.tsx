import { redirect } from "next/navigation"

export default function Page(){

  redirect('/home')

  return (
    <div>
      Seja Bem Vindo ao aplicativo Duvidas (nome temporario)
    </div>
  )
}