import "./index.css";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
import CartProvider from "./components/cardProvaider";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
      </CartProvider>
      <div className="flex flex-row">
        <div className="flex flex-col md:flex-row">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
