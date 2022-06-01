import React from "react";
import {Link} from "react-router-dom";
import "./BlogIdeas.css";
import aboutImg from "../images/img2.jpg";
function BlogIdeas() {
 
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__3">
          <div className="about__box pointer relative">
                     <div className="about__box__img pointer relative">
                         <div className="about__img__box">
                             <img src={aboutImg} alt="" className="about__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         
                         <Link to="/BlogIdeas" className="blog about__btn btn"> <h4 className="about__text">Decoration</h4>
                        </Link>
                       </div>
                 </div>
                 <div className="about__box pointer relative">
                     <div className="about__box__img pointer relative">
                         <div className="about__img__box">
                             <img src={aboutImg} alt="" className="about__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                      <Link to="/BlogIdeas" className="blog about__btn btn">
                         <h4 className="about__text">Gifts</h4>
                        </Link>
                       </div>
                 </div>
              
          </div>
          
          
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <Link to="#contact">
                  <button className="about btn pointer">Hire Me</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      
    </div>
  );
}

export default BlogIdeas;
