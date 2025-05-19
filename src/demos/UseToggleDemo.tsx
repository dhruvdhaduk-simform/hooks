import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useToggle } from '@/hooks/useToggle';

export function UseToggleDemo() {
    const [value, toggle, setValue] = useToggle();

    return (
        <div className="p-4">
            <SectionHeading label="useToggle demo" />
            <div className="p-4">
                <div className="p-1 flex justify-center">
                    <Button onClick={toggle}>
                        Value is {JSON.stringify(value).toUpperCase()}
                    </Button>
                </div>
                <div className="p-1 flex justify-center gap-2">
                    <Button onClick={() => setValue(true)}>Set to true</Button>
                    <Button onClick={() => setValue(false)}>
                        Set to false
                    </Button>
                </div>
            </div>
        </div>
    );
}
