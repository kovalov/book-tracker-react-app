import classes from './MyHeader.module.css';
import MyButton from '../button/MyButton';

const MyHeader = ({ toggleModal }) => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <span className={classes.title}>Book tracker app</span>
        <MyButton
          handleClick={toggleModal}
          title='Add new book'
          classname='secondary'
        />
      </div>
    </header>
  );
};

export default MyHeader;
