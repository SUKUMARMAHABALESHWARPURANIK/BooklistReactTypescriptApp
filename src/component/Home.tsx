import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src="https://assets.brightspot.abebooks.a2z.com/dims4/default/7c56aef/2147483647/strip/true/crop/1580x760+0+0/resize/998x480!/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.us-west-2.amazonaws.com%2F03%2F39%2F06bcbb9e4088b465c8ee81478af1%2Fcarousel-hugo-awards.jpg"
            id="image-beauti"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://zacjohnson.com/wp-content/uploads/2023/11/abebooks-reliability-1024x585.jpg"
            id="image-beauti"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/young-lady-student-reading-book-studying-interior-library-woman-sitting-desk-shelves-bookcase-full-books-flat-vector-illustration-education-knowledge-readers-club-concept_74855-21149.jpg?w=740&t=st=1702472807~exp=1702473407~hmac=b79a5d99b565ebb02d0c792c4ad08d3010364a965bf2ad337e4ba3eba3cdc968"
            id="image-beauti"
            alt="Slide 3"
          />
        </div>
      </Slider>
      <br></br>
      <div>
        <hr></hr>
        <h1>Categories of books</h1><br></br>
      <div class="row row-cols-2 row-cols-md-0 g-2">
  <div class="col">
    <div class="card">
      <img src="data:image/jpeg;base64,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"  id= "card-img " class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Horror</h5>
        <p class="card-text">Horror is a genre of fiction that is intended to disturb, frighten or scare. Horror is often divided into the sub-genres of psychological horror and supernatural horror, which are in the realm of speculative fiction.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="data:image/jpeg;base64,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"  id= "card-img "  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Mystery</h5>
        <p class="card-text">Mystery is a fiction genre where the nature of an event, usually a murder or other crime, remains mysterious until the end of the story. Often within a closed circle of suspects, each suspect is usually provided with a credible motive and a reasonable opportunity for committing the crime.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img id= "card-img " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSO7HwtmE6LEEp_8n19tusjRnzS15CL_6zM1ajSjtcJZe6DEnoQiMyl8G-smRIvKJdso&usqp=CAU" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Thriller</h5>
        <p class="card-text">Thriller is a genre of fiction with numerous, often overlapping, subgenres, including crime, horror, and detective fiction. Thrillers are characterized and defined by the moods they elicit, giving their audiences heightened feelings of suspense, excitement, surprise, anticipation and anxiety.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVbiaMdm_ufcg141s2Yo2h_mVNWg9dD1eNg&usqp=CAU" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Comedy</h5>
        <p class="card-text">Comedy books are about being funny, what is funny, or the business of being funny. They are often written by people who have made a living from comedy, such as comics, actors, screenwriters, and sitcom showrunners.</p>
      </div>
    </div>
  </div>
 
       </div>
      </div>
      <Link  to={'/Morefilter'} >More &#8594;</Link>
      <hr></hr>
      <div class="container mx-auto">
  <h1 class="text-center">Top libraries in India</h1>
  <div class="row row-cols-1 g-4">
    <div class="col">
      <div class="card-lib">
        <img src="https://lh3.googleusercontent.com/ng4o--NwmpzjlFJPDgF4YemsWwVGk-kMrRcxqRJKyxcCDOMxURDpTiLE4WF-Wo9fZGmnU1RYEA01riFlMWDgWfly7_tX8zFLV66woYTTCHu_0XbxI1uAM3PNkBqoeBNce5fbAOko" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title text-left">The National Library of India</h5>
          <p class="card-text text-left">The National Library of India, located in Kolkata, is one of the largest libraries in India and the largest library in the country by volume and shelf space.</p>
        </div>
      </div>
      <hr></hr>
    </div>

    <div class="col">
      <div class="card-lib">
        <img src="https://www.vibesofindia.com/wp-content/uploads/2022/07/Saraswati-library.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title text-left">Asiatic Society of Mumbai library</h5>
          <p class="card-text text-left">The Asiatic Society of Mumbai Library is a research library located in Mumbai, India. It was founded in 1804 as the Literary Society of Bombay.</p>
        </div>
      </div>
      <hr></hr>
    </div>

    <div class="col">
      <div class="card-lib">
        <img src="https://www.vibesofindia.com/wp-content/uploads/2022/07/National-Library-of-India.webp" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title text-left">Delhi Public Library</h5>
          <p class="card-text text-left">The Delhi Public Library (DPL) is one of the largest public libraries in India. It was established in 1951 by the Indian government to promote literacy.</p>
        </div>
      </div>
      <hr></hr>
    </div>

    <div class="col">
      <div class="card-lib">
        <img src="https://www.vibesofindia.com/wp-content/uploads/2022/07/Library-Baroda.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title text-left">Saraswathi Mahal Library</h5>
          <p class="card-text text-left">The Saraswathi Mahal Library in Thanjavur was established in the 16th century and has a collection of over 60,000 manuscripts.</p>
        </div>
      </div>
      <hr></hr>
    </div>
    <Link  to={'https://www.indiatoday.in/education-today/gk-current-affairs/story/libraries-of-india-330775-2016-07-22'} >More &#8594;</Link>
  </div>
</div>

<div className="container my-5">
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-dark"
        style={{ backgroundColor: '#fff' }}
      >
        {/* Section: Social media */}
        <section
          className="d-flex justify-content-between p-4 text-white"
          style={{ backgroundColor: '#EF4040' }}
        >
          {/* Left */}
          <div className="me-5">

            <span><h1>BookList</h1>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
      
        </section>
     
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">BookList</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                />
                <p>
                Welcome to our book haven! At Your Bookstore, we believe in the magic of words and the power of stories to transport you to different worlds. 
                Our journey began with a simple idea: to create a space where book lovers could discover new authors, explore diverse genres, and find their next literary adventure.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                />
                <p>
                  <a href="#!" className="text-dark">Education Books</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Navels</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Cartoon books</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Notebooks</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                />
                <p>
                  <a href="#!" className="text-dark">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Help</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                />
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2023 Copyright
          <a className="text-dark" href=""></a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
</div>

    
  );
};

export default Home;
