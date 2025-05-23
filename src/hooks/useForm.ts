import { useCallback, useState } from 'react';

export function useForm<T extends object>(
    initialValues: T,
    onSubmit: (data: T) => unknown
) {
    const [formData, setFormData] = useState(initialValues);

    const handleChange = useCallback(
        (field: keyof T, newValue: T[typeof field]) => {
            setFormData({ ...formData, [field]: newValue });
        },
        [formData]
    );

    const handleSubmit = useCallback(
        (e: React.SyntheticEvent) => {
            e.preventDefault();
            onSubmit(formData);
        },
        [formData, onSubmit]
    );

    const resetForm = useCallback(() => {
        setFormData(initialValues);
    }, [initialValues]);

    return [formData, handleChange, handleSubmit, resetForm] as const;
}
