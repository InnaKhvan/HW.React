import logo from './logo.png';
import adress from './Земля.jpg';
export const Header = () => {
  return (
    <header className="App-header">
      <div class='logo'>
        <img src={logo} className="App-logo" alt="logo" />
        <p class='name'>Прекрасный список любимых блюд</p>
      </div>
      <nav>
        <a>Главная</a>
        <a>Контакты</a>
        <a href={adress}>Адрес</a>
      </nav>
    </header>
  );
}