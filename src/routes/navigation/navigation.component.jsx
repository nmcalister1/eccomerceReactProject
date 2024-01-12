import { Link, Outlet } from "react-router-dom";
import CrownLogo from "../../assets/crown.svg?react" 
import "./navigation.styles.scss"

export function NavBar(){
    return (
      <>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrownLogo />
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
            <Link className="nav-link" to="/sign-in">
                SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </>
    )
  }