import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="hero">
            <div className="overlay"></div>
            <div className="hero-content d-flex flex-column gap-5">
                <div className="text d-flex flex-column gap-3">
                    <h1>Build Your Elegant Dream Home Interior</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <Link to="/products">
                    <button className="btn btn-primary">Our Products</button>
                </Link>
            </div>
        </section>
    )
}

export default Hero
