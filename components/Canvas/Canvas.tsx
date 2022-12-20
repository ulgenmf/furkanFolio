import React from 'react';

const MyCanvas = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 100, 100);
  }, []);

  return (
    <canvas ref={canvasRef} width={800} height={600} />
  );
};

export default MyCanvas;
In this example, the useRef hook is used to create a reference to t