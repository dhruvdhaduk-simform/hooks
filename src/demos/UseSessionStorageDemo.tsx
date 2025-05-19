import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useSessionStorage } from '@/hooks/useSessionStorage';

export function UseSessionStorageDemo() {
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

    return (
        <div className="p-4" id="use-session-storage">
            <SectionHeading
                docsLink="https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#usesessionstorage"
                label="useSessionStorage"
            />
            <div className="p-4 flex justify-center gap-2">
                <Button onClick={() => setCounter(counter + 1)}>
                    Count : {counter}
                </Button>
                <Button onClick={() => removeCounter()}>Reset Counter</Button>
            </div>
        </div>
    );
}
