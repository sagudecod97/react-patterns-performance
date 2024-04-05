import "./uncontrolled-flow.scss";
import React, { useState } from "react";

const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBackHandler = () => setCurrentIndex(currentIndex - 1);

  const goNextHandler = (dataFromStep) => {
    const nextStepIndex = currentIndex + 1;

    const newData = { ...data, ...dataFromStep };

    if (nextStepIndex < children.length) {
      setCurrentIndex(nextStepIndex);
    } else {
      onDone(newData);
    }

    setData(newData);
  };

  const onDoneHandler = () => onDone(data);

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      goBack: goBackHandler,
      goNext: goNextHandler,
      onDone: onDoneHandler,
    });
  }

  return currentChild;
};

export default UncontrolledFlow;
