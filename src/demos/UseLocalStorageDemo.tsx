import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export function UseLocalStorageDemo() {
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

    return (
        <div className="p-4" id="use-local-storage">
            <SectionHeading
                docsLink="https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#uselocalstorage"
                label="useLocalStorage"
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
