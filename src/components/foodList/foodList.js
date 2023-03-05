import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToBasket } from "../../store/slices/cardSlices";

export const FoodList = ({ items }) => {
  const dispatch = useDispatch();
  const onSelect = (item) => {
    dispatch(addToBasket(item));
  };
  return items.map((item) => (
    <div className="flex justify-between flex-col shadow-xl shadow-sky-900 w-1/4 m-5 p-4 cursor-pointer rounded-lg border-sky-900 bg-cyan-400 md: w-5/6">
      <Link to={`catalog/${item.id}`}>
        <div className="flex justify-center">{item.name}</div>

        <div className="flex justify-center">Цена: {item.price}</div>
        <div>
          <img
            src={item.link}
            className="flex justify-center rounded-lg"
            alt=""
          />
        </div>
      </Link>
      <button
        onClick={() => onSelect(item)}
        className="flex justify-center bg-cyan-200 p-2 m-2 rounded-lg hover:bg-slate-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Добавить
      </button>
    </div>
  ));
};
