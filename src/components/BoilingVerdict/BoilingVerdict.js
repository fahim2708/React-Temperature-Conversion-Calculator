import React from "react";

const BoilingVerdict = (props = 0) => {
  const { temp, scale } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        borderTop: "dotted",
        marginTop: "40px",
      }}
    >
      <h5>
        Would water boil in this temp?{" "}
        <span style={{ color: "#3c40c6" }}>
          {scale === "c"
            ? temp >= 99.97
              ? "- Yes"
              : "- No"
            : scale === "f" && temp >= 211.95
            ? "- Yes"
            : "- No"}
        </span>
      </h5>
    </div>
  );
};

export default BoilingVerdict;
