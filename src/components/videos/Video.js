import React, { useEffect, createRef, useState } from 'react';
import video from '../../assests/clip.mp4';

const videoStyles = {
  marginTop: '100px',
  width: '50vw',
  outline: 'none',
  margin: 'auto',
};

const Video = () => {
  const [status, setStatus] = useState('paused');
  const vidRef = createRef();

  useEffect(() => {
    if (status === 'playing') {
      vidRef.current.play();
    } else if (status === 'paused') {
      vidRef.current.pause();
    }
  });

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h2>Our commercial</h2>
      <video style={videoStyles} controls ref={vidRef}>
        <source src={video} type='video/mp4' />
      </video>
    </div>
  );
};

export default Video; 