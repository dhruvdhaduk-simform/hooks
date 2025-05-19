import { Header } from './components/Header';
import { UseToggleDemo } from './demos/UseToggleDemo';

function App() {
    return (
        <div className="w-full max-w-[80rem] m-auto">
            <Header />

            <div className="pt-28">
                <UseToggleDemo />
            </div>
        </div>
    );
}
export default App;
