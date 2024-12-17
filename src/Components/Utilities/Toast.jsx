import "./Toast.css"; // Import CSS for animation and styling
import PropTypes from 'prop-types';

const Toast = ({ type = "info", message, show, onClose }) => {
    const backgroundColors = {
        success: "bg-success text-white",
        error: "bg-danger text-white",
        info: "bg-info text-white",
    };

    if (show) {
        console.log("Toast is visible");
    }

    return (
        <div
            className={`toast-container translate-middle-x mt-3 ${show ? "show" : "hide"
                }`}
            style={{ zIndex: 100000 }}
        >
            <div
                className={`toast align-items-center ${backgroundColors[type]} p-3`}
            >
                <div className="d-flex">
                    <div className="toast-body">{message || "Default Toast Message"}</div>
                    <button
                        type="button"
                        className="btn-close btn-close-white me-2 m-auto"
                        aria-label="Close"
                        onClick={onClose}
                    ></button>
                </div>
            </div>
        </div>
    );
};
Toast.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Toast;
