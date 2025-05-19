import { useCallback, useEffect, useState } from 'react';

export function useSessionStorage<T>(
    sessionStorageKey: string,
    initialValue: T,
    parser: (value: string) => T
) {
    let storedValue: T = initialValue;
    try {
        const storedValueRaw = sessionStorage.getItem(sessionStorageKey);
        if (storedValueRaw) {
            storedValue = parser(storedValueRaw);
        }
    } catch (err) {
        console.error(err);
    }

    const [value, setValue] = useState<T>(storedValue);

    useEffect(() => {
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(value));
    }, [value, sessionStorageKey]);

    const removeValue = useCallback(
        (syncState: boolean = true) => {
            sessionStorage.removeItem(sessionStorageKey);
            if (syncState) setValue(initialValue);
        },
        [sessionStorageKey, initialValue]
    );

    return [value, setValue, removeValue] as const;
}
