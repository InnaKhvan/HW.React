import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "./About";
import Basket from "./Basket";
import Adress from "./Adress";

const router = createBrowserRouter([
    { 
      path: "/",
      element: <App />,
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