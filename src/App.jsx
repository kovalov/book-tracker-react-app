import { useState } from 'react';
import MyHeader from './components/UI/header/MyHeader';
import MyButton from './components/UI/button/MyButton';
import BookList from './components/BookList';
import ModalItem from './components/ModalItem';

function App() {
  const [books, setBooks] = useState([
    {
      id: 0,
      title: 'harry potter',
      author: 'rowling',
      number: 12345,
    },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, { id: Date.now(), ...newBook }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const [isShown, setShown] = useState(false);

  const toggleModal = () => {
    setShown(!isShown);
  };

  return (
    <div className='App'>
      <MyHeader toggleModal={toggleModal} />
      <BookList books={books} deleteBook={deleteBook} />
      <MyButton handleClick={toggleModal}	 classname='rounded' />
      <ModalItem
        addBook={addBook}
        isShown={isShown}
        toggleModal={toggleModal}
      />
    </div>
  );
}

export default App;
