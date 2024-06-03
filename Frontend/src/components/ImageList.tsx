import React, { useEffect, useState } from 'react';
import { fetchImages, deleteImage } from './services/imageService';

interface Image {
  id: number;
  url: string;
}

const ImageList: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedImages = await fetchImages();
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteImage(id);
      setImages(prevImages => prevImages.filter(image => image.id !== id));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map(image => (
        <div key={image.id} className="relative">
          <img src={image.url} alt={`Image ${image.id}`} className="w-full h-auto" />
          <button
            onClick={() => handleDelete(image.id)}
            className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
