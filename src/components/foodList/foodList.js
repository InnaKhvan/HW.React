import { useDispatch } from "react-redux";
import { addToBasket } from "../../store/slices/cardSlices";

export const FoodList = ({ items  }) => {
  const dispatch = useDispatch();
  const onSelect = (item) => {
dispatch(addToBasket(item))
  }
  return items.map((item, index) => (
    <div
      key={`num-${index}`}
      className="flex justify-between flex-col shadow-xl shadow-sky-900 w-1/4 m-5 p-4 cursor-pointer rounded-lg border-sky-900 bg-cyan-400 md: w-5/6"
    >
      <div className="flex justify-center" key={`num.name-${index}`}>
        {item.name}
      </div>
      <div className="list-none" key={`num.ing-${index}`}>
        <h2>Ингридиенты: </h2>
        {item.ingredients.map((name) => (
          <li>{name}</li>
        ))}
      </div>
      <div className="flex justify-center" key={`num.price-${index}`}>
        Цена: {item.price}
      </div>
      <div key={`num.img-${index}`}>
        <img
          src={item.link}
          className="flex justify-center rounded-lg"
          alt="picture"
        />
      </div>
      <button
        onClick={() => onSelect(item)}
        key={`num.button-${index}`}
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
