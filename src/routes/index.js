import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./About";
import Basket from "./Basket";
import Adress from "./Adress";
import Catalog from "./catalog";
import CatalogItem from "./catalog/catalogItem";

const router = createBrowserRouter([
    { 
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Catalog />,
        },
        {
          path: "/catalog/:id",
          element: <CatalogItem />,
        }
      ]
    },
    {
      path: "about",
      element: <About />,

    },
    {
      path: "basket",
      element: <Basket />,
    },
    {
      path: "adress",
      element: <Adress />,
    }
  ]);

  export default router;