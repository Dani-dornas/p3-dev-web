import Forms from "./components/form";
import Lista from "./components/lista/Colors";
import { Provider } from "./contexts/Contexto";

function App() {
  return (
    <Provider>
      <Forms />
      <Lista />
    </Provider>
  );
}

export default App;
