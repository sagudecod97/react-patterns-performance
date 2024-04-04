import "./App.scss";

import ScreenSplitter from "./components/screen-splitter/screen-splitter";

const SplitItem = ({ title }) => {
  return <h2>{title}</h2>;
};

function App() {
  return (
    <div className="App">
      <ScreenSplitter leftClass="split-left" rigthClass="split-right">
        <SplitItem title="Hello world, left!" />
        <SplitItem title="Hello world, right!" />
      </ScreenSplitter>
    </div>
  );
}

export default App;
