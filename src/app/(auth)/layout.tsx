import { ReactNode } from "react"

type Props = {
    children: ReactNode
}


export default function Layout({children}:Props){
    return (
        <div className="bg-gray-700 min-h-screen ">
            {children}
        </div>
    )
}