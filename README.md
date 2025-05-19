# Custom Hooks

- These are the React custom hooks that I've created.

## List of Hooks

### useToggle

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useToggle.ts)
- [Live Demo](https://my-custom-hooks.netlify.app/#use-toggle)
- This hook stores a boolean value and provides a function to toggle the value.
- It returns a tuple of 3 : value, toggle function, setValue function.
- Usage :

```typescript
const [value, toggle, setValue] = useToggle();
```

### useLocalStorage

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useLocalStorage.ts)
- [Live Demo](https://my-custom-hooks.netlify.app/#use-local-storage)
- This hook syncs the state with localStorage.
- It takes 3 thigs as arguments : Local Storage key, initial value of state, parser function to parse the state from raw string stored in local storage.
- It returns a tuple of 3 : value, setValue function, removeValue function.
- Example :

```typescript
const [counter, setCounter, removeCounter] = useLocalStorage(
    'MY_COUNTER',
    0,
    (x) => {
        const num = Number(x);
        if (isFinite(num) && Number.isInteger(num) && num >= 0) {
            return num;
        }
        return 0;
    }
);
```

### useSessionStorage

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useSessionStorage.ts)
- [Live Demo](https://my-custom-hooks.netlify.app/#use-session-storage)
- This hook syncs the state with sessionStorage.
- It takes 3 thigs as arguments : Session Storage key, initial value of state, parser function to parse the state from raw string stored in local storage.
- It returns a tuple of 3 : value, setValue function, removeValue function.
- Example :

```typescript
const [counter, setCounter, removeCounter] = useSessionStorage(
    'MY_COUNTER',
    0,
    (x) => {
        const num = Number(x);
        if (isFinite(num) && Number.isInteger(num) && num >= 0) {
            return num;
        }
        return 0;
    }
);
```

### useUndoRedo

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useUndoRedo.ts)
- [Live Demo](https://my-custom-hooks.netlify.app/#use-undo-redo)
- This hook wraps the `useState` to provide `undo` and `redo` functionality.
- It takes the initial value as an argument.
- It returns tuple of 4 : value, setValue function, undo function, redo function.
- Example :

```typescript
const [color, setColor, undoColor, redoColor] = useUndoRedo('#000000');
```
