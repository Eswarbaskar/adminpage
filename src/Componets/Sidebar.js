import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to={"/home"}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Home</span>
                </Link>
            </li>


            <li className="nav-item active">
                <Link className="nav-link" to={"/dashboard"}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
           

            <hr className="sidebar-divider" />
             <div className="sidebar-heading">Addons</div>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to={"/user"}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>user</span>
                </Link>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>User List</span>
                </a>
            </li>




        </ul>

    )
}

export default Sidebar