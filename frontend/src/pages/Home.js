import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import { Col, Row, Divider, DatePicker, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner';
import moment from 'moment'
import { faCarSide, faCarRear, faCar, faBus, faLocationDot, faCalendarDays, faBed } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./home.css"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import CarDetailsCard from './CarDetails'
import CarsSection from './CarsSection'
import CardTabs from '../components/CardTabs'


const { RangePicker } = DatePicker
function Home() {

    const [opendate, setOpendate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        rooms: 1
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const { cars } = useSelector(state => state.carsReducer)
    const { loading } = useSelector(state => state.alertsReducer)
    const [totalCars, setTotalcars] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    useEffect(() => {

        setTotalcars(cars)

    }, [cars])

    return (
        <>
        <DefaultLayout>


            <div className="header">
                <div className="headerContainer">
                    <div className="headerlist">
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faCar} />
                            <span>Sedan</span>
                        </div>
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faCarSide} />
                            <span>SUV</span>
                        </div>
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faCarRear} />
                            <span>Luxury</span>
                        </div>
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faBus} />
                            <span>MUV</span>
                        </div>
                    </div>
                    <h1 className="headertitle">
                        Book your Car now!
                    </h1>
                    <Link to="/login">
                    <button className="signin">
                        SignIn/Register
                    </button>
                    </Link>
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faLocationDot} />

                            <input type="text" className='headersearchinput' placeholder='Search Cars or Brands Eg.Tata'></input>
                        </div>
                       
                        <div className="headerBtn">Search</div>
                    </div>
                </div>
            </div>



            {loading == true && (<Spinner />)}

            <CardTabs totalCars={totalCars}/>
            {/* <CarsSection totalCars={totalCars}/> */}

            

        </DefaultLayout>




      
        </>
    )
}

export default Home