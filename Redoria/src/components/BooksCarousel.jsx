import React, {useState} from 'react'
import {motion} from 'framer-motion';
import romance from '../assets/images/romance.jpg';
import fantacy from '../assets/images/fantacy.jpg';
import scifi from '../assets/images/scifi2.jpg';
import mystery from '../assets/images/mystery.jpg';
import thriller from '../assets/images/thriller2.jpg';


const BooksCarousel = () => {

    const [positionIndexs, setPositionIndexs] = useState([0,1,2,3,4])

    const handleNext = () => {
        setPositionIndexs((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex+1) % 5);
            return updatedIndexes;
        })
    }

    const images = [romance,fantacy,scifi,mystery,thriller]

    const positions = ['center', 'left1', 'left', 'right', 'right1']

    const imageVariants = {
        center: {x:'0%', scale:1, zIndex:5},
        left1: {x:'-50%', scale:0.7, zIndex:2},
        left: {x:'-90%', scale:0.5, zIndex:1},
        right: {x:'90%', scale:0.5, zIndex:1},
        right1: {x:'50%', scale:0.7, zIndex:2},
    }

  return (
    <div className='flex items-center flex-col justify-center bg:black h-screen'>
        {images.map((image,index) =>(
            <motion.img
                key={index}
                src={image}
                alt={image}
                className='rounded-[12px]'
                initial='center'
                animate={positions[positionIndexs[index]]}
                variants={imageVariants}
                transition={{duration:0.5}}
                style={{width:'40%', position:'absolute', height:'50%'}}
            />
        ))}

        <button className='text-white mt-[400px] bg-indigo-400 rounded-md py-2  px-4' onClick={handleNext}>Next</button>
    </div>
  )
}

export default BooksCarousel