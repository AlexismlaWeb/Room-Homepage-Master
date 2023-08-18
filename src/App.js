import "./App.css";
import React, { useState } from "react";
import Desk_image_hero_1 from "../src/images/desktop-image-hero-1.jpg";
import Desk_image_hero_2 from "../src/images/desktop-image-hero-2.jpg";
import Desk_image_hero_3 from "../src/images/desktop-image-hero-3.jpg";

import About_dark from "../src/images/image-about-dark.jpg";
import About_light from "../src/images/image-about-light.jpg";
import icon_arrow from "../src/images/icon-arrow.svg";
import icon_angle_left from "../src/images/icon-angle-left.svg";
import icon_angle_right from "../src/images/icon-angle-right.svg";

function App() {
  const array = [Desk_image_hero_1, Desk_image_hero_2, Desk_image_hero_3];

  const [image, setImage] = useState(0);

  const HandleClickNext = (index) => {
    if (index !== array.length - 1) {
      setImage(image + 1);
    } else if (index === array.length - 1) {
      setImage(0);
    }
    console.log(array.length);
    console.log(index);
    console.log();
  };

  const HandleClickPrevious = (index) => {
    if (index !== 0 && index > 0) {
      setImage(image - 1);
    } else if (index === 0) {
      setImage(array.length - 1);
    }
    console.log(array[image]);
    console.log(array.length);
  };

  return (
    <div className="App">
      <div className="header_container ">
        <div className="title_header flex-align-justify-center">
          <h1>room</h1>
        </div>
        <div className="header_menu">
          <div className="header_items">
            <p>home</p>
          </div>
          <div className="header_items">
            <p>shop</p>
          </div>
          <div className="header_items">
            <p>about</p>
          </div>
          <div className="header_items">
            <p>contact</p>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="caroussel_container">
          <div className="image_sides">
            <img src={array[image]} alt="img_hero" />
          </div>
          <div className="bio_side_container">
            <div className="bio_side_content">
              <div className="ok">
                <div className="bio_group">
                  <div className="title_content">
                    <h1>Discover innovative ways to decorate</h1>
                  </div>
                  <div className="paragraphe_content">
                    <p>
                      We provide unmatch quality, comfort, ans style for
                      property owners across the country. Our experts combine
                      form and function in bringing your vision to life. Create
                      a room in yput own style with our collection and make yout
                      property a reflection of you and what you love.
                    </p>
                  </div>
                  <div className="button_container">
                    <div className="shop_now">
                      <h5>SHOP NOW</h5>
                    </div>
                    <div>
                      <img src={icon_arrow} alt="icon arrow" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="caroussel_group_button">
                <div
                  className="button_container_angle"
                  onClick={() => HandleClickPrevious(image)}
                >
                  <img src={icon_angle_left} alt="icon-angle-left" />
                </div>
                <div
                  className="button_container_angle"
                  onClick={() => HandleClickNext(image)}
                >
                  <img src={icon_angle_right} alt="icon-angle-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_side_container">
          <div className="image_bottom_container">
            <img src={About_dark} alt="about dark" />
          </div>
          <div className="bottom_bio_container">
            <div className="bio_content">
              <h3>ABOUT OUR FURNITURE</h3>
              <p>
                Our multifuntional collection blends design and function to suit
                your individual taste. Make each room unique, or pick a cohesive
                theme that best express your interests and what inspires you.
                Find the furniture pieces you need, from traditionnal to
                contemporary styles or anything in between. Product specialist
                are available to help you create your dream space.
              </p>
            </div>
          </div>
          <div
            className="image_bottom_container"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <img src={About_light} alt="about light" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
