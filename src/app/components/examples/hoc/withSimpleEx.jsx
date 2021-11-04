import React, { useState } from "react";

const widthSimpleEx = Component => props => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("auth"));
  const handleLogIn = () => {
    console.log("logIn");
    localStorage.setItem("auth", true);
    setIsLogin(() => !isLogin);
  };
  const handleLogOut = () => {
    console.log("logOut");
    localStorage.removeItem("auth");
    setIsLogin(() => !isLogin);
  };

  return (
    <Component
      {...props}
      isAuth={isLogin}
      onLogin={handleLogIn}
      onLogOut={handleLogOut}
    />
  );
};

export default widthSimpleEx;
