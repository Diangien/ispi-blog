"use client"

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useState } from "react"

export const CadastroForm = () => {

    const router = useRouter()
    const [emailField, setEmailField] = useState('')
    const [senhaField, setSenhaField] = useState('')
    const [nomeField, setNomeField] = useState('')

    const handleEnterButton = () => {
        router.replace('/home')
    }

    return (
        <>
            <Input
                label='Nome'
                placeholder="Seu nome"
                onChange={t => setNomeField(t)}
            />

            <Input
                label='Email'
                placeholder="Seu melhor email"
                onChange={t => setEmailField(t)}
            />

            <Input
                label="Senha"
                placeholder="Digite sua senha"
                onChange={t => setSenhaField(t)}
                password
            />

            <Button
                label="Cadastrar"
                onClick={handleEnterButton}
                size={2}
            />
        
        </>
    )
}