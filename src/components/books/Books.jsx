import { useState } from 'react';
import BookItem from '../bookItem/BookItem';
import BooksSearch from '../booksSearch/BooksSearch';
const Books = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [search, setSearch] = useState('');

  const booksFilter = books.filter((book) =>
    book.title.toLowerCase().trim().includes(search),
  );

  return (
    <div>
      <BooksSearch search={search} setSearch={setSearch} />
      <p className="text-center h3 my-3">
        Libro seleccionado:{' '}
        {selectedBook ? selectedBook : 'No hay libro selccionado'}
      </p>
      <div className="d-flex justify-content-center flex-wrap">
        {booksFilter.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
            setSelectedBook={setSelectedBook}
          />
        ))}
      </div>
    </div>
  );
};
export default Books;
