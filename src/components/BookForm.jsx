import { useState } from 'react';
import classes from './BookForm.module.css';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const BookForm = ({ addBook, toggleModal }) => {
  const [data, setData] = useState({
    title: '',
    author: '',
    number: '',
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setData({
      ...data,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.title && data.author && data.number) {
      addBook(data);
      setData({
        title: '',
        author: '',
        number: '',
      });
      toggleModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <MyInput
        onChange={handleChange}
        value={data.title}
        name='title'
        type='text'
        placeholder='title'
      />
      <MyInput
        onChange={handleChange}
        value={data.author}
        name='author'
        type='text'
        placeholder='author'
      />
      <MyInput
        onChange={handleChange}
        value={data.number}
        name='number'
        type='number'
        placeholder='number'
      />
      <MyButton title='Submit' classname='form' />
    </form>
  );
};

export default BookForm;
