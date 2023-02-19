import { connect, useDispatch } from "react-redux";
import { clearBasket, decreaseItemQty, increaseItemQty } from "../../store/slices/cardSlices";
import Discaunt from "../discount/discaunt";
import TotalSum from "./totalSum";

const BasketComp = ({ items }) => {

  const dispatch = useDispatch();
  return (
    < div className="flex justify-center"> <div className="flex flex-col w-1/2 bg-cyan-400 p-2 m-2 rounded-lg">
    Ваш выбор
      {items.map((item) => (
        <div
          className="flex bg-cyan-300 p-2 m-2 rounded-lg justify-between content-center"
          key={item.food.name}
        >
          {item.food.name}
          <button className="flex justify-center bg-cyan-300 p-2 border rounded-full hover:bg-slate-500" 
          onClick={() => dispatch(decreaseItemQty(item.food.name))}>
            -
          </button>
          <span className="p-2">{item.qty}</span>
          <button
            className="flex justify-center bg-cyan-300 p-2 border rounded-full hover:bg-slate-500"
            onClick={() => dispatch(increaseItemQty(item.food.name))}
          >
            +
          </button>
        </div>
      ))}
      <div className="flex bg-cyan-300 p-2 m-2 justify-between rounded-lg">
      <p>Итого:</p>
      <TotalSum/>
      </div>
      <button
        className="flex justify-center bg-cyan-200 p-2 m-2 rounded-lg hover:bg-slate-500"
        onClick={() => dispatch(clearBasket())}
      >
        Очистить
      </button>
      </div>
      <div><Discaunt/></div>
    </div>
    
  );
};

const connector = connect((state) => ({
  items: state.basket,
}));

export default connector(BasketComp) ;
