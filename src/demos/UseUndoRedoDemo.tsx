import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useUndoRedo } from '@/hooks/useUndoRedo';
import { useRef } from 'react';

export function UseUndoRedoDemo() {
    const [color, setColor, undoColor, redoColor] = useUndoRedo('#000000');
    const inputRef = useRef<HTMLInputElement | null>(null);

    console.log(color);

    return (
        <div className="p-4" id="use-undo-redo">
            <SectionHeading
                docsLink="https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#useundoredo"
                label="useUndoRedo"
            />
            <div className="p-4">
                <div className="flex justify-center items-center gap-4">
                    <span className="font-bold">Select Color</span>
                    <input
                        ref={inputRef}
                        type="color"
                        className="bg-[#0f0f0f] text-white w-28 h-10 px-2.5 rounded-lg border border-[#303030] placeholder:text-[#848484]"
                    />
                    <Button
                        onClick={() => {
                            if (inputRef.current) {
                                setColor(inputRef.current.value);
                            }
                        }}
                    >
                        Submit
                    </Button>
                </div>

                <div className="flex justify-center items-center gap-4 mt-4">
                    <Button onClick={undoColor}>Undo</Button>
                    <Button onClick={redoColor}>Redo</Button>
                </div>

                <div className="flex justify-center items-center gap-4 mt-4">
                    <p>Selected Color : </p>
                    <div
                        style={{ backgroundColor: `${color}` }}
                        className="w-10 h-10 border"
                    ></div>
                </div>
            </div>
        </div>
    );
}
