import classes from './BooksSummary.module.css';

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>All great books, available for you</h2>
      <p>
        Choose any great book of intereset.
      </p>
      <p>
        Only the best quality books from all around the world.
      </p>
    </section>
  );
};

export default BooksSummary;