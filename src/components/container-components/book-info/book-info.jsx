import "./book-info.scss";

const BookInfo = ({ book }) => {
  return (
    <div>
      <h2>Title: {book?.title}</h2>

      <p>
        <strong>Author: </strong>: {book?.author}
      </p>
      <p>
        <strong>Pages: </strong> {book?.pages}
      </p>
      <p>
        <strong>Price:</strong> {book?.price}
      </p>
    </div>
  );
};

export default BookInfo;
