import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FoodData } from '../../red-onion-data/FoodData';
import './Multicarousel.css'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      paritialVisibilityGutter: 30
    }
  };

  
const Multicarousel = () => {
    return (
        <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
        className="food-carousel"
      >
        {FoodData.map(image => {
          return (
            <img src={image.figure} height="150px" width="150" alt=""/>
          );
        })}
      </Carousel>
    );
};

export default Multicarousel;