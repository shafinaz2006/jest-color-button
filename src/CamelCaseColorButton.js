import { React, useState } from "react";

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}
const CamelCaseColorButton = () => {

  const [color, setColor] = useState("MediumVioletRed");
  const [btnColor, setBtnColor] = useState("MediumVioletRed");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const changeColor = () => {
    setColor(color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed");
    setBtnColor(color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed");
  };
  const disableButton = () => {
    setBtnDisabled(!btnDisabled);
    setColor(btnDisabled ? btnColor : "gray");
  };
  return (
    <div>
      <h3>Button colors have camel case</h3>
      <button
        style={{ backgroundColor: color }}
        onClick={changeColor}
        disabled={btnDisabled}
      >
        {btnColor === "MidnightBlue" ? 
          `Change to ${replaceCamelWithSpaces('MediumVioletRed')}` 
          : `Change to ${replaceCamelWithSpaces('MidnightBlue')}`}
      </button>
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        label="checkbox"
        defaultChecked={disableButton}
        onChange={disableButton}
      />
      <label htmlFor="checkbox">Disable button</label>
    </div>
  );
};

export default CamelCaseColorButton;
