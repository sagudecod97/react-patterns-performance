import "./authors-list.scss";

const AuthorsList = ({ authors }) => {
  return (
    <>
      <h2>Authors List</h2>
      <ul>
        {authors.map(({ id, name, age, books }) => {
          return (
            <li key={id}>
              <h3>Author: {name}</h3>
              <p>Age: {age}</p>

              <h4>{name} books:</h4>
              <ul>
                {books.map((book) => (
                  <li>
                    <p>{book}</p>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AuthorsList;
