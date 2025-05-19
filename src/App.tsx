import { Header } from './components/Header';
import { UseToggleDemo } from './demos/UseToggleDemo';
import { UseLocalStorageDemo } from './demos/UseLocalStorageDemo';
import { UseSessionStorageDemo } from './demos/UseSessionStorageDemo';
import { UseUndoRedoDemo } from './demos/UseUndoRedoDemo';

function App() {
    return (
        <div className="w-full max-w-[80rem] m-auto">
            <Header />

            <div className="pt-28 flex flex-col gap-8">
                <UseToggleDemo />
                <UseLocalStorageDemo />
                <UseSessionStorageDemo />
                <UseUndoRedoDemo />
            </div>
        </div>
    );
}
export default App;
