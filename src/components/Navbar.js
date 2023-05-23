import "./Navbar.css"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context"
function Navbar() {
  const { showClose, setShowClose, showNav, setShowNav } = useGlobalContext()
  const handleClick = () => {
    console.log(showClose)
    setShowClose(!showClose)
  }
  const handleClickNav = () => {
    setShowNav(!showNav)
  }
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="/assets/shared/desktop/logo.svg" alt="logo" />
        </Link>
      </div>
      {/*<nav className={`${windowWidth > 576 ? "nav-desktop " : "hidde-mobile"} `}>*/}
      <nav className={`nav-desktop nav-mobile ${showClose ? "show-mobile" : ""} `}>
        <ul>
          <li onClick={handleClickNav}>
            <Link to="/stories">stories</Link>
          </li>
          <li>
            {" "}
            <Link to="/features">features</Link>
          </li>
          <li>
            {" "}
            <Link to="/pricing">pricing</Link>
          </li>
        </ul>{" "}
        <hr className="hr-mobile" />
        <div className="get-link">
          <Link to="/" className="get-link">
            get an invite
          </Link>
        </div>
      </nav>
      {/*showClose ||
        (windowWidth < 576 && (
          <nav className="nav-mobile .show-mobile">
            <ul>
              <li>
                <Link to="/stories">stories</Link>
              </li>
              <li>
                {" "}
                <Link to="/features">features</Link>
              </li>
              <li>
                {" "}
                <Link to="/pricing">pricing</Link>
              </li>
            </ul>{" "}
            <div className="get-link">
              <Link to="/" className="get-link">
                get an invite
              </Link>
            </div>
          </nav>
        ))*/}

      <div className="toggle-btn ">
        <button type="button" className={`close ${showClose ? "show-menu" : "hidde-menu"}`} onClick={handleClick}>
          <img src="/assets/shared/mobile/close.svg" alt="close" />
        </button>
        <button type="button" className={`menu ${showClose ? "hidde-menu" : "show-menu"}`} onClick={handleClick}>
          <img src="/assets/shared/mobile/menu.svg" alt="menu" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
