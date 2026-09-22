import logo from './assets/logo.png'; // Importação direta do caminho local

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo da Empresa" className="logo-img" />
    </header>
  );
}

export default Header;