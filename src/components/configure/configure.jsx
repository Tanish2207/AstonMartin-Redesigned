import { useState, useEffect } from 'react';
import './configure.css';

export const Configure = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isVideoPlaying) {
        document.getElementById('videocross').style.display = "none"

        setIsVideoPlaying(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isVideoPlaying]);

  const handlePlayButtonClick = (event) => {
    document.getElementById('videocross').style.display = "block"
    event.stopPropagation(); // Prevent event propagation to document
    setIsVideoPlaying(true);
  };

  return (

    <div className="configure">
      {/* <h1 className='text-white'>Hello World</h1>  */}
      <img src="dbs12configure.png" className="dbs12config" />
      <img
        src="videoplaybutton.png"
        className="playbtn"
        onClick={handlePlayButtonClick}
      />
      {isVideoPlaying && (
        <video className='config-vdo'
          width="500px"
          height="400px"
          controls="controls"
          autoPlay
          onClick={(event) => event.stopPropagation()} // Prevent video from disappearing when clicked
        >
          <source src="dbs12video.mp4" type="video/mp4" />
        </video>
      )}
      <span><img src="videocrossbutton.png" alt="" id="videocross" /></span>
    </div>

  );
};


