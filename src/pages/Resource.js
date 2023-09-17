import React, { useState, useEffect } from "react";
import "./../App.css";
import "./../components/Portfolio/Portfolio.css";
import Filter from "./../components/Resource/Filter";
import InnerHeader from "../components/InnerHeader.js";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Resource = () => {
  const [item, setItem] = useState(Filter);
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredIndex, setFilteredIndex] = useState(0);

  const handleButtonClick = (category) => {
    setActiveCategory(category);
    setFilteredIndex(0); // Reset the index
  };

  const getItem = (cat) => {
    var updatedValue = Filter.filter((items) => {
      return items.category === cat;
    });
    setItem(updatedValue);
    setFilteredIndex(0); // Reset the index
  };

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the element's position to trigger the animation
      easing: "ease-in-out", // Animation easing (CSS transition-timing-function)
      delay: 0, // Delay (in milliseconds) before the animation starts
      once: true, // Whether the animation should occur only once or every time the element is scrolled into view
      mirror: false, // Whether elements with the same data-aos value should animate individually or together
    });
  }, []);

  return (
    <section>
      {/* Header */}
      <InnerHeader/>
      {/* mian content */}
      <section>
        <div className="container">
          <ul class="breadcrumb-navigation">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li className="current">Resources</li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="top-heading">The Resources</div>
                <div className="top-sub-heading py-4">
                  Our services have been divided into four categories based on
                  the kind of work we have done in the past.
                </div>
              </div>
              <div className="col-12 col-md-5 d-flex">
                <div className="d-flex mx-auto align-items-start">video</div>
              </div>
            </div>
          </div>

          <div className="py-4 mb-5">
            <div className="button-container border-top">
              {/* <div
                className={`custom-button ${
                  activeCategory === "All" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("All");
                  setItem(Filter);
                }}
              >
                All
              </div> */}
              <div
                className={`custom-button ${
                  activeCategory === "tab1" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab1");
                  getItem("tab1");
                }}
              >
                Case Studies
              </div>
              <div
                className={`custom-button ${
                  activeCategory === "tab2" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab2");
                  getItem("tab2");
                }}
              >
                Articles
              </div>
              <div
                className={`custom-button ${
                  activeCategory === "tab3" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab3");
                  getItem("tab3");
                }}
              >
                White Papers
              </div>
              <div
                className={`custom-button ${
                  activeCategory === "tab4" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab4");
                  getItem("tab4");
                }}
              >
                Industrial Insights
              </div>
              <div
                className={`custom-button ${
                  activeCategory === "tab5" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab5");
                  getItem("tab5");
                }}
              >
                Tutorials
              </div>
              <div
                className={`custom-button ${
                  activeCategory === "tab6" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory("tab6");
                  getItem("tab6");
                }}
              >
                Reports
              </div>
            </div>
            <div
              className={`custom-remove-button mb-5`}
              onClick={() => {
                setActiveCategory("All");
                setItem(Filter);
              }}
            >
              Remove Filter
            </div>

            <div className="row custom-row">
              {item.map((data, index) => {
                const { name, logo, category, image, description } = data;
                // Check if the index is 1, 4, 7, 10, 13, etc.
                const cardClass = index % 3 === 1 ? 'odd-res' : 'even-res';
                const marginTopClass = index === 0 || index === 1 || index === 2 ? '' : 'margin-res';

                return (
                  <div className={`col-md-4 col-12 py-3 ${cardClass} ${marginTopClass}`} key={index}>
                    <div class="wrapper" data-aos="fade-up">
                      <div class="res-zoom-effect-container">
                        <div class="image-card">
                          <img className="card-img-top" src={image} />
                        </div>
                      </div>
                      <div className="py-4">
                        <div className="blog-heading">
                          {name}
                        </div>
                        <div className="blog-title">
                          {description}
                          <div className="pt-3 text-decoration-underline">
                            Read More
                            <svg
                                width="20"
                                height="14"
                                viewBox="-10 0 25 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                id="Vector"
                                d="M1.80778 13.8701L1.81026 13.8657L2.14145 13.5492L2.80382 12.9161L13.4018 2.78909L13.2658 8.77368L14.6105 8.80423L14.7986 0.523957L6.51835 0.335805L6.48779 1.68051L12.4724 1.81649L1.87444 11.9435L1.21207 12.5764L0.880888 12.8929L1.80778 13.8701Z"
                                fill="black"
                                />
                            </svg>
                          </div>
                        </div>                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container bg-white py-4">
        <div className="row py-5">
          <div className="col-12 col-md-7 col-lg-7">
            <div className="text-uppercase">
              <h1 className="left-aligned portfolio-heading">Want to build one<br/>for yourself ?</h1>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 d-flex justify-content-end">
            <div className="portfolio-sub-heading d-flex align-items-center">
              <a href="" className="m-0 font-size-15">
                Start your dream project with us
                <svg
                  width="20"
                  height="14"
                  viewBox="-10 0 25 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M1.80778 13.8701L1.81026 13.8657L2.14145 13.5492L2.80382 12.9161L13.4018 2.78909L13.2658 8.77368L14.6105 8.80423L14.7986 0.523957L6.51835 0.335805L6.48779 1.68051L12.4724 1.81649L1.87444 11.9435L1.21207 12.5764L0.880888 12.8929L1.80778 13.8701Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Resource;