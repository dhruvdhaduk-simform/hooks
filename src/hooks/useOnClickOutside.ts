import { useEffect } from 'react';

export function useOnClickOutside(
    ref: React.RefObject<null | HTMLElement>,
    callback: () => unknown
) {
    useEffect(() => {
        const ctrl = new AbortController();

        document.body.addEventListener(
            'click',
            (e) => {
                if (
                    ref.current &&
                    e.target instanceof HTMLElement &&
                    !ref.current.contains(e.target)
                ) {
                    callback();
                }
            },
            { signal: ctrl.signal }
        );

        return () => ctrl.abort();
    }, [ref, callback]);
}
