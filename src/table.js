import food from './food.json'

export const Table = () => {
    return (
        <table className="table-bordered">
            <caption>Меню</caption>
            {food.map((item, index) => (
                <tr className='line-data' data-index={index}>

                    <td className='Name-food'>{item.name}</td>
                    <td className='Ing-food'>Ингридиенты: {item.ingredients.map(name => (
                        <li>
                            {name}
                        </li>))}</td>
                    <td className='Price'>Цена: {item.price}</td>
                    <td><img src={item.link} className="Picture" alt="picture" /></td>
                </tr>
            ))}
        </table>
    );
}