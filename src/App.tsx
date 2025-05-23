import { Header } from './components/Header';
import { UseToggleDemo } from './demos/UseToggleDemo';
import { UseLocalStorageDemo } from './demos/UseLocalStorageDemo';
import { UseSessionStorageDemo } from './demos/UseSessionStorageDemo';
import { UseUndoRedoDemo } from './demos/UseUndoRedoDemo';
import { UseKeyPressDemo } from './demos/UseKeyPressDemo';
import { UseResetStateDemo } from './demos/UseResetStateDemo';
import { UseDebounceDemo } from './demos/UseDebounceDemo';
import { UseIsOfflineDemo } from './demos/UseIsOfflineDemo';
import { UseClipboardDemo } from './demos/UseClipboardDemo';
import { UseFormDemo } from './demos/UseFormDemo';
import { UseOnClickOutside } from './demos/UseOnClickOutside';

function App() {
    return (
        <div className="w-full max-w-[80rem] m-auto">
            <Header />

            <div className="pt-28 flex flex-col gap-8">
                <UseToggleDemo />
                <UseLocalStorageDemo />
                <UseSessionStorageDemo />
                <UseUndoRedoDemo />
                <UseKeyPressDemo />
                <UseResetStateDemo />
                <UseDebounceDemo />
                <UseIsOfflineDemo />
                <UseClipboardDemo />
                <UseFormDemo />
                <UseOnClickOutside />
            </div>
        </div>
    );
}
export default App;
