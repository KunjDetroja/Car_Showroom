import { Tabs, theme ,Card} from "antd";
import '../components/defaultlayout.css'
import CarDetailsCard from "../pages/CarDetails";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StickyBox from "react-sticky-box";
const CardTabs = ({ totalCars }) => {
  const [activeTab,setActiveTab]=useState(1)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const suvs = totalCars
    ?.filter((item) => item?.Body_Type === "suv")
    .map((item,i) => {
      return <CarDetailsCard car={item} />;
    });
    const hatchback = totalCars
    ?.filter((item) => item?.Body_Type === "hatchback")
    .map((item,i) => {
      return <CarDetailsCard car={item} />;
    });
    const sedan = totalCars
    ?.filter((item) => item?.Body_Type === "sedan")
    .map((item,i) => {
      return <CarDetailsCard car={item} />;
    });
    const crossover = totalCars
    ?.filter((item) => item?.Body_Type === "crossover")
    .map((item,i) => {
      return <CarDetailsCard car={item} />;
    });
  const items1 = [
    {
      label: `  suv`,
      key: 1,
      children: <Carousel responsive={responsive}>{suvs}</Carousel>,
      style: { height: "200px" },
      
    },
    {
      label: `hatchback`,
      key: 2,
      children: <Carousel responsive={responsive}>{hatchback}</Carousel>,
      style: { height: "200px" },
      
    },
    {
      label: `sedan`,
      key: 3,
      children: <Carousel responsive={responsive}>{sedan}</Carousel>,
      style: { height: "200px" },
    },
    {
      label: `crossover`,
      key: 4,
      children: <Carousel responsive={responsive}>{crossover}</Carousel>,
      style: { height: "200px" },
    },
  ];


  return (
    <>
     <Card style={{height:"400px"}}> <Tabs defaultActiveKey="1" activeKey={activeTab} onChange={(e)=>{setActiveTab(e)}} items={items1} /></Card>
     
    </>
  );
};

export default CardTabs;
