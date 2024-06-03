import React, { useState } from 'react';
import { uploadProductImages } from './services/imageService';

const ImageForm = () => {
  const [images, setImages] = useState<FileList | null>(null);
  const [productId, setProductId] = useState<number>(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(e.target.files);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (images && productId > 0) {
      try {
        const response = await uploadProductImages(productId, images);
        alert('Images uploaded successfully');
      } catch (error) {
        console.error('Error uploading images', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={productId} onChange={e => setProductId(Number(e.target.value))} placeholder="Product ID" required />
      <input type="file" onChange={handleFileChange} accept="image/*" multiple required />
      <button type="submit">Upload Images</button>
    </form>
  );
};

export default ImageForm;
