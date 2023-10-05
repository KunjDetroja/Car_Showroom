import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { getAllCars } from "../redux/actions/carsActions";
// import '../components/defaultlayout.css'
// import moment from "moment";
// import { bookCar } from "../redux/actions/bookingActions";
// import StripeCheckout from "react-stripe-checkout";
// import AOS from 'aos';
// import gis from "async-g-i-s"

import "aos/dist/aos.css"; // You can also use <link> for styles
import Footer from "./Footer";
import CarDetailsCard from "./CarDetails";
import Carousel from "react-multi-carousel";
// const { RangePicker } = DatePicker;
function CarInfo({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  // const [from, setFrom] = useState();
  // const [to, setTo] = useState();
  // const [totalHours, setTotalHours] = useState(0);
  // const [driver, setdriver] = useState(false);
  // const [totalAmount, setTotalAmount] = useState(0);
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id == match.params.carid));
    }
  }, [cars]);

  // function onToken(token){
  //   const reqObj = {
  //       token,
  //       user: JSON.parse(localStorage.getItem("user"))._id,
  //       car: car._id,
  //       totalHours,
  //       totalAmount,
  //       driverRequired: driver,
  //       bookedTimeSlots: {
  //         from,
  //         to,
  //       },
  //     };

  //     dispatch(bookCar(reqObj));
  // }
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
  const [totalCars, setTotalcars] = useState([])
  useEffect(() => {
    setTotalcars(cars);
  }, [cars]);
  const Data = totalCars
    ?.filter((item) => item?.Make === car?.Make)
    .map((item, i) => {
      return <CarDetailsCard car={item} />;
    });
  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row
        justify="space-around"
        className="d-flex align-items-start"
        style={{ marginBottom: "20px" }}
        // style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24} className="p-3">
          <img
            src={`https://loremflickr.com/300/200/${car?.Make}","${car?.Model}`}
            className="carimg2 bs1 w-100"
            data-aos="flip-left"
            data-aos-duration="1500"
          />
        </Col>

        <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed style={{color:'#F76E11'}}>
            Car Info
          </Divider>

          <div
            style={{
              justifyContent: "space-between",
              alignItems: "start",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {Object.keys(car)
              .filter(
                (item) =>
                  item === "Make" ||
                  item === "Model" ||
                  item === "Make_Year" ||
                  item === "Price"
              )
              .map((item) => {
                return (
                  <h5>
                    <span style={{ paddingRight: "30px" ,color: '#F76E11' ,fontSize:'18px'}}>
                      {" "}
                      {item === "Make_Year"
                        ? "Year"
                        : item === "Make"
                        ? "Brand"
                        : item}
                      {" :  "}
                    </span>
                    <span style={{color: '#F76E11' ,fontSize:'18px' }}>{car[item]}</span>
                  </h5>
                );
              })}
          </div>
        </Col>
      </Row>
      <Row style={{ justifyContent: "space-around" }}>
        <Col xs={10} sm={10} lg={10} xl={10}>
          {Object.keys(car)
            .filter(
              (item, index) =>
                item !== "_id" &&
                item !== "Car_Name" &&
                !(
                  item === "Make" ||
                  item === "Model" ||
                  item === "Make_Year" ||
                  item === "Price"
                ) &&
                index % 2 !== 0
            )
            .map((item) => {
              return (
                <>
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      lg={12}
                      xl={12}
                      style={{ textAlign: "left" ,color: '#F76E11' }}
                    >
                      {item.replaceAll("_", " ")}
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      lg={12}
                      xl={12}
                      style={{ textAlign: "right" }}
                    >
                      <p style={{ textTransform: "capitalize" ,color: '#F76E11' }}>{car[item]}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24} sm={24} lg={24} xl={24}>
                      <hr />
                    </Col>
                  </Row>
                </>
              );
            })}
        </Col>
        <Col xs={10} sm={10} lg={10} xl={10}>
          {Object.keys(car)
            .filter(
              (item, index) =>
                item !== "_id" &&
                item !== "Car_Name" &&
                !(
                  item === "Make" ||
                  item === "Model" ||
                  item === "Make_Year" ||
                  item === "Price"
                ) &&
                index % 2 === 0
            )
            .map((item) => {
              return (
                <>
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      lg={12}
                      xl={12}
                      style={{ textAlign: "left"  ,color: '#F76E11'}}
                    >
                      {item.replaceAll("_", " ")}
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      lg={12}
                      xl={12}
                      style={{ textAlign: "right" }}
                    >
                      <p style={{ textTransform: "capitalize" ,color: '#F76E11'}}>{car[item]}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24} sm={24} lg={24} xl={24}>
                      <hr />
                    </Col>
                  </Row>
                </>
              );
            })}
        </Col>
      </Row>
      <div>
        
      </div>
      <Carousel responsive={responsive}>{Data}</Carousel>
      <p style={{fontSize:'30px',marginTop:'20px',color: '#F76E11'}}>For More Details Visit Nearby Car Showroom </p>
      <Footer />
    </DefaultLayout>
  );
}

export default CarInfo;
