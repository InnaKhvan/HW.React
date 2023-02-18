import "./index.css";
import Header from "./components/header/header";
import { FoodList } from "./components/foodList/foodList";
import food from "./components/foodList/food.json";
import Basket from "./components/basket/basket";

function App() {
 
  return (
    <div className="App">
      <Header/>
      <div className="flex flex-row">
        <div className="flex basis-3/4 flex-col md:flex-row">
          <FoodList items={food} />
        </div>
        <div className="flex flex-col basis-1/5 bg-cyan-400 p-2 m-2 rounded-lg">
          Ваш выбор
          <Basket/>
        </div>
      </div>
    </div>
  );
}

export default App;
