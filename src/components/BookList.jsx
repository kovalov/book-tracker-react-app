import classes from './BookList.module.css';
import MyButton from './UI/button/MyButton';

const BookList = ({ books, deleteBook }) => {
  if (!books.length)
    return (
      <div className={classes.listContainer}>
        <h2 className={classes.listTitle}>Empty</h2>
      </div>
    );

  return (
    <div className={classes.listContainer}>
      <h2 className={classes.listTitle}>To read</h2>
      <ul className={classes.list}>
        {books.map((book) => (
          <li key={book.id} className={classes.listItem}>
            <div className={classes.listItemContent}>
              <div className={classes.listItemTitle}>
                {book.title}
              </div>
              <div className={classes.listItemAuthor}></div>
              <div className={classes.listItemNumber}></div>
            </div>
            <MyButton
              handleClick={() => deleteBook(book.id)}
              title='Delete'
              classname='list'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
