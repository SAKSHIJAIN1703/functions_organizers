import React from "react";
import "./Blog.css";
import Blog1 from '../images/img2.jpg';
import Blog2 from '../images/img2.jpg';
import Blog3 from '../images/img2.jpg';
import { HashLink as Link } from "react-router-hash-link";

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">birthday ideas</h1>
        <p className=" p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className=" p__color">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">kid's</h5>
                         <h4 className="project__text">Getting tickets to the big show</h4>
                         <Link to="/BlogIdeas" className="blog project__btn btn">More ideas</Link>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Adults</h5>
                         <h4 className="project__text">Getting tickets to the big show</h4>
                          <Link to="/BlogIdeas" className="blog project__btn btn">More ideas</Link>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Older</h5>
                         <h4 className="project__text">Getting tickets to the big show</h4>
                          <Link to="/BlogIdeas" className="blog project__btn btn">More ideas</Link>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;
