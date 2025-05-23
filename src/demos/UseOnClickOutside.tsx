import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useCallback, useRef, useState } from 'react';

export function UseOnClickOutside() {
    const [isActive, setIsActive] = useState(false);

    const callback = useCallback(() => {
        if (isActive) {
            alert('You Clicked Outside.');
        }
    }, [isActive]);

    const ref = useRef(null);
    useOnClickOutside(ref, callback);

    return (
        <div className="p-4" id="use-on-click-outside">
            <SectionHeading
                docsLink="https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#useonclickoutside"
                label="useOnClickOutside"
            />
            <div className="p-4 flex justify-center">
                <div
                    className="border border-[#444444] p-4 rounded-lg w-full max-w-96 flex flex-col items-center gap-2"
                    ref={ref}
                >
                    <Button onClick={() => setIsActive(!isActive)}>
                        {isActive ? 'Deactive hook' : 'Activate hook'}
                    </Button>
                    {isActive ? (
                        <p className="text-green-500 font-bold">
                            Try clicking outside the box.
                        </p>
                    ) : (
                        <p>This hook is currently inactive.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
