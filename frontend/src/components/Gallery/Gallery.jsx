import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Gallery.css'
// import img from "https://static.toiimg.com/photo/85301692/85301692.jpg?v=3";
// import img1 from "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg";
// import img2 from "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg";
// import img3 from "https://mygodimages.com/public/uploads/preview/mahadev-on-mountain-images-full-hd-11604599112v3thsxwwsr.jpg";

// import img4 from "https://static.toiimg.com/photo/85301692/85301692.jpg?v=3";
// import img5 from "https://static.toiimg.com/photo/85301692/85301692.jpg?v=3";
// import img6 from "https://media.gettyimages.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=gi&k=20&c=Uo_yzYm9UJu6GpKilOLGrCbiSjyMB5DsvZTYpybYxj4=";
// import img7 from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcB9pt3Tasegrjl6637LB1iJqCND1jp2oLA&usqp=CAU";
// import img8 from "https://ghantee.com/wp-content/uploads/2022/08/most-beautiful-trishul-image-on-the-internet-today-576x1024.jpg";
// import img9 from "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";
// import img10 from "http://webmeup.com/upload/blog/lead-image-105.png";

// const images = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="GalleryHeading">
          <h1 className="title">Image Gallery</h1>
        </div>
        <div className="imageContainer">
          <img
            src="https://static.toiimg.com/photo/85301692/85301692.jpg?v=3"
            alt=""
          />

          <img
            src="https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg"
            alt=""
          />
          <img
            src="https://mygodimages.com/public/uploads/preview/mahadev-on-mountain-images-full-hd-11604599112v3thsxwwsr.jpg"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcB9pt3Tasegrjl6637LB1iJqCND1jp2oLA&usqp=CAU"
            alt=""
          />
          <img
            src="https://ghantee.com/wp-content/uploads/2022/08/most-beautiful-trishul-image-on-the-internet-today-576x1024.jpg"
            alt=""
          />
          <img src="http://webmeup.com/upload/blog/lead-image-105.png" alt="" />
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt=""
          />
          <img
            src="https://media.gettyimages.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=gi&k=20&c=Uo_yzYm9UJu6GpKilOLGrCbiSjyMB5DsvZTYpybYxj4="
            alt=""
          />
          <img
            src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Gallery
