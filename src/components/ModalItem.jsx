import classes from './ModalItem.module.css';
import BookForm from './BookForm';

const ModalItem = ({ isShown, toggleModal, addBook }) => {
  return (
    isShown && (
      <div onClick={toggleModal} className={classes.modal}>
        <div
          onClick={(event) => event.stopPropagation()}
          className={classes.modalContent}
        >
          <button onClick={toggleModal}>x</button>
          <BookForm addBook={addBook} toggleModal={toggleModal} />
        </div>
      </div>
    )
  );
};

export default ModalItem;
