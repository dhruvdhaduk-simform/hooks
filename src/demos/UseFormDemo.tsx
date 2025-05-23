import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useForm } from '@/hooks/useForm';

interface FormData {
    email: string;
    password: string;
}

export function UseFormDemo() {
    const [formData, handleChange, handleSubmit, resetForm] = useForm<FormData>(
        {
            email: '',
            password: '',
        },
        (data) => {
            alert(`Form Submitted with data : ${JSON.stringify(data)}`);
        }
    );

    return (
        <div className="p-4" id="use-form">
            <SectionHeading
                docsLink="https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#useform"
                label="useForm"
            />
            <div className="p-4 flex justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="border border-[#444444] rounded-lg p-4 flex flex-col gap-4 w-full max-w-96"
                >
                    <div className="flex flex-col">
                        <label htmlFor="email-input" className="text-sm">
                            Email
                        </label>
                        <input
                            id="email-input"
                            type="email"
                            placeholder="Enter your Email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                handleChange('email', e.currentTarget.value)
                            }
                            className="h-10 border border-[#444444] rounded-lg pl-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password-input" className="text-sm">
                            Password
                        </label>
                        <input
                            id="password-input"
                            type="password"
                            placeholder="Enter your Password"
                            required
                            value={formData.password}
                            onChange={(e) =>
                                handleChange('password', e.currentTarget.value)
                            }
                            className="h-10 border border-[#444444] rounded-lg pl-2"
                        />
                    </div>

                    <div className="flex gap-2">
                        <Button
                            type="button"
                            onClick={resetForm}
                            className="flex-1 !bg-black border border-[#444444] text-white"
                        >
                            Reset
                        </Button>
                        <Button className="flex-1">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
