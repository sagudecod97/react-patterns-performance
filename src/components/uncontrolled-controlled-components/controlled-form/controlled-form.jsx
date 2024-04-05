import "./controlled-form.scss";
import { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(2);

  const onChangeNameHandler = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const onChangeAgeHandler = (event) => {
    const { value } = event.target;
    setAge(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Age: ${age}`);
  };

  const onBlurValidation = (event) => {
    const { name, value } = event.target;

    if (name === "name" && value.length === 0) {
      console.log("Error: The name field can't be empty");
    }
  };

  return (
    <>
      <h2>Controlled Form</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChangeNameHandler}
          onBlur={onBlurValidation}
        />
        <input
          type="number"
          name="age "
          placeholder="Age"
          value={age}
          onChange={onChangeAgeHandler}
          onBlur={onBlurValidation}
        />
        <button onClick={onSubmitHandler}>Submit</button>
      </form>
    </>
  );
};

export default ControlledForm;
