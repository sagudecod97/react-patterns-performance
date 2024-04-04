import "./App.scss";
import { authors } from "./data/authors";

import Modal from "./components/modal/modal";
import AuthorsList from "./components/lists/authors-list/authors-list";
import ListsComponent from "./components/lists/lists-component";

function App() {
  return (
    <div className="App">
      <Modal buttonText="Open modal">
        <ListsComponent
          items={authors}
          sourcePropName="authors"
          ListToRender={AuthorsList}
        />
      </Modal>
    </div>
  );
}

export default App;
