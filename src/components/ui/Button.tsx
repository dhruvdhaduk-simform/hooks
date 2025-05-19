type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={`px-4 py-2 rounded-lg font-bold bg-white text-black select-none cursor-pointer active:opacity-80 ${props.className}`}
        >
            {children}
        </button>
    );
}
