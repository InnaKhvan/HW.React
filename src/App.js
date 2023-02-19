import "./index.css";
import Header from "./components/header/header";
import { FoodList } from "./components/foodList/foodList";
import food from "./components/foodList/food.json";

function App() {
 
  return (
    <div className="App">
      <Header/>
      <div className="flex flex-row">
        <div className="flex flex-col md:flex-row">
          <FoodList items={food} />
        </div>
      </div>
    </div>
  );
}

export default App;
