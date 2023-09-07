import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Carhome from "../Pages/Carhome";
import Buy from "../Pages/Buy";
import { AiOutlineUser } from "react-icons/ai";
import { BiMap, BiSearch } from "react-icons/bi";

function Home() {
  const area = ["Ahmedabad", "Surat"];

  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid me-auto mainnav1">
            <div>
              <Link className="navbar-brand" to="/">
                CarJovo
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation1"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent1"
            >
              <div className="me-auto"></div>
              <div className="me-auto">
                <form className="d-flex" role="search">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn searchbutton" type="submit">
                    <BiSearch />
                  </button>
                </form>
              </div>
              <div>
                <AiOutlineUser className="usericon"/>
                <span>Login / Register</span>
              </div>
            </div>
          </div>
        </nav>
        <hr />

        {/* //************************************************************************************************** */}
        {/* //*************************** NAVBAR 2 *********************************************************************** */}

        <div className="row box1" >
          <div className="col-4">
            <div class="row">
              <div class="col"><Link
                    className="nav-link active"
                    aria-current="page"
                    to="/buy"
                  >
                    Buy Car
                  </Link></div>
              <div class="col"><Link className="nav-link" to="#">
                    Used Car
                  </Link></div>
              <div class="col"><Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Area
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {area.map((x) => (
                      <li>
                        <Link className="dropdown-item" to="#">
                          {x}
                        </Link>
                      </li>
                    ))}
                  </ul></div>
            </div>
          </div>
          <div className="col-2"><BiMap className="usericon"/>
              <span>Select City</span></div>
        </div>
        {/* <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid mainnav2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/buy"
                  >
                    Buy Car
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Used Car
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Area
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {area.map((x) => (
                      <li>
                        <Link className="dropdown-item" to="#">
                          {x}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <BiMap/>
              <span>Select City</span>
            </div>
          </div>
        </nav> */}
        <Routes>
          <Route exact path="/" element={<Carhome />}></Route>
          <Route exact path="/buy" element={<Buy />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
