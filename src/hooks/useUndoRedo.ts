import { useCallback, useRef, useState } from 'react';

export function useUndoRedo<T>(initialValue: T) {
    const [value, setValue] = useState(initialValue);
    const history = useRef({ index: 0, list: [value] });

    const pushValue = useCallback((val: T) => {
        history.current.list.splice(history.current.index + 1);
        history.current.list.push(val);
        history.current.index = history.current.list.length - 1;
        setValue(val);
    }, []);

    const undo = useCallback(() => {
        if (history.current.index > 0) {
            history.current.index--;
            setValue(history.current.list[history.current.index]);
        }
    }, []);

    const redo = useCallback(() => {
        if (history.current.index < history.current.list.length - 1) {
            history.current.index++;
            setValue(history.current.list[history.current.index]);
        }
    }, []);

    return [value, pushValue, undo, redo] as const;
}
