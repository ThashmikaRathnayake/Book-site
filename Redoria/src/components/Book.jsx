import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import gold from "../assets/images/BookList/gold.jpg";

const Book = () => {
  return (
    <div className="h-screen w-full bg-[#0e1a26] flex justify-center items-center px-4">
      <HTMLFlipBook
        width={370}
        height={550}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size="fixed"
        className="rounded-md shadow-lg"
      >
        {/* Cover Page */}
        <div className="bg-black flex items-center justify-center">
          <img 
            src={gold} 
            alt="Gold Book Cover" 
            className="w-full h-full object-cover rounded" 
          />
        </div>

        {/* Left Page */}
        <div className="bg-[#fefcf9] rounded-lg flex items-center justify-center text-center h-full w-full p-6">
            <blockquote className="text-gray-700 italic text-lg font-serif px-4 py-6 border-l-4 border-gray-300">
                “Find me in another life. Find me in them all.”
            </blockquote>
        </div>

        {/* Right Page */}
        <div className="bg-[#fefcf9] rounded-lg shadow-inner p-6 text-gray-800 flex flex-col justify-start items-center text-center font-serif">
          {/* Book Info */}
          <h1 className="text-3xl font-bold mb-1 text-[#2c3e50]">Glow</h1>
          <p className="text-base text-gray-600 italic">by Raven Kennedy</p>
          <p className="text-sm text-gray-500 mb-4">Fantasy • Romance • Dark Fantasy</p>

          <div className="w-1/2 h-px bg-gray-300 mb-4 mx-auto" />

          <p className="text-[15px] leading-relaxed text-gray-700 mb-6">
            In a realm where the elite are gilded in gold to signify their divinity, Auren lives in a gilded cage—both physically and emotionally controlled by King Midas. 
            Though she believes it’s for her own protection,
             Auren begins to feel the suffocating weight of her confinement, questioning if love and control are truly the same.
            <br />
            As Auren silently observes the political unrest and games playing out beyond her golden prison, the first cracks in her loyalty to the king begin to show. 
            She starts to see her own desires for freedom, sparking a deep internal conflict that challenges everything she thought she knew
          </p>

          <a 
            href="https://www.amazon.com/Glow-Plated-Prisoner-Book-4-ebook/dp/B095G183J6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto text-sm text-gray-900 hover:text-yellow-400 transition duration-200"
          >
            📖 Buy Glow on Amazon
          </a>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
