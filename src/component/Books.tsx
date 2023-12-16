import React from 'react';


interface BookListProps {
  books: {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      publishedDate?: string;
    };
  }[];
}

const Books: React.FC<BookListProps> = ({ books }) => {
  return (
    <ul className="list-group book-list">
      {books.map((book) => (
        <li key={book.id} className="list-group-item book-item">
          <div className="card-center">
            <div className="card-body">
              <h5 className="card-title"><strong>Title :</strong> {book.volumeInfo.title}</h5>
              <p className="card-text">
                <strong>Author(s):</strong> {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}
                <br />
                <strong>Year:</strong> {book.volumeInfo.publishedDate || 'Unknown'}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Books;
