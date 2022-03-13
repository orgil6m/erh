import React from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from "next/image";
import OzzoLogo from '../Assets/LOGO.png'

import { useState } from 'react'
import Login from './Sign/Login'

const Navbar = () => {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter()
  const { pathname, asPath, query } = router
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className='flex items-center flex-wrap p-3 w-full lg:flex hidden sticky top-0 shadow-sm ' >
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <div className="h-10 w-24 relative ml-2"> 
              <Image src={OzzoLogo} layout="fill" />
            </div>
         </a>
        </Link>
      <div className=" lg:flex hidden justify-start items-center h-10 text-gray-500 w-9/12">
        <Link href='/' >
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2   border-b-2 text-md hover:text-black hover:border-violet-500 ${router.pathname == "/" ? "border-violet-500  text-black " : "border-transparent"}`}>
            Нүүр
          </a>
        </Link>
        <Link href='/pets'>
        <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-violet-500 ${router.pathname == "/pets" ? "border-violet-500  text-black " : "border-transparent"}`}>
            Эрхүүд
          </a>
        </Link>
         <Link href='/lost'>
        <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-violet-500 ${router.pathname == "/lost" ? "border-violet-500  text-black " : "border-transparent"}`}>
            Алдсан/Олсон
          </a>
        </Link>
        <Link href='/about'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-violet-500 ${router.pathname == "/about" ? "border-violet-500  text-black " : "border-transparent"}`}>
              Бидний тухай
          </a>
        </Link>
        <Link href='/contact'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-violet-500 ${router.pathname == "/contact" ? "border-violet-500  text-black " : "border-transparent"}`}>
            Холбоо барих
          </a>
        </Link>
      </div>
      <div className="transition-all duration-500 cursor-default ease-in-out absolute right-10 text-gray-500  flex items-center justify-center hover:text-black rounded-full"  type="button"
        onClick={() => setShowModal(true)}>
        <p className="font-medium font-sm cursor-default pl-2"> Нэвтрэх</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-2" viewBox="0 0 20 20" fill="currentcolor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
        </div>
      </nav>
       {showModal ? (
        <>
            <Login />
        </>
      ) : null}
    </>
  );
};

export default Navbar; 