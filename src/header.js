import logo from './logo.png';
export const Header = () => {
  return (
    <header className="App-header">
      <p> <img src={logo} className="App-logo" alt="logo" />
      </p>
      <p>Прекрасный список любимых блюд</p>

    </header>
  );
}