import React, { useState, useEffect } from 'react';
import '../Gallery.css'; // Pass på at denne filbanen er riktig

const Gallery = ({ hackerAlias }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchedImages = [
      `${process.env.PUBLIC_URL}/images/DALL·E 2024-02-25 13.55.27 - Imagine an aquarelle (watercolor) painting that depicts a serene forest scene in Germany. The artwork captures the lush greenery of the German country.webp`,
      `${process.env.PUBLIC_URL}/images/DALL·E 2024-02-25 13.55.34 - Visualize an oil painting that captures the classic still life subject of a bowl of fruit. The composition features a richly detailed bowl overflowing.webp`,
      `${process.env.PUBLIC_URL}/images/DALL·E 2024-02-25 13.55.41 - Imagine a futuristic garden where the flowers are not organic, but robotic. Each flower is meticulously designed with metallic petals that gleam in th.webp`,
      `${process.env.PUBLIC_URL}/images/DALL·E 2024-02-25 13.55.45 - Reimagine the scene with a specific color scheme_ the robot dragon now has a striking red tint to its metallic body, symbolizing its fiery nature and .webp`,
      `${process.env.PUBLIC_URL}/images/DALL·E 2024-02-25 13.55.51 - Envision a futuristic scene where a robot Viking, designed with intricate metallic armor that reflects the traditional Viking appearance, rides atop a.webp`,
      `${process.env.PUBLIC_URL}/images/DALL·E 2024-02-25 13.55.56 - Revise the scene once more, placing the Viking warrior with green eyes and red hair, and his baby dragon companion, at the forefront of a Viking ship,.webp`,
      `${process.env.PUBLIC_URL}/images/DALL·E 2024-02-25 13.56.00 - Imagine a revised scene from the Viking Age, where the same formidable Viking warrior, characterized by striking green eyes and fiery red hair, now ha.webp`
      // Sørg for at alle lenker til bildene er gyldige
    ];
  }, []);
  

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <h1>{hackerAlias} Presents A.I. Art</h1>
      <div className="image-grid">
        {images.length === 0 ? (
          <p>No AI art yet. Make some instead, or leave that to Zuckerburg &lt;3</p>
        ) : (
          images.map((image, index) => (
            <div key={index} className="image-container">
              <img
                src={image}
                alt={`Art ${index + 1}`}
                className="gallery-image"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))
        )}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Enlarged art" className="enlarged-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
