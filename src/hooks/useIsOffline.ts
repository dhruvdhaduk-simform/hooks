import { useEffect, useState } from 'react';

export function useIsOffline() {
    const [isOffline, setIsOffline] = useState(false);
    useEffect(() => {
        const ctrl = new AbortController();

        window.addEventListener(
            'offline',
            () => {
                setIsOffline(true);
            },
            { signal: ctrl.signal }
        );

        window.addEventListener(
            'online',
            () => {
                setIsOffline(false);
            },
            { signal: ctrl.signal }
        );

        return () => ctrl.abort();
    }, []);

    return isOffline;
}
