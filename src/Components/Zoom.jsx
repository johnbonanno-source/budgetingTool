import React, { useEffect } from 'react';

const Zoom = () => {
  const maxZoom = 100;

  useEffect(() => {
    const initialValue = document.body.style.zoom;
    const desiredZoom = Math.min(maxZoom, 150);
    document.body.style.zoom = `${desiredZoom}%`;
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);

  return <></>;
};

export default Zoom;
