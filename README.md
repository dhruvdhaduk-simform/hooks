# Custom Hooks

- These are the React custom hooks that I've created.

## List of Hooks

### useToggle

- [Source Code](https://github.com/dhruvdhaduk-simform/hooks/blob/main/src/hooks/useToggle.ts)
- This hooks stored a boolean value and provides a function to toggle the value.
- It returns a tupe of 3 : value, toggle function, setValue function.
- Usage,

```typescript
const [value, toggle, setValue] = useToggle();
```
