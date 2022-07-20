import Home from "./components/home";
import { FunctionInSfc } from "./components/functionInSfc";
import FnWithArgInCc from "./components/fnWithArgInCC";
import FnWithArgSfc from "./components/fnWithArgSfc";

function App() {
  return (
    <div className="App">
      <Home />
      <FunctionInSfc />
      <FnWithArgInCc />
      <FnWithArgSfc />
    </div>
  );
}

export default App;
