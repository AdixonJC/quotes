import "./App.css";
import quotes from "./quotes.json";
import Cards from "./components/Cards/Cards";
import { randomNumber } from "./components/commonFunctions/randomNumber";
import { useState } from "react";
import Button from "./components/Button/Button";
import "./utils/icons/style.css";

const App = () => {
  console.log("EL RANDOM VEE ->>>", randomNumber(255));
  const a = Math.random().toFixed(2);

  const [index, setIndex] = useState(randomNumber(quotes));
  const [red, setRed] = useState(randomNumber(255));
  const [green, setGreen] = useState(randomNumber(255));
  const [blue, setBlue] = useState(randomNumber(255));
  const [alpha, setAlpha] = useState(a);

  const changeQuote = () => {
    setIndex(randomNumber(quotes));
    setRed(randomNumber(255));
    setGreen(randomNumber(255));
    setBlue(randomNumber(255));
    setAlpha(a);
  };

  const up = () => {
    setIndex(index + 1);
    setRed(randomNumber(255));
    setGreen(randomNumber(255));
    setBlue(randomNumber(255));
    setAlpha(a);
  };

  const lower = () => {
    setIndex(index - 1);
    setRed(randomNumber(255));
    setGreen(randomNumber(255));
    setBlue(randomNumber(255));
    setAlpha(a);
  };

  console.log("ALPHA --->>>>", a);

  console.log("red", red);
  console.log("green", green);
  console.log("blue", blue);
  console.log("ALPHA", alpha);

  const validationContrast =
    (red < 120 && green < 120 && blue < 120 ) ||
    (red < 112 && blue < 112 ) ||
    (green < 112 && blue < 112 ) ||
    (red < 112 && green < 112 )
      ? "#fff"
      : "#000";

      console.log(validationContrast);

  return (
    <div
      className="card"
      style={{ background: `rgb(${red},${green},${blue}` }}
    >
      <div
        className="container"
        style={{
          boxShadow: `0px 0px 20px 10px ${validationContrast}`,
          color: validationContrast,
          background: `rgba(${red},${green},${blue}, ${alpha}`
        }}
      >
        <h1>
          Quote #{index} of {quotes.length - 1}
        </h1>
        <div>
          <Cards
           phrase={quotes[index].quote} 
           author={quotes[index].author} />
        </div>
      </div>
        <div className="buttons">
        <div className="section">
          <Button
            colorBt={index === 0 ? "transparent" : validationContrast}
            icon={"icon-circle-left"}
            buttonFunction={lower}
            buttonActive={index === 0 ? true : false}
          />
          <Button
           colorBt={validationContrast}
           icon={"icon-shuffle"} 
           buttonFunction={changeQuote} />
          <Button
            colorBt={index === 101 ? "transparent" : validationContrast}
            icon={"icon-circle-right"}
            buttonFunction={up}
            buttonActive={index === 101 ? true : false}
          />
        </div>
        </div>
    </div>
  );
};

export default App;
