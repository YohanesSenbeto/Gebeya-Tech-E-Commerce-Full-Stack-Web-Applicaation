// src/Main.tsx
import React, { useState } from 'react';
import App from './App';

const Start: React.FC = () => {
  const [showApp, setShowApp] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover"
     
    >
      
      {<App />}
    </div>
  );
};

export default Start;
