import { connect, useDispatch } from "react-redux";
import { clearBasket, decreaseItemQty, increaseItemQty } from "../../store/slices/cardSlices";

const Basket = ({ items }) => {

  const dispatch = useDispatch();
  return (
    <>
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
      <div className="flex bg-cyan-300 p-2 m-2 rounded-lg" >
        <p>Итого: </p>
        {items.reduce((sum, item) => {
          sum += item.food.price * item.qty;
          return sum;
        }, 0)}
      </div>
      <button
        className="flex justify-center bg-cyan-200 p-2 m-2 rounded-lg hover:bg-slate-500"
        onClick={() => dispatch(clearBasket())}
      >
        Очистить
      </button>
    </>
  );
};

const connector = connect((state) => ({
  items: state.basket,
}));

export default connector(Basket) ;
