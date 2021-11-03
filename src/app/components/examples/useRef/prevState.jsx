import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
  const prevState = useRef("");
  const [otherState, setOtherState] = useState("false");
  const toggleOtherState = () => {
    console.log("toggle");
    setOtherState(prevState => {
      console.log("setOtherState");
      return prevState === "false" ? "true" : "false";
    });
  };
  useEffect(() => {
    console.log("useEffect", otherState);
    prevState.current = otherState;
  }, [otherState]);
  return (
    <CardWrapper>
      <SmallTitle>Предыдущее состояние</SmallTitle>
      <Divider />
      <p>Prev State {prevState.current} </p>
      <p>Current State {otherState} </p>
      <button className="btn btn-primary" onClick={toggleOtherState}>
        Toggle other state
      </button>
    </CardWrapper>
  );
};

export default PrevStateExample;
