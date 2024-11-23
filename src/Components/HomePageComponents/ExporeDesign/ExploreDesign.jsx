import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ExploreDesign.css";
import { IMAGES } from "../../../assets/Assets";

const ExploreDesign = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#181818", padding: "80px" }}
    >
      <div className="text-center mb-5">
        <p className="heading-1 " style={{ color: "#c8c8c899" }}>
          Our Projects
        </p>
        <h3 className="heading-2 mb-3">Explore Our Design Showcase</h3>
        <p className="heading-1 text-start">
          From sleek modern minimalism to classic timeless elegance, our
          portfolio embodies a rich array of design styles and inspirations.
          Experience how we transform ideas into breathtaking, functional spaces
          that captivate and inspire, one project at a time.
        </p>
      </div>
      <div className="row g-4">
        {/* First Column */}
        <div className="col-md-4">
          <div className=" border-0">
            <img
              src={IMAGES.explore1}
              className="images-style "
              style={{ height: "318px" }}
              alt="Yellow Chair Design"
            />
          </div>
          <div className=" border-0 mt-4">
            <img
              src={IMAGES.explore2}
              className="images-style "
              style={{ height: "526px" }}
              alt="Framed Artwork"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="col-md-4">
          <div className=" border-0">
            <img
              src={IMAGES.explore3}
              className="images-style "
              style={{ height: "526px" }}
              alt="Terracotta Hallway"
            />
          </div>
          <div className=" border-0 mt-4">
            <img
              src={IMAGES.explore4}
              className="images-style "
              style={{ height: "318px" }}
              alt="Living Room"
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="col-md-4">
          <div className=" border-0">
            <img
              src={IMAGES.explore5}
              className="images-style "
              style={{ height: "318px" }}
              alt="White Kitchen"
            />
          </div>
          <div className=" border-0 mt-4">
            <img
              src={IMAGES.explore6}
              className="images-style "
              style={{ height: "526px" }}
              alt="Modern Kitchen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDesign;
