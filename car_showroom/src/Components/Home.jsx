import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Carhome from "../Pages/Carhome";
import Buy from "../Pages/Buy";
import { AiOutlineUser } from "react-icons/ai";

function Home() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid me-auto mainnav ">
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
              <div className="me-auto">
                
              </div>
              <div className="me-auto">
              <form className="d-flex" role="search">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div >
                <AiOutlineUser />
                <span>Login / Register</span>
              </div>
            </div>
          </div>
        </nav>


{/* //************************************************************************************************** */ }
{/* //*************************** NAVBAR 2 *********************************************************************** */ }



        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid mainnav">
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    Buy Car
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Link
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
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Carhome />}></Route>
          <Route exact path="/buy" element={<Buy />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
