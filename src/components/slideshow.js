import './slideshow.css';
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from './variants';

const Slideshow = ({ img1, img2, img3, img4, gym }) => {
  const images = [img1, img2, img3,img4, gym];
  const [slideIndex, setSlideIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearTimeout(timer);
  }, [slideIndex, images.length]);

  const currentSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <motion.div
      variants={fadeIn('up',0.4)}
      initial="hidden"
      animate="show"
      className="slideshow-container">
        {images.map((img,i) => (
          <div
            className="mySlides fade"
            key={i}
            style={{ display: i === slideIndex ? 'block' : 'none' }}
          >
            <div className="numbertext">{`${i + 1} / ${images.length}`}</div>
            <img src={img} alt={`slide-${i}`} style={{ width: '100%' ,height:'600px',borderImage:'round'}} />
          </div>
        ))}

        <button className="prev" onClick={() => setSlideIndex((slideIndex - 1 + images.length) % images.length)}>
          &#10094;
        </button>
        <button className="next" onClick={() => setSlideIndex((slideIndex + 1) % images.length)}>
          &#10095;
        </button>
      </motion.div>

      <br />

      <div style={{ textAlign: 'center' }}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === slideIndex ? 'active' : ''}`}
            onClick={() => currentSlide(i)}
            style={{ cursor: 'pointer', padding: '5px' }}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Slideshow;
