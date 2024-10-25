import { useState } from 'react';

const Range = () => {
    const [value, setValue] = useState(0); // State to hold the slider value
    const max = 100;
    const min = 0;
    const step = 10;

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
