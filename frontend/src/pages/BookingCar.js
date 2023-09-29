import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { getAllCars } from "../redux/actions/carsActions";
// import moment from "moment";
// import { bookCar } from "../redux/actions/bookingActions";
// import StripeCheckout from "react-stripe-checkout";
// import AOS from 'aos';
// import gis from "async-g-i-s"

import 'aos/dist/aos.css'; // You can also use <link> for styles
// const { RangePicker } = DatePicker;
function BookingCar({ match }) {
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



  return (


    <DefaultLayout>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24} className='p-3'>
          <img src={`https://loremflickr.com/300/200/${car?.Make}`} className="carimg2 bs1 w-100" data-aos='flip-left' data-aos-duration='1500'/>
        </Col>

        <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>
            Car Info
          </Divider>
          <div style={{ textAlign: "right" }}>
            <p>{car.Car_Name}</p>
            <p>{car.rentPerHour}</p>
            <p>Fuel Type : {car.fuelType}</p>
            <p>Max Persons : {car.capacity}</p>
          </div>
          <table>
            <tr>
              <td>Price</td>
            </tr>
          </table>
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default BookingCar;