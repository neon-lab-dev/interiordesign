import { IMAGES } from "../../assets/Assets"
import './Footer.css'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="w-100" id="footer">
            <div className="d-flex align-items-start justify-content-between w-100 hide-1024">
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
                            <a href="/contact">Contact Us</a>
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/shipping">Shipping and Refund Policy</a>
                            <a href="/tandc">Terms and Conditions</a>
                        </div>
                    </div>
                    <div className="footer-links gap-2">
                        <span className="footer-head text-uppercase">connect with us</span>
                        <div className="d-flex flex-column gap-1">
                            {/* <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Products</a> */}
                        </div>
                    </div>
                    <div className="footer-links gap-2">
                        <span className="footer-head text-uppercase">visit our store</span>
                        <div className="d-flex flex-column gap-1">
                            {/* <a href="/">Home</a>
                            <a href="/">About</a>
                            <a href="/">Products</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-column align-items-start justify-content-between w-100 show-1024-flex">
                <div className="footer-logo mb-2" style={{ marginRight: 0 }}>
                    <Link to="/">
                        <img src={IMAGES.footerLogo} alt="" />
                    </Link>
                </div>
                <div className="accordion w-100" id="footerAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className="footer-head text-uppercase">EXPLORE OUR RANGE</span>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#footerAccordion">
                            <div className="accordion-body d-flex flex-column gap-1">
                                <Link to="/">Home</Link>
                                <Link to="/">About</Link>
                                <Link to="/products">Products</Link>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span className="footer-head text-uppercase">Why Us</span>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                            <div className="accordion-body d-flex flex-column gap-1">
                                <Link to="/">Home</Link>
                                <Link to="/">About</Link>
                                <Link to="/products">Products</Link>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className="footer-head text-uppercase">connect with us</span>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                            <div className="accordion-body d-flex flex-column gap-1">
                                <Link to="/">Home</Link>
                                <Link to="/">About</Link>
                                <Link to="/products">Products</Link>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span className="footer-head text-uppercase">visit our store</span>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                            <div className="accordion-body d-flex flex-column gap-1">
                                <Link to="/">Home</Link>
                                <Link to="/">About</Link>
                                <Link to="/products">Products</Link>
                            </div>
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
