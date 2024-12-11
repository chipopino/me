import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  // index - the index of the current image
  const [idx, setIdx] = useState<number>(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: undefined,
    beforeChange: (current: number, next: number) => {
      setIdx(next);
    },
  };

  return (
    <div className='m-auto w-[400px] mb-8'>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="w-full h-full flex flex-col items-center justify-center">
            <img
              src={(idx < i + 2 && idx > i - 2) ? img : ''}
              alt={`slide-${i}`}
              className='rounded w-[80%] m-auto'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
