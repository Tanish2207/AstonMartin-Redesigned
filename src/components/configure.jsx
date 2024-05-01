
  
  
  import styles from './configure.module.css';
  import { useState, useEffect } from 'react';
  import './configure.css';
  
  const Configure = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    
    useEffect(() => {
      const handleClickOutside = () => {
        if (isVideoPlaying) {
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
    event.stopPropagation(); // Prevent event propagation to document
    setIsVideoPlaying(true);
  };

  return (
    <>
      <div className="configure">
        <img src="dbs12configure.png" className={styles.aston} />
        <img
          src="videoplaybutton.png"
          className={styles.playbtn}
          onClick={handlePlayButtonClick}
        />
        {isVideoPlaying && (
          <video
            width="500px"
            height="400px"
            controls="controls"
            autoPlay
            onClick={(event) => event.stopPropagation()} // Prevent video from disappearing when clicked
          >
            <source src="dbs12video.mp4" type="video/mp4" />
          </video>
        )}
        <span id="videocrosshover"><img src="videocrossbutton.png" alt=""  id="videocross"/></span>
      </div>
    </>
  );
};

export default Configure;
