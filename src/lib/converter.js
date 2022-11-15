function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function convert(temparature, converTo) {
  const input = parseFloat(temparature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = converTo(input);
  const rounded = Math.round(output * 100) / 100;
  return rounded.toString();
}

export { toCelsius, toFahrenheit, convert };
