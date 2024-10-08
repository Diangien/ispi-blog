"use client"

import { Eye, EyeClosed } from "lucide-react"
import { KeyboardEvent, ReactNode, useState } from "react"

type Props = {
    icon?: ReactNode,
    password?:boolean,
    filled?:boolean,
    placeholder:string,
    value?:string,
    label?:string,
    onChange?: (newValue: string) => void,
    onEnter?: () => void
}

export const Input = ({placeholder,label, password, value, onChange, onEnter, filled}: Props) => {

    const [showPassword, setShowPassword] = useState(false)

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() == 'enter' && onEnter) {
            onEnter()
        }
    }

    return (
        <div className={`flex flex-col gap-4 `}>
            <label htmlFor={label}>{label}</label>
            
            <div className={`flex border rounded items-center`}>
                <input 
                    type={password && showPassword ? 'password' :'text'} 
                    className={`flex-1 outline-none bg-transparent h-full px-4 py-2 ${filled && 'bg-gray-900'}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={e => onChange && onChange(e.target.value)}
                    onKeyUp={handleKeyUp}
                />

                {
                    password 
                            &&
                    <>
                        {showPassword
                        ?
                            <Eye 
                            onClick={()=>setShowPassword(!showPassword)}
                            className="size-6 cursor-pointer mr-4 text-gray-500"/>
                        :
                            <EyeClosed 
                            onClick={()=>setShowPassword(!showPassword)} 
                            
                            className="size-6 cursor-pointer mr-4 text-gray-500"/>}
                    
                    </>

                }
            </div>
        </div>
    )
}