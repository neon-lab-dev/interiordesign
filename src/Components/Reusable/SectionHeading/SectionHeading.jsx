import PropTypes from "prop-types";

const SectionHeading = ({ subHeading, heading, subHeadingStyle, headingStyle }) => {
    return (
        <div className="text-center">
            <p className={`subHeading ${subHeadingStyle || ""}`}>
                {subHeading}
            </p>
            <h1 className={`heading mt-2 ${headingStyle || ""}`}>
                {heading}
            </h1>
        </div>
    );
};

// Prop validation
SectionHeading.propTypes = {
    subHeading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    subHeadingStyle: PropTypes.string,
    headingStyle: PropTypes.string,
};

export default SectionHeading;
