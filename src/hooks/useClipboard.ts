import { useCallback, useRef, useState } from 'react';

export function useClipboard() {
    const [isCopied, setIsCopied] = useState(false);
    const timeoutId = useRef<number | null>(null);

    const copy = useCallback((text: string) => {
        try {
            navigator.clipboard.writeText(text);
        } catch (err: unknown) {
            if (err instanceof Error) {
                alert(err.message);
            } else {
                alert(err);
            }
        }

        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }

        setIsCopied(true);

        timeoutId.current = setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }, []);

    return { copy, isCopied };
}
