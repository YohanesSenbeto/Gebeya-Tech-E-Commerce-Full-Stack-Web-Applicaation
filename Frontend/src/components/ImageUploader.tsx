import React from 'react';
import ImageUpload from './ImageUpload';
import ImageList from './ImageList';

const ImageUploader: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Image Upload System</h1>
      <ImageUpload />
      <ImageList />
    </div>
  );
};

export default ImageUploader;
