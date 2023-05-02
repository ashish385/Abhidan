import React from "react";
import blogimg from "../../assets/1.jpg";
import { FaHeart, FaComment } from "react-icons/fa";
import "./Blog.css";
import Blogdata from "../../DummyData/Blog.json";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <>
      {/* <div className="container mt-5">
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
      </div> */}
      <main>
        <section className="site-title">
          <div className="site-background" data-aos="fade-up" data-aos-delay="100">
            <h3>Empowering Change</h3>
            <h1> Stories and Insights from our NGO Community</h1>
            <button className="btn">Explore</button>
          </div>
        </section>

        <div className="flex flex-col">

        {Blogdata.map((data, index) => {
          return (
            <div key={index} className="blog">
              <section className="container">
                <div className="site-content">
                  <div className="posts" key={index}>
                    <div
                      className="post-content"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="post-image">
                        <div>
                          <img src={blogimg} className="img" alt="blog1" />
                        </div>
                        <div className="post-info flex-row">
                          <span>
                            <i className="fas fa-user text-gray"></i>
                            &nbsp;&nbsp;Admin
                          </span>
                          <span>
                            <i className="fas fa-calendar-alt text-gray"></i>
                            &nbsp;&nbsp;January 14, 2019
                          </span>
                          <span>2 Commets</span>
                        </div>
                      </div>
                      <div className="post-title">
                        <a href="#">{data.title}</a>
                        <p>{data.description}</p>
                        <button className="btn post-btn">
                          Read More &nbsp; <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
          
        })}

        
        </div>

        

        <div className="pagination flex-row">
          <a href="#">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a href="#" className="pages">
            1
          </a>
          <a href="#" className="pages">
            2
          </a>
          <a href="#" className="pages">
            3
          </a>
          <a href="#">
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Blog;
