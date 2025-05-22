import { useEffect, useState } from 'react';

export function useKeyPress(key: string) {
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    useEffect(() => {
        const ctrl = new AbortController();

        window.addEventListener(
            'keydown',
            (e) => {
                if (key === e.key) setIsKeyPressed(true);
            },
            { signal: ctrl.signal }
        );

        window.addEventListener(
            'keyup',
            (e) => {
                if (key === e.key) setIsKeyPressed(false);
            },
            { signal: ctrl.signal }
        );

        window.addEventListener(
            'blur',
            () => {
                setIsKeyPressed(false);
            },
            { signal: ctrl.signal }
        );

        return () => ctrl.abort();
    }, [key]);

    return isKeyPressed;
}
