import Link from "next/link";
import { useState } from "react";

/*====================*/

function Nav() {
  const [isActive, setActive] = useState(false);

  /*====================*/

  return (
    <>
      <div className="header__mobile-nav">
        <button
          onClick={() => {
            setActive(!isActive);
          }}
          className="default-btn flex-container header__mobile-nav-button"
        >
          <span className="material-icons">{isActive ? "close" : "menu"}</span>
        </button>
      </div>

      <nav className={`${isActive ? "active " : ""}flex-container header__nav`}>
        <Link href="/projects">Проекты</Link>
        <Link href="/contacts">Контакты</Link>
      </nav>
    </>
  );
}

/*====================*/

export default Nav;
