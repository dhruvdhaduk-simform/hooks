import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useResetState } from '@/hooks/useResetState';

export function UseResetStateDemo() {
    const [counter, setCounter, resetCounter] = useResetState(0);

    return (
        <div className="p-4" id="use-reset-state">
            <SectionHeading
                docsLink="https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#useresetstate"
                label="useResetState"
            />
            <div className="p-4 flex justify-center gap-2">
                <Button onClick={() => setCounter(counter + 1)}>
                    Count : {counter}
                </Button>
                <Button onClick={() => resetCounter()}>Reset Counter</Button>
            </div>
        </div>
    );
}
