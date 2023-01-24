import React from "react";
import blogimg from "../../assets/1.jpg";
import { FaHeart, FaComment } from "react-icons/fa";
const Blog = () => {


 
 
  return (
    <>
      <div className="container mt-5">
        <h2 style={{textAlign:"center"}}> Blog Page </h2>
        <div className="row mt-5">
          <div className="col">
            <div className="blogimg">
              <img src={blogimg} />
            </div>
            <div className="blog-media">
              <h4 className="mt-2">
                <a
                  href="#"
                  style={{ textDecoration: "None", color: "#333333" }}
                >
                  Post name here
                </a>
              </h4>
              <span style={{ marginRight: "10px" }}>
                <FaHeart /> 100 Likes
              </span>
              <span>
                <FaComment />
                1000 comment
              </span>
            </div>
            <p className="mt-2" style={{margin:"10px 0px"}}>
              Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
              Molestias eius illum libero dolor nobis deleniti, sint assumenda.
              Pariatur iste veritatis excepturi, ipsa optio nobis.
            </p>
            <a href="#" className="read-more btn btn-secondary">
              Read more
            </a>
          </div>
          <div className="col">
            
            <div className="blogimg">
              <img src={blogimg} />
            </div>
            <div className="blog-media">
              <h4 className="mt-2">
                <a
                  href="#"
                  style={{ textDecoration: "None", color: "#333333" }}
                >
                  Post name here
                </a>
              </h4>
              <span style={{ marginRight: "10px" }}>
                <FaHeart /> 100 Likes
              </span>
              <span>
                <FaComment />
                1000 comment
              </span>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
              Molestias eius illum libero dolor nobis deleniti, sint assumenda.
              Pariatur iste veritatis excepturi, ipsa optio nobis.
            </p>
            <a href="#" className="read-more btn btn-secondary">
              Read more
            </a>
          </div>
          <div className="col">
        
            <div className="blogimg">
              <img src={blogimg} />
            </div>
            <div className="blog-media">
              <h4 className="mt-2">
                <a
                  href="#"
                  style={{ textDecoration: "None", color: "#333333" }}
                >
                  Post name here
                </a>
              </h4>
              <span style={{ marginRight: "10px" }}>
                <FaHeart /> 100 Likes
              </span>
              <span>
                <FaComment />
                1000 comment
              </span>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
              Molestias eius illum libero dolor nobis deleniti, sint assumenda.
              Pariatur iste veritatis excepturi, ipsa optio nobis.
            </p>
            <a href="#" className="read-more btn btn-secondary">
              Read more
            </a>
          </div>
          <div className="col mt-2">
        
            <div className="blogimg">
              <img src={blogimg} />
            </div>
            <div className="blog-media">
              <h4 className="mt-2">
                <a
                  href="#"
                  style={{ textDecoration: "None", color: "#333333" }}
                >
                  Post name here
                </a>
              </h4>
              <span style={{ marginRight: "10px" }}>
                <FaHeart /> 100 Likes
              </span>
              <span>
                <FaComment />
                1000 comment
              </span>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
              Molestias eius illum libero dolor nobis deleniti, sint assumenda.
              Pariatur iste veritatis excepturi, ipsa optio nobis.
            </p>
            <a href="#" className="read-more btn btn-secondary">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );

  } 
export default Blog;
