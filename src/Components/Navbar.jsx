import React from "react";
import logo from"./images/Logo.png"
import {GoPlus} from 'react-icons/go'
import{BsSearch} from 'react-icons/bs'
import{GiHamburgerMenu} from 'react-icons/gi'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <img src={logo} alt="logo" className="h-10" />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-20 ">
              <li className="nav-item mx-2 ">
                <a
                  className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                ><span className=" flex ml-2">Home<span className="px-1 pt-2 text-xs"><GoPlus/> </span></span>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="px-3 py-2 flex items-center text-lg  font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo" >
                <span className=" flex ml-2">Services<span className="px-1 pt-2 text-xs">
                  
                  <GoPlus/> </span></span>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="px-3 py-2 flex items-center text-lg  font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo">
                  <span className=" flex ml-2">Pages<span className="px-1 pt-2  text-xs"><GoPlus/> </span></span>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="px-3 py-2 flex items-center text-lg font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo">
                 <span className=" flex ml-2">News<span className="px-1 pt-2  text-xs"><GoPlus/> </span></span>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="px-3 py-2 flex items-center text-lg  font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo">
                  <span className="ml-2">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col lg:flex-row list-none   ">
              <li className="lg:mt-8 lg:text-lf lg:m-2 lg:cursor-pointer"><BsSearch/></li>
              <li className="lg:mt-8 lg:text-xl lg:m-6 lg:cursor-pointer"><GiHamburgerMenu/></li>
              <li><button className="bg-blue-800 before:content['bg-black'] text-white px-8 py-6 font-bold">Get A Qoute</button></li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
}