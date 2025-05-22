import { useCallback, useState } from 'react';

export function useResetState<T>(initialValue: T) {
    const [value, setValue] = useState(initialValue);

    const reset = useCallback(() => setValue(initialValue), [initialValue]);

    return [value, setValue, reset] as const;
}
