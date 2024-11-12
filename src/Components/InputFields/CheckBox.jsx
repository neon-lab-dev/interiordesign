import { ICONS } from "../../assets/Assets"
import { useState } from "react";


const CheckBox = ({ label, value }) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    }

    return (
        <div className="checkBox d-flex align-items-center gap-1">
            <img src={`${checked ? ICONS.checked : ICONS.unchecked}`} alt="search" onClick={handleCheck} />
            <label>{label}</label>
        </div>
    )
}

export default CheckBox
