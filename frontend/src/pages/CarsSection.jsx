import AliceCarousel from "react-alice-carousel";
import CarDetailsCard from "./CarDetails";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const CarsSection = ({ totalCars }) => {
  const [activeIndex, setActiveIndex] = useState(0);
console.log(totalCars)
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  const items = totalCars?.slice(0, 10).map((item) => (
    <div className="">
      {" "}
      <CarDetailsCard car={item} />
    </div>
  ));

  return (
    <Carousel responsive={responsive}>{items}</Carousel>
  );
};

export default CarsSection;
