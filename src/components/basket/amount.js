
const Amound = ({ items }) => {
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

export default Amound;



let [qty, sum] = reduce((arr,item) => {
    arr[0] += item.qty;
    arr[1] += item.qty * item.food.price;
  }),
  [0, 0];

console.log(arr[1]);
