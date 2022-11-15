import React from "react";
const scalNames = {
  c: "Celsius",
  f: "Farenheit",
};
const TempInput = (props) => {
  const { scale, temparature, onTempChange } = props;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <fieldset style={{ width: "50%" }}>
        <legend>
          <b>Enter Temparature in {scalNames[scale]} :</b>{" "}
        </legend>
        <input
          type="text"
          value={temparature}
          onChange={(e) => onTempChange(e, scale)}
        />
      </fieldset>
    </div>
  );
};

export default TempInput;
