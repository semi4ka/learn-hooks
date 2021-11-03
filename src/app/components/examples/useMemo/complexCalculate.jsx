import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
  console.log("run factorial");
  return factorial(n);
}

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100);
  const [otherState, setOtherState] = useState(false);
  const buttonColor = otherState ? "primary" : "secondary";
  useEffect(() => {
    console.log("render");
  });

  const fact = useMemo(() => runFactorial(value), [value]);
  return (
    <>
      <CardWrapper>
        <SmallTitle>Кэширование сложных вычислений</SmallTitle>
        <p>value: {value}</p>
        <p>result fact: {fact}</p>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setValue(prevState => prevState + 10);
          }}
        >
          increment
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setValue(prevState => prevState - 10);
          }}
        >
          decrement
        </button>
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>Зависимость от сторонних setState</SmallTitle>
        <button
          className={"btn btn-" + buttonColor}
          onClick={() => setOtherState(prevState => !prevState)}
        >
          Change color
        </button>
      </CardWrapper>
    </>
  );
};

export default ComplexCalculateExample;
