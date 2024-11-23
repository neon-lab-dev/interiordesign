import React from "react";

const InputBox = ({
  label,
  placeholder,
  value,
  onChange,
  multiline = false,
  rows = 3,
  type = "text",
}) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      {multiline ? (
        <textarea
          className="form-control bg-dark text-light border-0"
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type={type}
          className="form-control bg-dark text-light border-0"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputBox;
