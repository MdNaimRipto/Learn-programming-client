import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import logo from "../../../Assets/logo.png"
import DarkModeToggle from "react-dark-mode-toggle";
import { Avatar, Dropdown, Navbar, Tooltip } from "flowbite-react";
import { FaUser } from "react-icons/fa"
import { AuthContext } from "../../../AuthProvider/AuthProvider"


const Nav = () => {

    const { user } = useContext(AuthContext)

    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (

        <Navbar
            className="container mx-auto my-2"
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand>
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Learn Programming
                </span>
            </Navbar.Brand>
            <div className="flex justify-between md:order-2 w-2/6 md:w-[12%]">
                {
                    !user?.uid ?
                        <Link to="/login">
                            <button className="bg-red-500 rounded text-white py-2 font-semibold px-5">
                                Login
                            </button>
                        </Link>
                        : <Tooltip
                            content={user?.uid && user?.displayName}
                            placement="bottom"
                        >
                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={<Avatar alt="User settings"
                                    img={user?.uid ? user?.photoURL
                                        : <FaUser />
                                    } rounded={true} />}
                            >

                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        Bonnie Green
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        name@flowbite.com
                                    </span>
                                </Dropdown.Header>


                                <Dropdown.Item>
                                    Dashboard
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Settings
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Earnings
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>
                        </Tooltip>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="ml-3 md:ml-0">
                <Link
                    className="mb-3 md:mb-0 hover:text-red-500"
                    to="/home"
                >
                    Home
                </Link>
                <Link className="mb-3 md:mb-0 hover:text-red-500" to="/courses">
                    Courses
                </Link>
                <Link className="mb-3 md:mb-0 hover:text-red-500" to="/faq">
                    FAQ
                </Link>
                <Link className="mb-3 md:mb-0 hover:text-red-500" to="/blog">
                    Blog
                </Link>
                <li className="flex items-center">
                    <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={50}
                    />
                </li>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Nav;