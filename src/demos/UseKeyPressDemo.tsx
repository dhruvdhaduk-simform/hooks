import { SectionHeading } from '@/components/SectionHeading';
import { useKeyPress } from '@/hooks/useKeyPress';

const KEYBOARD = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['Control', 'Alt', 'Shift', 'Escape', 'Tab'],
];

export function UseKeyPressDemo() {
    const alphabetKeysPressed: Array<boolean> = Array(26).fill(false);

    const specialKeysPressed = {
        Control: false,
        Alt: false,
        Shift: false,
        Escape: false,
        Tab: false,
    };

    for (const k in specialKeysPressed) {
        const key = k as keyof typeof specialKeysPressed;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        specialKeysPressed[key] = useKeyPress(key);
    }

    for (let i = 0; i < 26; i++) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        alphabetKeysPressed[i] = useKeyPress(
            String.fromCharCode('a'.charCodeAt(0) + i)
        );
    }

    return (
        <div className="p-4" id="use-key-press">
            <SectionHeading
                docsLink="https://github.com/dhruvdhaduk-simform/hooks?tab=readme-ov-file#usekeypress"
                label="useKeyPress"
            />

            <div className="p-4">
                {KEYBOARD.map((KEYBOARD_LINE) => (
                    <div className="flex justify-center items-center gap-1 py-0.5">
                        {KEYBOARD_LINE.map((c) => {
                            let isActive = false;
                            if (c.length === 1) {
                                isActive =
                                    alphabetKeysPressed[
                                        c.charCodeAt(0) - 'a'.charCodeAt(0)
                                    ];
                            } else {
                                isActive =
                                    specialKeysPressed[
                                        c as keyof typeof specialKeysPressed
                                    ];
                            }
                            return (
                                <span
                                    className={`border min-w-10 h-10 px-2 flex justify-center items-center ${isActive ? 'text-green-500 font-bold' : ''}`}
                                >
                                    {c}
                                </span>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}
