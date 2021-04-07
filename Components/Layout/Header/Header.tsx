import Link from "next/link";
import Nav from "./Nav/Nav";

/*====================*/

function Header() {
  return (
    <header className="header flex-container content-space-between">
      <Link href="/">
        <a className="header__logo">
          <svg>
            <circle cy="55" cx="25" fill="#4d8be3" r="0"></circle>
            <circle cy="5" cx="40" fill="#4d8be3" r="0"></circle>
            <circle cy="5" cx="95" fill="#4d8be3" r="0"></circle>
            <circle cy="55" cx="115" fill="#4d8be3" r="0"></circle>
            <circle cy="30" cx="140" fill="#4d8be3" r="0"></circle>
          </svg>
          <img src="/images/logo.svg" alt="Logo" />
        </a>
      </Link>
      <Nav />
    </header>
  );
}

/*====================*/

export default Header;
