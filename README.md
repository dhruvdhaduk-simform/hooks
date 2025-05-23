# Custom Hooks

- These are the React custom hooks that I've created.

## Index of Hooks

- [useToggle](https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#usetoggle)
- [useLocalStorage](https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#uselocalstorage)
- [useSessionStorage](https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#usesessionstorage)
- [useUndoRedo](https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#useundoredo)

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

### useKeyPress

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useKeyPress.ts)
- [Live Demo](https://my-custom-hooks.netlify.app/#use-key-press)
- This hook returns `true` or `false` if given key is pressed.
- It can be any key from keyboard.
- Example :

```typescript
const isEscPressed = useKeyPress('Escape');
```

### useResetState

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useResetState.ts)
- [Live Demo](https://my-custom-hooks.netlify.app/#use-reset-state)
- This hook wraps `useState` to reset function, using which we can reset state to initial state.
- It takes `initialState` as an argument.
- It returns a tuple of 3 : value, setValue function, reset function.
- Example :

```typescript
const [counter, setCounter, resetCounter] = useResetState(0);
```

### useDebounce

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useDebounce.ts)
- [Live Demo](https://my-custom-hooks.netlify.app/#use-debounce)
- This hook takes a function, and delay as input and returns debounced function from it.
- Example :

```typescript
const handleApiCallDebounce = useDebounce(handleApiCall, 1000);
```

### useIsOffline

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useIsOffline.ts)
- [Live Demo](https://my-custom-hooks.netlify.app/#use-is-offline)
- This hook returns true whenever user goes offline
- Example :

```typescript
const isOffline = useIsOffline();
```

### useClipboard

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useClipboard.ts)
- [Live Demo](https://my-custom-hooks.netlify.app/#use-clipboard)
- This hook allows you to copy text to the clipboard and track whether the text was successfully copied.
- Example :

```typescript
const { copy, isCopied } = useClipboard();
```

### useForm

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useForm.ts)
- [Live Demo](https://my-custom-hooks.netlify.app/#use-form)
- This hook manages form state and handles changes and submission logic.
- It takes `initialValues` and `onSubmit` function as arguments.
- It returns a tuple of 4 : `formData`, `handleChange` function, `handleSubmit` function, `resetForm` function.
- Example :

```typescript
const [formData, handleChange, handleSubmit, resetForm] = useForm<FormData>(
    {
        email: '',
        password: '',
    },
    (data) => {
        alert(`Form Submitted with data : ${JSON.stringify(data)}`);
    }
);
```

### useOnClickOutside

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useOnClickOutside.ts)
- [Live Demo](https://my-custom-hooks.netlify.app/#use-on-click-outside)
- This hook detects when a user clicks outside the given DOM node and runs a callback.
- This hook doesn't return anything; it just listens to outside clicks.
- Example :

```typescript
const ref = useRef(null);
useOnClickOutside(ref, callback);

// Later in JSX
<div ref={ref}></div>
```
