import { ICONS } from "../../assets/Assets"
import "./Testimonial.css"

const Testimonial = () => {
    return (
        <div className="d-flex flex-column gap-2 testimonial h-fit">
            <div className="d-flex align-items-center gap-1">
                <img src={ICONS.star} alt="" style={{ width: "24px", height: "24px" }} />
                <span style={{ lineHeight: "0px" }}>4.8</span>
                <span className="author">Rahul</span>
            </div>
            <div className="d-flex align-items-center gap-3 time">
                <span>2024-01-25</span>
                <span>3:45 PM</span>
            </div>
            <div className="testimonial-description">
                Introducing our Elite Series Kashmiri Willow Cricket Bat, crafted to perfection from the finest Kashmiri willow. This bat is designed for players who demand precision, power, and an authentic cricketing experience.
            </div>
            <div className="d-flex gap-1 align-items center feedback">
                <div className="like-container">
                    <img src={ICONS.like} alt="" />
                </div>
                <span>Was Helpful</span>
            </div>
        </div>
    )
}

export default Testimonial
