import React, { useRef, useEffect } from 'react';

function CameraScreen() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    }

    setupCamera();
  }, []);

  return (
    <div>
      <h1>CARLOS JAVIER CASTRO GONZALEZ</h1>
      <h1>201901121</h1>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
}

export default CameraScreen;
