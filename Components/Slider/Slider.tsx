import React, { useEffect } from "react";

/*====================*/

const Slider: React.FC = function ({ children }) {
  let currentSlide = 0;

  /*====================*/

  const sliderLargeBlock = React.useRef(null);
  const sliderInner = React.useRef(null);

  /*====================*/

  useEffect(() => {
    // @ts-ignore
    sliderLargeBlock.current.style.width = `${children?.length * 100}%`;
  }, [children]);

  /*====================*/

  function showSlide() {
    if (sliderInner.current) {
      // @ts-ignore
      sliderInner.current.style.right = `${currentSlide * (100 / children!.length)}%`;
    }
  }

  function prevSlide() {
    // @ts-ignore
    currentSlide = currentSlide === 0 ? children.length - 1 : currentSlide - 1;
    showSlide();
  }

  function nextSlide() {
    // @ts-ignore
    currentSlide = currentSlide === children.length - 1 ? 0 : currentSlide + 1;
    showSlide();
  }

  /*====================*/

  return (
    <div className="slider">
      {/*@ts-ignore*/}
      {children && children.length > 1 && (
        <div className="slider-controls-wrapper">
          <div className="slider__controls slider__prev-btn" onClick={prevSlide}>
            <button className="default-btn flex-container">
              <span className="material-icons">keyboard_arrow_left</span>
            </button>
          </div>
          <div className="slider__controls slider__next-btn" onClick={nextSlide}>
            <button className="default-btn flex-container">
              <span className="material-icons">keyboard_arrow_right</span>
            </button>
          </div>
        </div>
      )}
      <div className="full-size-block slider__large-block-wrapper">
        <div ref={sliderLargeBlock} className="slider__large-block">
          <div ref={sliderInner} className="slider__inner">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

/*====================*/

export default Slider;
