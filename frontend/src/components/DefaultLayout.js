import React from "react";
import { Menu, Dropdown, Button, Space, Row, Col } from "antd";
import { Link } from 'react-router-dom'
import "./defaultlayout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar } from "@fortawesome/free-solid-svg-icons"


function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('user'))
  const menu = (
    <Menu>
      <Menu.Item>
        <Link

          to="/"
        >
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link

          to="/userbookings"
        >
          Bookings
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link

          to="/admin"
        >
          Admin
        </Link>
      </Menu.Item>
      <Menu.Item onClick={() => {
        localStorage.removeItem('user');
        window.location.href = '/login'
      }}>
        <li style={{ color: 'orangered' }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className='navbar'>
        <div className='navcontainer'>

          <span className='logo'> <FontAwesomeIcon icon={faCar} />  CarJovo</span>
          <div className='navItems'>
            <Dropdown overlay={menu} placement="bottomCenter">
              <button className="signin">{user.username}</button>
            </Dropdown>

          </div>
        </div>

      </div>
      <div className="content">{props.children}</div>

    </div>
  );
}

export default DefaultLayout;
