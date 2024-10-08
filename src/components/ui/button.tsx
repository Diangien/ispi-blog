
type Props = {
    label:string;
    onClick: ()=> void;
    size?: 1 | 2 | 3;
}

export const Button = ({label, onClick, size}:Props) => {
    return (
        <div onClick={onClick} className={`flex justify-center items-center cursor-pointer font-bold rounded bg-blue-700 text-white ${size == 1 && 'h-14 text-lg'}
        ${size == 2 && 'h-12 text-md'}
        ${size == 3 && 'h-7 text-xs'}`}>
            {label}
        </div>
    )
}