import { IMAGES, ICONS } from "@/assets/Assets.jsx"
import { Link } from "react-router-dom"
import './Nav.css'

const Nav = () => {
    return (
        <nav className='navBar d-flex align-items-center justify-content-between'>
            <div className="w-100 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-4">
                    <Link to="/" className="logo">
                        <img src={IMAGES.logo} alt="logo" />
                    </Link>
                    <div className="nav-links d-flex align-items-center gap-3 horizontal-nav-links">
                        <Link to="/products">Bedsheets</Link>
                        <Link to="/products">Chairs</Link>
                        <Link to="/products">Tables</Link>
                    </div>
                </div>
                <div className="search-container d-none d-md-none d-sm-flex">
                    <img src={ICONS.searchIconGrey} alt="" />
                    <input type="text" placeholder="What Are You Looking For?" />
                </div>
                <div className="d-flex align-items-center gap-4 left-container">
                    <div className="search-container d-md-flex d-sm-none">
                        <img src={ICONS.searchIconGrey} alt="" />
                        <input type="text" placeholder="What Are You Looking For?" />
                    </div>
                    <div className="d-flex align-items-center gap-4 left-menus">
                        <Link to="/wishlist" className="d-flex align-items-center gap-1">
                            <img src={ICONS.heartIconGrey} alt="" />
                            <span>Wishlist</span>
                        </Link>
                        <Link to="/cart" className="d-flex align-items-center gap-1">
                            <img src={ICONS.cartIconGrey} alt="" />
                            <span>My Cart</span>
                        </Link>
                        <Link to="/profile" className="d-flex align-items-center gap-1">
                            <img src={ICONS.profileIconGrey} alt="" />
                            <span>Profile</span>
                        </Link>
                        <div className="d-flex align-items-center gap-1 d-none hamburgerMenu">
                            <img src={ICONS.hamburgerMenu} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-container search-container-small d-none">
                <img src={ICONS.searchIconGrey} alt="" />
                <input type="text" placeholder="What Are You Looking For?" />
            </div>
        </nav>
    )
}

export default Nav
