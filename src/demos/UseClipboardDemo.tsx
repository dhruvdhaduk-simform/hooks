import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useClipboard } from '@/hooks/useClipboard';
import { useState } from 'react';

export function UseClipboardDemo() {
    const [input, setInput] = useState('');
    const { copy, isCopied } = useClipboard();

    return (
        <div className="p-4" id="use-clipboard">
            <SectionHeading
                docsLink="https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#useclipboard"
                label="useClipboard"
            />
            <div className="p-4">
                <div className="flex justify-center items-center gap-2">
                    <label htmlFor="copy-input">Enter Text : </label>
                    <input
                        id="copy-input"
                        type="text"
                        placeholder="Enter text to copy"
                        value={input}
                        onChange={(e) => setInput(e.currentTarget.value)}
                        className="h-10 border border-[#444444] rounded-lg pl-2"
                    />
                </div>
                <div className="pt-4 flex flex-col justify-center items-center gap-2">
                    <Button
                        onClick={() => {
                            if (input.trim().length) copy(input);
                        }}
                    >
                        Copy
                    </Button>
                    <p>
                        {isCopied ? (
                            <span className="text-lg font-bold text-green-500">
                                Copied
                            </span>
                        ) : (
                            'Click the button to copy to clipboard'
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}
