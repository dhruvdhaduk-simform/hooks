import { SectionHeading } from '@/components/SectionHeading';
import { useIsOffline } from '@/hooks/useIsOffline';

export function UseIsOfflineDemo() {
    const isOffline = useIsOffline();

    return (
        <div className="p-4" id="use-is-offline">
            <SectionHeading
                docsLink="https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#useisoffline"
                label="useIsOffline"
            />
            <div className="p-4">
                <p className="text-center text-lg">
                    You are{' '}
                    {isOffline ? (
                        <span className="text-red-500 font-bold">Offline</span>
                    ) : (
                        <span className="text-green-500 font-bold">Online</span>
                    )}
                </p>
            </div>
        </div>
    );
}
