import { Link } from "react-router-dom";
import logo from "./logo.png";

function Header({ sum }) {
  return (
    <header className="flex flex-row bg-cyan-700 items-center border-neutral-800">
      <div className="flex basis-1/2">
        <button className="pl-2 pr-3">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="block w-20 p-2">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="flex basis-1/6 rounded-full justify-center hover:bg-slate-500 cursor-pointer">
        <Link to="about">Главная</Link>
      </div>
      <div className="flex basis-1/6 rounded-full justify-center hover:bg-slate-500 cursor-pointer">
        <Link to="adress">
          <button>Адрес</button>
        </Link>
      </div>
      <div className="flex basis-1/6 rounded-full justify-around hover:bg-slate-500 cursor-pointer">
        <Link to="basket">
          <div>
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div>{sum}</div>
        </Link>
      </div>
    </header>
  );
}
export default Header;
