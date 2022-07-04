import logo from "../images/header/logo.svg";

export default function Header(props) {
  return (
    <header class="header container">
      <img src={logo} alt="МЕСТО росся" class="header__logo" />
    </header>
  );
}
