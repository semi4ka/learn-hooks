import React from "react";

const widthSimpleEx = Component => props => {
  const isLogin = localStorage.getItem("auth");
  const handleLogIn = () => {
    console.log("logIn");
  };
  const handleLogOut = () => {
    console.log("logOut");
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
