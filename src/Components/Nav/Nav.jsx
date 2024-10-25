import { IMAGES, ICONS } from "@/assets/Assets.jsx"
import './Nav.css'

const Nav = () => {
    return (
        <nav className='navBar d-flex align-items-center justify-content-between'>
            <div className="d-flex align-items-center gap-4">
                <div className="logo">
                    <img src={IMAGES.logo} alt="logo" />
                </div>
                <div className="nav-links d-flex align-items-center gap-3">
                    <a href="#">Bedsheets</a>
                    <a href="#">Chairs</a>
                    <a href="#">Tables</a>
                </div>
            </div>
            <div className="d-flex align-items-center gap-4">
                <div className="search-container">
                    <img src={ICONS.searchIconGrey} alt="" />
                    <input type="text" placeholder="What Are You Looking For?" />
                </div>
                <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-1">
                        <img src={ICONS.heartIconGrey} alt="" />
                        <span>Wishlist</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                        <img src={ICONS.cartIconGrey} alt="" />
                        <span>My Cart</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                        <img src={ICONS.profileIconGrey} alt="" />
                        <span>Profile</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
