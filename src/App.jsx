import Home from "./components/home";
import { FunctionInSfc } from "./components/functionInSfc";
import FnWithArgInCc from "./components/fnWithArgInCC";

function App() {
  return (
    <div className="App">
      <Home />
      <FunctionInSfc />
      <FnWithArgInCc />
    </div>
  );
}

export default App;
