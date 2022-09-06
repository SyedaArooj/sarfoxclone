import React from 'react'
import {GoLocation} from 'react-icons/go'
import {FaMailBulk} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

export default function Navbar1() {
  return (
    <div>
        
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 bg-black text-white">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
   
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start text-white">
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
    
    <li className="nav-item text-white flex justify-between cursor-pointer">
        <span className='ml-2 mt-1 w-6 text-blue-800'><GoLocation/></span>
        9FW6+599,United Kingdom
    </li>
    
    <li className="nav-item text-white flex justify-between cursor-pointer">
    <span className='text-gray-500 ml-2'>|</span>
    <span className='ml-2 mt-1 w-6 text-blue-800'><FaMailBulk/></span>
        info.sarfox@gmail.com
    </li>
    </ul>
    </div>

    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black">
         <li>
          <a href="#" className="text-base font-normal block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white duration-200" aria-current="page">
        <select className='cursor-pointer outline-none border-none bg-black text-white duration-300'>
            <option className='bg-white text-black' value=''>English</option>
            <option className='bg-white text-black' value=''>French</option>
            <option className='bg-white text-black' value=''>Spanish</option>
            <option className='bg-white text-black' value=''>Urdu</option>
        </select>
        </a>
        </li>

        <li>
          <span className='text-gray-500'>|</span>
        </li>

        <li>
          <a href="#" class="text-lg block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <FaFacebookF/>
          </a>
        </li>

        <li>
          <a href="#" class="text-lg block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <AiOutlineTwitter/>
          </a>
        </li>

        <li>
          <a href="#" class="text-lg block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <AiFillInstagram/>
          </a>
        </li>

        <li>
          <a href="#" class="text-lg block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <FaLinkedinIn/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}