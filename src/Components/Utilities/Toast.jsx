import React from "react";
import "./Toast.css" // Import CSS for animation and styling

const Toast = ({ type = "info", message, show, onClose }) => {
    const backgroundColors = {
        success: "bg-success text-white",
        error: "bg-danger text-white",
        info: "bg-info text-white",
    };

    console.log("Toast rendered");

    return (
        show && (
            <div
                className={`toast-container position-fixed top-0 start-50 translate-middle-x mt-3`}
                style={{ zIndex: 100000 }}
            >
                <div className={`toast align-items-center ${backgroundColors[type]} p-3`}>
                    <div className="d-flex">
                        <div className="toast-body">
                            {message || "Default Toast Message"}
                        </div>
                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            aria-label="Close"
                            onClick={onClose}
                        ></button>
                    </div>
                </div>
            </div>
        )
    );
}
export default Toast;
