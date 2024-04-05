import "./controlled-flow.scss";
import React from "react";

const ControlledFlow = ({ children, onDone, currentIndex, goBack, goNext }) => {
  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      goBack,
      goNext,
    });
  }

  return currentChild;
};

export default ControlledFlow;
