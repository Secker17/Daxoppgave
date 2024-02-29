import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css'; // Ensure the CSS file is properly linked

const Home = () => {
  const hackerAlias = "Mother"; 

  // Images array for the rotator, add more image paths as needed
  const rotatingImages = [
    `${process.env.PUBLIC_URL}/images/DALL·E 2024-02-25 13.55.27 - Imagine an aquarelle (watercolor) painting that depicts a serene forest scene in Germany. The artwork captures the lush greenery of the German country.webp`,
    `${process.env.PUBLIC_URL}/images/DALL·E 2024-02-25 13.55.34 - Visualize an oil painting that captures the classic still life subject of a bowl of fruit. The composition features a richly detailed bowl overflowing.webp`,
    `${process.env.PUBLIC_URL}/images/DALL·E 2024-02-25 13.55.41 - Imagine a futuristic garden where the flowers are not organic, but robotic. Each flower is meticulously designed with metallic petals that gleam in th.webp`,
  ];

  // State to keep track of the current rotating image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change rotating image every few seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rotatingImages.length);
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [rotatingImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start fade-out
      // Set some state to reduce opacity to 0
  
      setTimeout(() => {
        // After fade-out, switch image
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rotatingImages.length);
        
        // Start fade-in by adjusting state to increase opacity back to 1
      }, 500); // This timeout should match your CSS transition time
    }, 3500); // Adjust overall interval to account for fade time
  
    return () => clearInterval(intervalId);
  }, [rotatingImages.length]);
  
  
  return (
    <div className="home">
      <div className="alias-section">
        <h1>{hackerAlias}</h1>
        {/* Static top image */}
        <img src={`${process.env.PUBLIC_URL}images/DALL·E 2024-02-26 10.35.26 - Imagine a scene in a whimsical, animated small town, inspired by the essence of shows like 'South Park'. In the center, there's a character with a bol.webp`} alt="Thematic" className="thematic-image"/>
      </div>
      <div className="gallery-link">
        <Link to="/gallery">AI Art Gallery</Link>
      </div>
      <div className="rundell">
        {/* The image rotator for additional images */}
        <img src={rotatingImages[currentImageIndex]} alt="Rotating art" className="rotating-image"/>
      </div>
    </div>
  );
};

export default Home
