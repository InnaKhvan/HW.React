
export const Article = () => {
    return (
        <article>
            <div class="table">
                <table>
                    <caption id="head">Меню</caption>
                    <tr id="main">
                        <th>Номер</th>
                        <th>Наименование блюда</th>
                        <th>Ингридиенты</th>
                        <th>Стомость</th>
                    </tr>
                    <tr id="item">
                        <th>1</th>
                        <th>Буузы</th>
                        <th>Тесто, мясо</th>
                        <th>90</th>

                    </tr>
                    <tr id="item">
                        <th>2</th>
                        <th>Пицца</th>
                        <th>Тесто, салями, овощи</th>
                        <th>150</th>

                    </tr>
                    <tr id="item">
                        <th>3</th>
                        <th>Паста</th>
                        <th>Спагетти, соус</th>
                        <th>100</th>
                    </tr>
                    <tr id="item">
                        <th>4</th>
                        <th>Торт</th>
                        <th>Тесто, крем</th>
                        <th>120</th>
                    </tr>
                </table>
            </div>
        </article>
    )
}