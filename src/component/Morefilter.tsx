import React, { useState, useEffect } from 'react';
import Books from './Books.tsx';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
  };
}
 const booklistabout={
        backgroundColor: '#EF4040',
    color: 'white',
            
    }
const Morefilter: React.FC = () => {
  const [bookData, setBookData] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [booksPerPage] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortType, setSortType] = useState<string>('title');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=programming');
        if (!response.ok) {
          throw new Error('Failed to fetch book data');
        }
        const data = await response.json();
        setBookData(data.items || []);
      } catch (error) {
        setError('An error occurred while fetching book data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Apply sorting and filtering based on search term
  const sortedAndFilteredBooks = bookData
    .filter((book) => book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortType === 'title') {
        return a.volumeInfo.title.localeCompare(b.volumeInfo.title);
      } else if (sortType === 'author') {
        return a.volumeInfo.authors?.[0].localeCompare(b.volumeInfo.authors?.[0] || '');
      } else if (sortType === 'year') {
        return (
          parseInt(a.volumeInfo.publishedDate || '0', 10) -
          parseInt(b.volumeInfo.publishedDate || '0', 10)
        );
      }
      return 0;
    });

  // Paginate the books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = sortedAndFilteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div>
 
 <span><h1 style={booklistabout}>BookLibrary </h1>  </span>
      <span> <b>Search book title:</b> <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /></span>
         <b> Sort by: </b>
         <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
        <option value="title">  Title</option>
        <option value="author"> Author</option>
        <option value="year">   Year</option>
      </select>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <Books books={currentBooks} />
      )}
      <div>
      <div className="text-center">
  <button
    onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
    disabled={currentPage === 1}
    className="btn btn-primary mr-2"
  >
    Previous
  </button>
  <span className="mx-2">{currentPage}</span>
  <button
    onClick={() =>
      setCurrentPage((prevPage) =>
        Math.min(prevPage + 1, Math.ceil(sortedAndFilteredBooks.length / booksPerPage))
      )
    }
    disabled={indexOfLastBook >= sortedAndFilteredBooks.length}
    className="btn btn-primary ml-2"
  >
    Next
  </button>
</div>

      </div>
    </div>
  );
};

export default Morefilter;
