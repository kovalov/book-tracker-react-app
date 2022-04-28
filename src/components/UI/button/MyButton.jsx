import classes from './MyButton.module.css';

const MyButton = ({ title, handleClick, classname = '' }) => {
  return (
    <button
      onClick={handleClick}
      className={`${classes.button} ${classes[classname]}`}
    >
      {title}
    </button>
  );
};

export default MyButton;

// className={classes[classname]}
