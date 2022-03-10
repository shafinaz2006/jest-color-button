import { React, useState } from "react";

const ColorButton = () => {
  const [color, setColor] = useState("red");
  const [btnColor, setBtnColor] = useState("red");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const changeColor = () => {
    setColor(color === "red" ? "blue" : "red");
    setBtnColor(color === "red" ? "blue" : "red");
  };
  const disableButton = () => {
    setBtnDisabled(!btnDisabled);
    setColor(btnDisabled ? btnColor : "gray");
  };
  return (
    <div>
      <h3>Button colors are blue and red</h3>
      <button
        style={{ backgroundColor: color }}
        onClick={changeColor}
        disabled={btnDisabled}
      >
        {btnColor === "blue" ? "Change to red" : "Change to blue"}
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

export default ColorButton;
