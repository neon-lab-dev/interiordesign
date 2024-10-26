import { IMAGES } from "../../assets/Assets"
import './Footer.css'

const Footer = () => {
    return (
        <footer className="w-100">
            <div className="d-flex align-items-start justify-ceontent-between w-100 ">
                <div className="footer-logo">
                    <img src={IMAGES.footerLogo} alt="" />
                </div>
                <div className="d-flex items-start justify-content-between w-100">
                    <div className="footer-links gap-2">
                        <span className="footer-head text-uppercase">EXPLORE OUR RANGE</span>
                        <div className="d-flex flex-column gap-1">
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Products</a>
                        </div>
                    </div>
                    <div className="footer-links gap-2">
                        <span className="footer-head text-uppercase">Why Us</span>
                        <div className="d-flex flex-column gap-1">
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Products</a>
                        </div>
                    </div>
                    <div className="footer-links gap-2">
                        <span className="footer-head text-uppercase">connect with us</span>
                        <div className="d-flex flex-column gap-1">
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Products</a>
                        </div>
                    </div>
                    <div className="footer-links gap-2">
                        <span className="footer-head text-uppercase">visit our store</span>
                        <div className="d-flex flex-column gap-1">
                            <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Products</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-text text-center">
                © 2024 Space Frame. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
