import React from 'react';
// import  { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Header.css'
import { Carousel } from 'react-responsive-carousel';
function Header() {
  const demodata = [
    {
      "imageUrl":"https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Grand-Vitara/10505/1689588262879/front-left-side-47.jpg"
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmlM4cOwkqa95XuYml6OFgbn4gYHok96R1Q&usqp=CAU"
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5WZKRdDUt49E4b3K5eD9BWL7XSgLxKL7IQ&usqp=CAU"
    }
  ]
  
  
//     const [data, setData] = useState([]);

// useEffect(() => {
//   // Replace 'API_URL' with the actual API endpoint
//   fetch()
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((jsonData) => {
//       setData(jsonData);
//     })
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//     });
// }, []);

return (
  <>
  
  <div className="App">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        style={{ height: '100%' }}
      >
        {demodata.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
   
}

export default Header;
