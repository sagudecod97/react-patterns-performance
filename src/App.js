import "./App.scss";
import { useState } from "react";

import UncontrolledForm from "./components/uncontrolled-controlled-components/uncontrolled-form/uncontrolled-form";
import UncontrolledFlow from "./components/uncontrolled-controlled-components/uncontrolled-flow/uncontrolled-flow";
import ControlledForm from "./components/uncontrolled-controlled-components/controlled-form/controlled-form";
import ControlledModal from "./components/uncontrolled-controlled-components/controlled-modal/controlled-modal";
import ControlledFlow from "./components/uncontrolled-controlled-components/controlled-flow/controlled-flow";

const StepOne = ({ goNext }) => {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Step One</h2>

      <form>
        <input name="name" type="text" placeholder="Name..." />
        <input name="lastName" type="text" placeholder="Lastname..." />
      </form>

      <button onClick={() => goNext({ name: "Santiago", lastName: "Agudelo" })}>
        Next
      </button>
    </div>
  );
};

const StepTwo = ({ goBack, goNext }) => {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Step Two</h2>

      <button onClick={goBack}>Back</button>
      <button onClick={() => goNext({ age: 26 })}>Next</button>
    </div>
  );
};

const StepThree = ({ goBack, goNext }) => {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Step Three</h2>

      <button onClick={goBack}>Back</button>
      <button onClick={() => goNext({ done: true })}>Done</button>
    </div>
  );
};

const onDoneHandler = (data) => {
  console.log("Flow data: ", data);
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flowData, setFlowData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (stepData) => {
    setFlowData({ ...flowData, ...stepData });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const goBack = () => setCurrentStepIndex(currentStepIndex - 1);

  const openModalHandler = () => setIsModalOpen(!isModalOpen);
  return (
    <div className="App">
      <UncontrolledForm />

      <ControlledForm />

      <button onClick={openModalHandler}>Show Modal</button>
      <ControlledModal shouldDisplay={isModalOpen} onClose={openModalHandler} />

      <UncontrolledFlow onDone={onDoneHandler}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>

      <ControlledFlow
        goBack={goBack}
        goNext={goNext}
        currentIndex={currentStepIndex}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledFlow>
    </div>
  );
}

export default App;
