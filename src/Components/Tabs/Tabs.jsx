import { ICONS } from "../../assets/Assets"
import Testimonial from "../Testimonial/Testimonial"
import "./Tabs.css"

const Tabs = () => {
    return (
        <section className="p-0">
            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link " id="key-specification-tab" data-bs-toggle="tab" data-bs-target="#key-specification-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Key Specifications</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Specifications</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Customer Review</button>
                </li>

            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade" id="key-specification-tab-pane" role="tabpanel" aria-labelledby="key-specification-tab" tabIndex="0">...</div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">...</div>
                <div className="tab-pane fade show active" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                    <div className="d-flex items-center justify-between gap-2 customersTabContent w-100">
                        <div className="ratings d-flex flex-column gap-4">
                            <div className="average-rating d-flex flex-column gap-1 align-items-start justify-content-between">
                                <div className="d-flex align-items-center gap-1">
                                    <img src={ICONS.star} alt="" />
                                    <span>4.5</span>
                                </div>
                                <div className="reviews-count">50 Reviews</div>
                            </div>
                            <div className="d-flex flex-column align-items-center gap-2 ratings-container">
                                <div className="progress-container d-flex align-items-center gap-2">
                                    <div className="d-flex align-items-center gap-1">
                                        <img src={ICONS.star} alt="" style={{ width: "24px", height: "24px" }} />
                                        <span style={{ lineHeight: "0px" }}>5</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="progress-container d-flex align-items-center gap-2">
                                    <div className="d-flex align-items-center gap-1">
                                        <img src={ICONS.star} alt="" style={{ width: "24px", height: "24px" }} />
                                        <span style={{ lineHeight: "0px" }}>4</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="progress-container d-flex align-items-center gap-2">
                                    <div className="d-flex align-items-center gap-1">
                                        <img src={ICONS.star} alt="" style={{ width: "24px", height: "24px" }} />
                                        <span style={{ lineHeight: "0px" }}>3</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="progress-container d-flex align-items-center gap-2">
                                    <div className="d-flex align-items-center gap-1">
                                        <img src={ICONS.star} alt="" style={{ width: "24px", height: "24px" }} />
                                        <span style={{ lineHeight: "0px" }}>2</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="progress-container d-flex align-items-center gap-2">
                                    <div className="d-flex align-items-center gap-1">
                                        <img src={ICONS.star} alt="" style={{ width: "24px", height: "24px" }} />
                                        <span style={{ lineHeight: "0px" }}>1</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <Testimonial />
                            <Testimonial />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tabs
