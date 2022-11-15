import React, { Component } from "react";
import { convert, toCelsius, toFahrenheit } from "../../lib/converter";
//import BoilingVerdict from "../BoilingVerdict/BoilingVerdict";
import TempInput from "../TempInput/TempInput";

class Calculator extends Component {
  state = { temparature: 0, scale: "c" };
  onTempchange = (e, scale) => {
    this.setState({
      temparature: e.target.value,
      scale,
    });
  };
  render() {
    const { temparature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temparature, toCelsius) : temparature;
    const fahrenheit =
      scale === "c" ? convert(temparature, toFahrenheit) : temparature;
    return (
      <div>
        <br />
        <TempInput
          scale="c"
          temparature={celsius}
          onTempChange={this.onTempchange}
        ></TempInput>
        <br />
        <TempInput
          scale="f"
          temparature={fahrenheit}
          onTempChange={this.onTempchange}
        ></TempInput>
        {/* <BoilingVerdict temp={temparature} scale={scale}></BoilingVerdict> */}
      </div>
    );
  }
}

export default Calculator;
