import food from './food.json'

export const Table = () => {
    return (
        <div className="container">

            <table className="table-bordered">
                <caption>Меню</caption>
                <tr className='line-main'>
                    <th>Номер</th>
                    <th>Наименование</th>
                    <th>Ингридиенты</th>
                    <th>Цена</th>
                    <th></th>
                </tr>
                {food.map((item, index) => (
                    <tr className='line-data' data-index={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.ingredients.map(name => (
                            <li>
                                {name}
                            </li>))}</td>
                        <td>{item.price}</td>
                        <td><img src = {item.link}/></td>
                    </tr>
                ))}
            </table>
        </div>
    );
}