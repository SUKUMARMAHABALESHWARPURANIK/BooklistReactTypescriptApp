import React from 'react';


function About(){
    const booklistabout={
        backgroundColor: '#EF4040',
    color: 'white',
            
    }
    return(<div>
          <div className="me-5">

     <span><h1 style={booklistabout}>BookList | bookshop </h1>  </span>

</div>
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6" id="cs">About Us</h1>
       <p className="mb-4 bg-gray-200 p-4" id="cs-p">
        Welcome to our book haven! At Your Bookstore, we believe in the magic of words and the power of stories to transport you to different worlds.
      
        Our journey began with a simple idea: to create a space where book lovers could discover new authors, explore diverse genres, and find their next literary adventure.
      
        What sets us apart is our commitment to curating a collection that caters to every taste. Whether you're a fan of classic literature, gripping mysteries, or heartwarming romance, we have something for everyone.

        We value the connection between readers and books, and we strive to foster a community where ideas are shared, discussions are sparked, and the love for reading is celebrated.
      
        Thank you for being a part of our story. Happy reading!
      </p>
      <h1 className="text-3xl font-bold mb-6 border-b " id="cs">Our Mission</h1>

      <p className="mb-4 bg-gray-200 p-4" id="cs-p">
  Our mission is to inspire and enrich lives through the joy of reading. We aim to be a trusted source for quality books, providing a welcoming environment for book enthusiasts of all ages.
</p>
      <h1 className="text-3xl font-bold mb-6 " id="cs">Contact us </h1>

      <p className="mb-4 bg-gray-200 p-4"  id="cs-p">
        Have questions or suggestions? We'd love to hear from you! Reach out to us at <span className="text-blue-500">info@yourbookstore.com</span> or give us a call at <span className="text-blue-500">+1 234 567 890</span>.
      </p>
    </div>
    </div>);

}
export default About;