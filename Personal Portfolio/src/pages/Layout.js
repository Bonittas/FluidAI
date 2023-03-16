import { Outlet, Link } from "react-router-dom";
import './index.css'

const Layout = () => {
  return (
    <>
      <navs>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nav">Nav</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </navs>

      <Outlet />
    </>
  )
};

export default Layout;