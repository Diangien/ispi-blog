import Image from "next/image";
import Link from "next/link";

type LogoProps = {
    size: number;
}

export default function Logo({size}:LogoProps){
    return (
        <Link href={'/'}>
            <Image 
                src='/book.svg' 
                alt="Ler"
                width={size}
                height={size}
                quality={100}
            />
        </Link>
    )
}