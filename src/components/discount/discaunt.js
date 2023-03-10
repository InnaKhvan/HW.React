import { useDispatch } from "react-redux";
import { applyDiscount } from "../../store/slices/cardSlices";

const Discaunt = () => {
    let dispatch = useDispatch();
 
  return (
    <div className="flex justify-center">
      <div className="flex justify-between flex-col shadow-xl shadow-sky-900 w-1/4 m-5 p-4 cursor-pointer rounded-lg border-sky-900 bg-cyan-400 md: w-1/3">
        Скидка на день Рождения
        <button onClick={() => dispatch(applyDiscount(15))}>
          {" "}
          <div className="flex justify-center bg-cyan-300 p-2 border rounded-full hover:bg-slate-500">
            15%
          </div>
        </button>
      </div>
      <div className="flex justify-between flex-col shadow-xl shadow-sky-900 w-1/4 m-5 p-4 cursor-pointer rounded-lg border-sky-900 bg-cyan-400 md: w-1/3">
        Скидка за самовывоз
        <button onClick={() => dispatch(applyDiscount(10))}>
          {" "}
          <div className="flex justify-center bg-cyan-300 p-2 border rounded-full hover:bg-slate-500">
            10%
            
          </div>
        </button>
      </div>
    </div>
  );
};

export default Discaunt;
