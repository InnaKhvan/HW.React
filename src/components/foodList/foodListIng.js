const FoodListIng = ({items}) => {
    return items.map((item) => (
            <div
              className="flex justify-between flex-col shadow-xl shadow-sky-900 w-1/4 m-5 p-4 cursor-pointer rounded-lg border-sky-900 bg-cyan-400 md: w-5/6"
            >
              <div className="flex justify-center" >
                {item.name}
              </div>
              <div className="list-none">
                <h2>Ингридиенты: </h2>
                {item.ingredients.map((name) => (
                  <li>{name}</li>
                ))}
              </div></div>
              ))
              }
export default FoodListIng;