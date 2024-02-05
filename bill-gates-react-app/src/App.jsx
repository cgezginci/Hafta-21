import "./App.css";

import Container from "./Components/Container";

import { ShoppingProvider } from "./Components/ShoppingContext";

function App() {
  return (
    <ShoppingProvider>
      <Container />
    </ShoppingProvider>
  );
}

export default App;
