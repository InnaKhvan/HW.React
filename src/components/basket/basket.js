import { useSelector } from "react-redux";

const Basket = () => {  
    const items = useSelector((state) => state.basket) 
    return (<>
        {items.map((item, index) => 
        (<div className="flex bg-cyan-300 p-2 m-2 rounded-lg" key={`card-${index}` }>
         {item.name}</div>))}

            <div className="flex bg-cyan-300 p-2 m-2 rounded-lg"><p>Итого: </p>{
            items.reduce((sum, item) => {
                sum += item.price;
                return sum;
            }, 0)}</div>
        </>)
}

export default Basket;  

