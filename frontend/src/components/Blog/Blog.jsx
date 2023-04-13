import React from "react";
import blogimg from "../../assets/1.jpg";
import { FaHeart, FaComment } from "react-icons/fa";
import "./Blog.css";
import Blogdata from "../../DummyData/Blog.json";

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
      <section class="site-title">
            <div class="site-background" data-aos="fade-up" data-aos-delay="100">
                <h3>Empowering Change</h3>
                <h1> Stories and Insights from our NGO Community</h1>
                <button class="btn">Explore</button>
            </div>
        </section>

        {Blogdata.map((data, index) => {
          return (
            <div className="blog" >
              <section class="container">
                <div class="site-content">
                  <div class="posts" key={index}>
                    <div
                      class="post-content"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div class="post-image">
                        <div>
                          <img src={blogimg} class="img" alt="blog1" />
                        </div>
                        <div class="post-info flex-row">
                          <span>
                            <i class="fas fa-user text-gray"></i>
                            &nbsp;&nbsp;Admin
                          </span>
                          <span>
                            <i class="fas fa-calendar-alt text-gray"></i>
                            &nbsp;&nbsp;January 14, 2019
                          </span>
                          <span>2 Commets</span>
                        </div>
                      </div>
                      <div class="post-title">
                        <a href="#">
                          {data.title}
                        </a>
                        <p>
                         {data.description}
                        </p>
                        <button class="btn post-btn">
                          Read More &nbsp; <i class="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    
                  </div>
                  

                  <aside class="sidebar">
                    <div class="category">
                      <h2 style={{ color: "black" }}>Category</h2>
                      <ul class="category-list">
                        <li
                          class="list-items"
                          data-aos="fade-left"
                          data-aos-delay="100"
                        >
                          <a href="#">Software</a>
                          <span>(05)</span>
                        </li>
                        <li
                          class="list-items"
                          data-aos="fade-left"
                          data-aos-delay="200"
                        >
                          <a href="#">Techonlogy</a>
                          <span>(02)</span>
                        </li>
                        <li
                          class="list-items"
                          data-aos="fade-left"
                          data-aos-delay="300"
                        >
                          <a href="#">Lifestyle</a>
                          <span>(07)</span>
                        </li>
                        <li
                          class="list-items"
                          data-aos="fade-left"
                          data-aos-delay="400"
                        >
                          <a href="#">Shopping</a>
                          <span>(01)</span>
                        </li>
                        <li
                          class="list-items"
                          data-aos="fade-left"
                          data-aos-delay="500"
                        >
                          <a href="#">Food</a>
                          <span>(08)</span>
                        </li>
                      </ul>
                    </div>
                    <div class="popular-post">
                      <h2 style={{ color: "black" }}>Popular Post</h2>
                      <div
                        class="post-content"
                        data-aos="flip-up"
                        data-aos-delay="200"
                      >
                        <div class="post-image">
                          <div>
                            <img src={blogimg} class="img" alt="blog1" />
                          </div>
                          <div class="post-info flex-row">
                            <span>
                              <i class="fas fa-calendar-alt text-gray"></i>
                              &nbsp;&nbsp;January 14, 2019
                            </span>
                            <span>2 Commets</span>
                          </div>
                        </div>
                        <div class="post-title">
                          <a href="#">
                            New data recording system to better analyse road
                            accidents
                          </a>
                        </div>
                      </div>
                    </div>
                   
                  </aside>
                </div>
               
              </section>
            </div>
          );
        })}

<div class="pagination flex-row">
                      <a href="#">
                        <i class="fas fa-chevron-left"></i>
                      </a>
                      <a href="#" class="pages">
                        1
                      </a>
                      <a href="#" class="pages">
                        2
                      </a>
                      <a href="#" class="pages">
                        3
                      </a>
                      <a href="#">
                        <i class="fas fa-chevron-right"></i>
                      </a>
                    </div>
      </main>
    </>
  );
};
export default Blog;
