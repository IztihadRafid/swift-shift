import { Link, NavLink } from "react-router";
import ProFastLogo from "../ProFastLogo/ProFastLogo";


const Navbar = () => {
    const navItems = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to={'/coverage'}>Coverage</NavLink></li>
        <li><NavLink to={'/tracktorder'}>Track Order</NavLink></li>
        <li><NavLink>Pricing</NavLink></li>
        <li><NavLink>Be Rider</NavLink></li>
        <li className="md:hidden"> <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Sign In</NavLink>
      </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm rounded-3xl mb-5 p-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow bg-[#CAEB66] text-gray-700">
                        {navItems}
                    </ul>
                </div>
                <ProFastLogo></ProFastLogo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end hidden md:flex space-x-4">
                <Link to={'/login'} className="btn bg-slate-300 px-8 py-4 rounded-4xl">Sign In</Link>
                <Link to={'/rider'} className="btn bg-[#CAEB66] px-8 py-4 rounded-4xl ">Be a Rider</Link>
               {/* for mobile screen hidden */}
                <div className="flex md:hidden flex-col items-center space-y-2 mt-4 w-full">
                    <Link to="/login" className="btn bg-slate-300 px-8 py-4 rounded-4xl w-full max-w-xs">
                        Sign In
                    </Link>
                    <Link to="/rider" className="btn bg-[#CAEB66] px-8 py-4 rounded-4xl w-full max-w-xs">
                        Be a Rider
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;