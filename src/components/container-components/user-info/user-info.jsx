import "./user-info.scss";

const UserInfo = ({ user }) => {
  const { name, age, country, books } = user;

  return (
    <div>
      <h2>User: {name}</h2>

      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Country:</strong> {country}
      </p>

      <h3>Published books:</h3>

      <ul>
        {books.map((book) => {
          return (
            <li>
              <p>{book}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserInfo;
