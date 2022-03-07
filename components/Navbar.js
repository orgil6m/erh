import React from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from "next/image";
import OzzoLogo from '../Assets/LOGO.png'

import { useState } from 'react'


const Navbar = () => {
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
        
      </nav>
        
    </>
  );
};

export default Navbar; 