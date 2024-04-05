import "./uncontrolled-form";
import { createRef } from "react";

const UncontrolledForm = () => {
  const nameRef = createRef();
  const ageRef = createRef();

  const submitEventHandler = (event) => {
    event.preventDefault();
    console.log(
      `Name ref: ${nameRef.current.value}, Age Ref: ${ageRef.current.value}`
    );
  };

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <form action="submit" onSubmit={submitEventHandler}>
        <input name="name" type="text" placeholder="Name" ref={nameRef} />
        <input name="age" type="number" placeholder="Age" ref={ageRef} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default UncontrolledForm;
