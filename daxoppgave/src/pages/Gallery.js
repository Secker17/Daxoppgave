import React, { useState, useEffect } from 'react';

const Gallery = () => {
  // State to hold the list of image paths
  const [images, setImages] = useState([]);

  // State to manage the selected image for enlargement
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchedImages = [
      'images/DALL·E 2024-02-25 13.55.27 - Imagine an aquarelle (watercolor) painting that depicts a serene forest scene in Germany. The artwork captures the lush greenery of the German country.webp',
      'images/DALL·E 2024-02-25 13.55.34 - Visualize an oil painting that captures the classic still life subject of a bowl of fruit. The composition features a richly detailed bowl overflowing.webp',
      '/images/DALL·E 2024-02-25 13.55.41 - Imagine a futuristic garden where the flowers are not organic, but robotic. Each flower is meticulously designed with metallic petals that gleam in th.webp',
    ];
    setImages(fetchedImages);
  }, []);

  // Function to handle image click, setting the selected image state
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal by clearing the selected image state
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.length === 0 ? (
        <p>No AI art yet. Make some instead, or leave that to Zuckerburg &lt;3</p>
      ) : (
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Art ${index + 1}`}
            style={{ width: '100px', height: '100px', margin: '10px', cursor: 'pointer' }}
            onClick={() => handleImageClick(image)}
          />
        ))
      )}

      {selectedImage && (
        <div className="modal" onClick={closeModal} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="modal-content" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
            <span className="close" onClick={closeModal} style={{ float: 'right', cursor: 'pointer' }}>&times;</span>
            <img src={selectedImage} alt="Enlarged art" style={{ maxWidth: '80vw', maxHeight: '80vh' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
