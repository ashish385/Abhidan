import React from 'react'
import { Link } from 'react-router-dom';
import './Gallery.css';
import Images from '../../DummyData/GalleryImages.json'
import Footer from '../Footer/Footer';


const Gallery = () => {
  return (
    <>
      <div className='px-3 py-2'> 

 
          <div className="flex flex-col gap-4">
          {
            Images.map((img, index) => (
              <>
              <img src={img.img} alt="" /></>
            ))
           }
          </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery
