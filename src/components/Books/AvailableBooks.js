import Card from "../UI/Card";
import BookItem from "./BookItem/BookItem";
import classes from "./AvailableBooks.module.css";

const DUMMY_BOOKS = [
  {
    id: "m1",
    title: "Fresh fishing",
    description: "A book about fish",
    price: 22.99,
  },
  {
    id: "m2",
    title: "Green",
    description: "Everything about the color green.",
    price: 16.5,
  },
  {
    id: "m3",
    title: "The wealth of nation",
    description: "A classic",
    price: 12.99,
  },
  {
    id: "m4",
    title: "Goblin tomorrow",
    description: "A look into the future.",
    price: 18.99,
  },
];

const AvailableBooks = () => {
  const booksList = DUMMY_BOOKS.map((book) => (
    <BookItem
      key={book.id}
      id={book.id}
      title={book.title}
      description={book.description}
      price={book.price}
    />
  ));
  return (
    <section className={classes.books}>
      <Card>
        <ul>{booksList}</ul>
      </Card>
    </section>
  );
};

export default AvailableBooks;
