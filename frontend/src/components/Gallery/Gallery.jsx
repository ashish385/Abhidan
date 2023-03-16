import React from 'react'
import { Link } from 'react-router-dom';
import './Gallery.css';
import Images from '../../DummyData/GalleryImages.json'


const Gallery = () => {
  return (
    <>
      <div className="container">
        <div className="GalleryHeading">
          <h1 className="title">Image Gallery</h1>
        </div>
        <div className="imageContainer">
          {Images.map((img, index) => {
            return (
              <div key={index} >
                <img src={img.img} alt="" />
              </div>
            )
          })}
        </div>
      </div>
      
    </>
  );
}

export default Gallery
