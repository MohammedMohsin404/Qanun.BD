import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/bookings"}>My Bookings</NavLink>
            </li>
            <li>
              <NavLink to={"blogs"}>Blogs</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl text-[#0f0f0fc3]">
          {" "}
          <img src={logo} alt="" /> Qanun.BD
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/bookings"}>My Bookings</NavLink>
          </li>
          <li>
            <NavLink to={"blogs"}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/contact"} className="btn text-white bg-[#0EA106] rounded-3xl text-xl p-6">
          Contact Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
