export function Header() {
    return (
        <header className="z-10 fixed top-6 left-0 right-0 w-full flex justify-center">
            <div className="w-full max-w-[80rem] px-9">
                <div className="shadow-xs shadow-white glassmorphic rounded-2xl h-14 flex justify-between">
                    <a
                        href="#"
                        className="h-full px-4 text-2xl font-bold flex justify-center items-center"
                        role="button"
                    >
                        My Custom Hooks
                    </a>
                </div>
            </div>
        </header>
    );
}
