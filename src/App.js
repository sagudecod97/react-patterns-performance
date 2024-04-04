import "./App.scss";
import { authors } from "./data/authors";
import { books } from "./data/books";

import AuthorsList from "./components/lists/authors-list/authors-list";
import BooksList from "./components/lists/books-list/books-list";
import ListsComponent from "./components/lists/lists-component";

function App() {
  return (
    <div className="App">
      <ListsComponent
        items={authors}
        sourcePropName="authors"
        ListToRender={AuthorsList}
      />

      <ListsComponent
        items={books}
        sourcePropName="books"
        ListToRender={BooksList}
      />
    </div>
  );
}

export default App;
