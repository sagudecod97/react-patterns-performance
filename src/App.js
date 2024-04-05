import "./App.scss";

import CurrentUserLoader from "./components/container-components/current-user-loader/current-user-loader";
import UserLoader from "./components/container-components/user-loader/user-loader";
import ResourceLoader from "./components/container-components/resource-loader/resource-loader";
import DataSource from "./components/container-components/data-source/data-source";
import DataSourceWithRender from "./components/container-components/data-source-with-render/data-source-with-render";
import UserInfo from "./components/container-components/user-info/user-info";
import BookInfo from "./components/container-components/book-info/book-info";

function App() {
  const getBookData = async () => {
    try {
      const request = await fetch("http://localhost:9090/books/25634563");
      const response = await request.json();

      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="App">
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId={25634569}>
        <UserInfo />
      </UserLoader>

      <ResourceLoader resourceName="book" resourceUrl="/books/25634566">
        <BookInfo />
      </ResourceLoader>

      <DataSource resourceName="book" getData={getBookData}>
        <BookInfo />
      </DataSource>

      <DataSourceWithRender
        getData={getBookData}
        render={(resource) => <BookInfo book={resource} />}
      />
    </div>
  );
}

export default App;
