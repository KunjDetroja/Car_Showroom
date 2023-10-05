import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner';
import { faCarSide, faCarRear, faCar, faBus, faLocationDot, faCalendarDays, faBed } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./home.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import CardTabs from '../components/CardTabs'
import Footer from './Footer'
function Home() {


    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        rooms: 1
    })


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
    // const navigate=useNavigate();

    return (
        <>
        <DefaultLayout>


            <div className="header">
                <div className="headerContainer">
                    <h1 className="headertitle">
                        Book your Car now!
                    </h1>
                    <Link to="/login">
                    </Link>
                    <div className="headerSearch" style={{width:'fit-content'}}>
                        <div className="headerSearchItem" >
                            <FontAwesomeIcon icon={faLocationDot} />

                            <input type="text" className='headersearchinput' placeholder='Search Cars or Brands Eg.Tata'/>
                        </div>
                       
                        <button className="headerBtn" >Search</button>
                    </div>
                </div>
            </div>
            {loading == true && (<Spinner />)}
            <CardTabs totalCars={totalCars}/>
        </DefaultLayout>
        <Footer/>

        </>
    )
}

export default Home