import { SectionHeading } from '@/components/SectionHeading';
import { useDebounce } from '@/hooks/useDebounce';
import { useCallback, useEffect, useState } from 'react';

export function UseDebounceDemo() {
    const [input, setInput] = useState('');
    const [apiCalls, setApiCalls] = useState(0);
    const [lastQuery, setLastQuery] = useState('');

    const handleApiCall = useCallback(() => {
        if (!input.trim().length) return;
        setLastQuery(input);
        setApiCalls((prev) => prev + 1);
    }, [input]);

    const handleApiCallDebounce = useDebounce(handleApiCall, 1000);

    useEffect(() => {
        handleApiCallDebounce();
    }, [input, handleApiCallDebounce]);

    return (
        <div className="p-4" id="use-debounce">
            <SectionHeading
                docsLink="https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#usedebounce"
                label="useDebounce"
            />
            <div className="p-4">
                <div className="flex justify-center items-center gap-2">
                    <label htmlFor="debounce-input">Search Input : </label>
                    <input
                        id="debounce-input"
                        type="text"
                        placeholder="Enter anything"
                        value={input}
                        onChange={(e) => setInput(e.currentTarget.value)}
                        className="h-10 border border-[#444444] rounded-lg pl-2"
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <p className="pt-4 text-lg">
                        API calls {'=>'}{' '}
                        <span className="font-bold">{apiCalls}</span>
                    </p>
                    <p className="text-lg">
                        Last Query {'=>'}{' '}
                        <span className="font-bold">{lastQuery}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
