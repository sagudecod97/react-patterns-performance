import "./books-list.scss";

const BooksList = ({ books }) => {
  return (
    <>
      <h2>Books List</h2>
      <ul>
        {books.map(({ id, name, pages, author, price }) => {
          return (
            <li key={id}>
              <h3>Book: {name}</h3>

              <p>Pages: {pages}</p>
              <p>Author: {author}</p>
              <p>Price: {price}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BooksList;
