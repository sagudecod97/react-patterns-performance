const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let currentUser = {
  name: "Sarah Waters",
  age: 55,
  country: "United Kingdom",
  books: ["Fingersmith", "The Night Watch"],
};

let users = [
  {
    id: "25634569",
    name: "Sara Waters",
    age: 55,
    books: ["Fingersmith", "The Nigth Watch"],
  },
  {
    id: "85693562",
    name: "Haruki Murakami",
    age: 71,
    country: "Japan",
    books: ["Noewegian Wood", "Kafka on the Shore"],
  },
  {
    id: "78459612",
    name: "Chimamanda Ngozi Adichie",
    age: 43,
    country: "Nigeria",
    books: ["Half of the Yellow Sun", "Americanah"],
  },
];

let books = [
  {
    id: "25634569",
    title: "To Kill a Mockingbird",
    pages: 281,
    author: "Harper Lee",
    price: 12.99,
  },
  {
    id: "25634563",
    title: "The Catcher in the Rye",
    pages: 224,
    author: "J.D. Salinger",
    price: 9.99,
  },
  {
    id: "25634566",
    title: "The Little Prince",
    pages: 85,
    author: "Antoine de Saint-Exupéry",
    price: 7.99,
  },
];

app.get("/current-user", (req, res) => res.status(200).json({ currentUser }));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  console.log(user);
  res.status(200).json(user);
});

app.get("/users", (req, res) => res.json(users));

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: editedUser } = req.body;

  users = users.map((user) => (user.id === id ? editedUser : user));

  res.json(users.find((user) => user.id === id));
});

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  res.json(books.find((book) => book.id === id));
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port: ${SERVER_PORT}`)
);
