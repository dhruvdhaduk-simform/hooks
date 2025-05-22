import { useCallback, useEffect, useRef } from 'react';

export function useDebounce(
    fn: (...args: unknown[]) => unknown,
    delay: number
) {
    const timerId = useRef<number | null>(null);

    const debouncedFn = useCallback(
        (...args: Parameters<typeof fn>): Promise<ReturnType<typeof fn>> => {
            if (timerId.current) {
                clearTimeout(timerId.current);
            }

            return new Promise((resolve) => {
                timerId.current = setTimeout(() => {
                    resolve(fn(...args));
                }, delay);
            });
        },
        [fn, delay]
    );

    useEffect(() => {
        return () => {
            if (timerId.current) {
                clearTimeout(timerId.current);
            }
        };
    }, [fn, delay]);

    return debouncedFn;
}
