import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FoodList } from "../../components/foodList/foodList";
import { fetchCatalog } from "../../store/slices/catalogSlices";

const Catalog = () => {
  let { loading, items } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);
  if (loading == "fulfilled") return <FoodList items={items} />;
  else if (loading == "rejected") return <h1>Ошибка</h1>;
  else if (loading == "pending") return <h1>Загрузка...</h1>;
};

export default Catalog;
