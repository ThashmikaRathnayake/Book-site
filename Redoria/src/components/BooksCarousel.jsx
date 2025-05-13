import React, { useState } from 'react';
import { motion } from 'framer-motion';
import romance from '../assets/images/romance.jpg';
import fantacy from '../assets/images/fantacy.jpg';
import scifi from '../assets/images/scifi2.jpg';
import mystery from '../assets/images/mystery.jpg';
import thriller from '../assets/images/thriller2.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";


const BooksCarousel = () => {
  const [positionIndexs, setPositionIndexs] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexs((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
      return updatedIndexes;
    });
  };

  const images = [romance, fantacy, scifi, mystery, thriller];
  const positions = ['center', 'left1', 'left', 'right', 'right1'];

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5, filter: 'brightness(1)' },
    left1: { x: '-50%', scale: 0.7, zIndex: 2, filter: 'brightness(0.6)' },
    left: { x: '-90%', scale: 0.5, zIndex: 1, filter: 'brightness(0.3)' },
    right: { x: '90%', scale: 0.5, zIndex: 1, filter: 'brightness(0.3)' },
    right1: { x: '50%', scale: 0.7, zIndex: 2, filter: 'brightness(0.6)' },
  };

  return (
    <div className='flex items-center flex-col justify-center bg-black h-screen'>
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className='rounded-[12px] shadow-lg'
          initial='center'
          animate={positions[positionIndexs[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{
            width: '40%',
            position: 'absolute',
            height: '50%',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          }}
        />
      ))}

      <button
        className='text-white mt-[400px] text-2xl bg-black bg-opacity-50 rounded-md py-2 px-4 hover:bg-[#16213e] hover:bg-opacity-80 cursor-pointer transition duration-300 ease-in-out'
        onClick={handleNext}
        style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
      >
        <MdKeyboardArrowRight />

      </button>
    </div>
  );
};

export default BooksCarousel;
