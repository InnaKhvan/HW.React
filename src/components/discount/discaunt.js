import { useDispatch } from "react-redux";
import { addToBasketDis } from "../../store/slices/discauntSlices";

const Discaunt = () => {
    const dispatch = useDispatch();
    const onSelect = (item) => {
  dispatch(addToBasketDis(item))
    }
    return (
        
    <div className="flex justify-center">
    <div className="flex justify-between flex-col shadow-xl shadow-sky-900 w-1/4 m-5 p-4 cursor-pointer rounded-lg border-sky-900 bg-cyan-400 md: w-1/3">Скидка на день Рождения
    <div className="flex justify-center bg-cyan-300 p-2 border rounded-full hover:bg-slate-500" 
     onClick={() => onSelect(item)}
    >15%</div>
    </div>
    <div className="flex justify-between flex-col shadow-xl shadow-sky-900 w-1/4 m-5 p-4 cursor-pointer rounded-lg border-sky-900 bg-cyan-400 md: w-1/3">Скидка за самовывоз
    <div className="flex justify-center bg-cyan-300 p-2 border rounded-full hover:bg-slate-500" 
     onClick={() => onSelect(item)}
    >10%</div>
    </div></div>)
}

export default Discaunt;
