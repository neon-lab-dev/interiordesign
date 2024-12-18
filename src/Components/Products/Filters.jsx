import React, { useState } from "react";
import { ICONS } from "../../assets/Assets";
import CheckBox from "../InputFields/CheckBox";
import Range from "../InputFields/Range";

const filterOptions = [
    {
        title: "Product Type",
        checkBoxes: ["All", "BedSheets", "Chairs", "Tables"],
    },
    {
        title: "Material",
        checkBoxes: ["All", "Wood", "Metal", "Plastic", "Fabric"],
    },
    {
        title: "Size/Dimensions",
        checkBoxes: ["All", "Small", "Medium", "King Size", "Queen Size"],
    },
    {
        title: "Color",
        checkBoxes: ["All", "White", "Brown", "Blue", "Black"],
    },
    {
        title: "Price Range",
        checkBoxes: ["All"],
        slider: true,
    },
    {
        title: "Customer Ratings",
        checkBoxes: ["All", "4 stars & above", "3 stars & above", "2 stars & above"],
    },
    {
        title: "New Arrivals",
        checkBoxes: ["Show new arrivals only"],
    },
];

const Filters = ({ onFilterChange }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        "Product Type": "All",
        Material: "All",
        "Size/Dimensions": "All",
        Color: "All",
        "Price Range": 2000,
        "Customer Ratings": "All",
        "New Arrivals": false,
    });

    const handleCheckBoxChange = (category, value) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [category]: value,
        }));
        onFilterChange({
            ...selectedFilters,
            [category]: value,
        });
    };

    const handleRangeChange = (value) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            "Price Range": value,
        }));
        onFilterChange({
            ...selectedFilters,
            "Price Range": value,
        });
    };

    const handleReset = () => {
        const resetFilters = {
            "Product Type": "All",
            Material: "All",
            "Size/Dimensions": "All",
            Color: "All",
            "Price Range": 2000,
            "Customer Ratings": "All",
            "New Arrivals": false,
        };
        setSelectedFilters(resetFilters);
        onFilterChange(resetFilters);
    };

    return (
        <div className="d-flex flex-column" style={{ width: "222px" }}>
            <div className="d-flex align-items-center gap-1" id="filterSort">
                <span>Filters</span>
                <img src={ICONS.sortIcon} alt="sort" />
            </div>
            <div className="d-flex gap-2 flex-column filters">
                {filterOptions.map((option, index) => (
                    <div key={index} className="d-flex flex-column gap-2">
                        <span className="filter-title">{option.title}:</span>
                        <div className="d-flex flex-column" style={{ gap: "10px" }}>
                            {option.checkBoxes.map((checkBox, index) => (
                                <div key={index} className="d-flex align-items-center gap-1">
                                    <CheckBox
                                        label={checkBox}
                                        value={selectedFilters[option.title] === checkBox}
                                        onChange={() =>
                                            handleCheckBoxChange(option.title, checkBox)
                                        }
                                    />
                                </div>
                            ))}
                            {option.slider && (
                                <Range
                                    maxValue={2500}
                                    minValue={400}
                                    stepsJump={100}
                                    valueByDefault={selectedFilters["Price Range"]}
                                    onChange={handleRangeChange}
                                />
                            )}
                        </div>
                    </div>
                ))}
                <button className="btn btn-products" onClick={handleReset}>
                    Reset All
                </button>
            </div>
        </div>
    );
};

export default Filters;
