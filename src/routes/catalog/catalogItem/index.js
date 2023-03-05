import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CatalogItem = () => {

  const catalog = useSelector((state) => state.catalog.items);
  // console.log(catalog);
  const { id } = useParams();
  const catalogItem = catalog.find((items) => items.id == id);

  // console.log(catalogItem);
  return (
    <>
      <Link to="../">
        <button className="flex">
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
              d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
            />
          </svg>
          Назад
        </button>
      </Link>
      <div key={catalogItem.id} className="flex justify-between flex-col shadow-xl shadow-sky-900 m-5 p-4 rounded-lg border-sky-900 bg-cyan-400 ">
        <h1>{catalogItem.name}</h1>
        <div>
          {" "}
          <div className="list-none">
            <h2>Ингридиенты: </h2>
            {catalogItem.ingredients.map((name) => (
              <li>{name}</li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CatalogItem;
