import React, { useEffect, useState } from "react";
import "./MainSection.css";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

function MainSection({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="slider-section">
      <div className="section">
        {images.map((image, indexImage) => {
          let position = "nextSlide";
          if (indexImage === index) {
            position = "activeSlide";
          }
          if (
            indexImage === index - 1 ||
            (index === 0 && indexImage === image.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={indexImage}>
              <img src={image} alt=" banner" className="banner-img" />
            </article>
          );
        })}
        <p className="prev" onClick={() => setIndex(index - 1)}>
          <IoChevronBack className="" />
        </p>
        <p className="next" onClick={() => setIndex(index + 1)}>
          <IoChevronForward className="" />
        </p>
      </div>
    </div>
  );
}

export default MainSection;