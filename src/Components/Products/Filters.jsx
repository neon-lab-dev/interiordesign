import { ICONS } from "../../assets/Assets"
import CheckBox from "../InputFields/CheckBox"
import Range from "../InputFields/Range"

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
        checkBoxes: ["All", "White", "Brown", "Blue", "Black"]
    },
    {
        title: "Price Range",
        checkBoxes: ["All"],
        slider: true
    },
    {
        title: "Customer Ratings",
        checkBoxes: ["All", "4 stars & above", "3 stars & above", "2 stars & above"]
    },
    {
        title: "New Arrivals",
        checkBoxes: ["Show new arrivals only"]
    }
]

const Filters = () => {


    return (
        <div className="d-flex flex-column">
            <div className="d-flex align-items-center gap-1">
                <span>Filters</span>
                <img src={ICONS.sortIcon} alt="sort" />
            </div>
            <div className="filters d-flex gap-2 flex-column">
                {filterOptions.map((option, index) => (
                    <div key={index} className="d-flex flex-column gap-2">
                        <span className="filter-title">{option.title}:</span>
                        <div className="d-flex flex-column" style={{ gap: '10px' }}>
                            {option.checkBoxes.map((checkBox, index) => (
                                <div key={index} className="d-flex align-items-center gap-1">
                                    <CheckBox label={checkBox} value={null} />
                                </div>
                            ))}
                            {option.slider && (
                                <Range maxValue={2500} minValue={400} stepsJump={100} valueByDefault={2000} />
                            )}
                        </div>
                    </div>
                ))}
                <button className="btn btn-products">
                    Reset All
                </button>
            </div>
        </div>
    )
}

export default Filters
