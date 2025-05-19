import { useState, useCallback } from 'react';

export function useToggle() {
    const [value, setValue] = useState(false);

    const toggle = useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    return [value, toggle, setValue] as const;
}
