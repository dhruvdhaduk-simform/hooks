import { Header } from './components/Header';
import { UseLocalStorageDemo } from './demos/UseLocalStorageDemo';
import { UseToggleDemo } from './demos/UseToggleDemo';

function App() {
    return (
        <div className="w-full max-w-[80rem] m-auto">
            <Header />

            <div className="pt-28 flex flex-col gap-8">
                <UseToggleDemo />
                <UseLocalStorageDemo />
            </div>
        </div>
    );
}
export default App;
