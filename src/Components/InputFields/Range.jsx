import { useState } from 'react';

const Range = ({ maxValue, minValue, stepJump, valueByDefault }) => {
    const [value, setValue] = useState(valueByDefault); // State to hold the slider value
    const max = maxValue; // Maximum value for the range input
    const min = minValue; // Minimum value for the range input
    const step = stepJump; // Step value for the range input

    // Handler for when the range input changes
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="flex flex-column input-group" style={{ gap: '6px' }}>
            <label htmlFor="range">
                <span>{min}</span>
                <span>{max}</span>
            </label>
            <input
                type="range"
                name="range"
                id="range"
                max={max}
                min={min}
                step={step}
                value={value}
                onChange={handleChange}
                style={{
                    '--value-percent': `${((value - min) / (max - min)) * 100}%`,
                    '--track-border-radius': `${value === max ? '0' : '1rem'}`,
                }}
            />
        </div>
    );
};

export default Range;
