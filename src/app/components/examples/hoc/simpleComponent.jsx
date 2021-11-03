import React from "react";

import PropTypes from "prop-types";
// import Subtitle from "../../common/typografy/subtitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  return (
    <>
      {isAuth ? (
        <button className="btn btn-primary" onClick={onLogOut}>
          LogOut
        </button>
      ) : (
        <button className="btn btn-primary" onClick={onLogin}>
          LogIn
        </button>
      )}
    </>
  );
};
SimpleComponent.propTypes = {
  isAuth: PropTypes.bool,
  onLogin: PropTypes.func,
  onLogOut: PropTypes.func
};
export default SimpleComponent;
