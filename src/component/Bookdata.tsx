import React from 'react';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
const Bookdata: React.FC = () => {
  const navbarContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  
  };

  const navbarBrandStyle = {
    color: 'black',
    borderRadius: '10px', // Adjust the border radius as needed
    padding: '10px', // Add padding to improve aesthetics
  };

  const navtext = {
    color: 'black',
    borderRadius: '10px',
    height: '70%',
    padding: '10px',
    width: '5rem',
    fontSize:'18px',
    transition: 'background-color 0.3s ease',
  };
  interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      publishedDate?: string;
      imageLinks?: {
        thumbnail: string;
      };
    };
  }
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=programming');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        const fetchedBooks: Book[] = data.items || [];
        setBooks(fetchedBooks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    // Log book titles when the 'books' state changes
    console.log('Book Titles:', books.map((book) => book.volumeInfo.title));
    console.log('Book authors:', books.map((book) => book.volumeInfo.authors));
    console.log('Book publishers:', books.map((book) => book.volumeInfo.publisher));
    console.log('Book published Date:', books.map((book) => book.volumeInfo.publishedDate));
    console.log('Book description:', books.map((book) => book.volumeInfo.description));
   
  }, [books]);

  return (
    <div style={navbarContainerStyle}>
      <div style={navbarBrandStyle}>
        <b style={navtext}></b>
        <h1>All books</h1>
        
        <ul>
          {books.map((book) => (
            <span key={book.id}>
                <div class="card">
                  <div class="card-header">
                           Books
                   </div>
                     <div class="card-body">
                       <h5 class="card-title"> <strong>Title:</strong> {book.volumeInfo.title}<br /></h5><br/>
                         <p class="card-text"> <strong>Author(s):</strong> {book.volumeInfo.authors }<br /></p><br/>
                         <p class="card-year" > <strong>Publication Year:</strong> {book.volumeInfo.publishedDate }<br/></p>
                         
                          </div>
                          <br></br>
                         </div>
                      
                     </span>
                     
          ))}
        </ul>
      
        <Link class="nav-link disabled"  to={'/Morefilter'}>More</Link>
      </div>
    </div>
  );
};

export default Bookdata;
