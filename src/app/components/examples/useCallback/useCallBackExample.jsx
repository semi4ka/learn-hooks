import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withOutCallback = useRef(0);
  const withCallback = useRef(0);
  const handleChange = ({ target }) => {
    setData(prevState => ({ ...prevState, [target.name]: target.value }));
  };
  //WithOutCallBack
  const validateWithOutCallBack = data => {
    console.log(data);
  };
  useEffect(() => {
    withOutCallback.current++;
  }, [validateWithOutCallBack]);

  //WithCallBack
  const validateWithCallBack = useCallback(data => {
    console.log(data);
  }, []);
  useEffect(() => {
    withCallback.current++;
  }, [validateWithCallBack]);

  useEffect(() => {
    validateWithOutCallBack(data);
    validateWithCallBack(data);
  }, [data]);
  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>Render withOutCallback: {withOutCallback.current}</p>
      <p>Render withCallback: {withCallback.current}</p>

      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        value={data.email || ""}
        name="email"
        onChange={handleChange}
      />
    </CardWrapper>
  );
};

export default UseCallBackExample;
