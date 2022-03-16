import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Image from 'next/image';

import Login from './Sign/Login'

import OzzoLogo from '../Assets/LOGO.png'

function Sidebar() {
    const router = useRouter()
    const [showModal, setShowModal] = React.useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
        <div className='lg:hidden w-full flex items-center p-3 bg-white justify-between sticky top-0 shadow-sm'>
            <div className=''>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <div className="h-10 w-24 relative ml-2"> 
                            <Image src={OzzoLogo} layout="fill" />
                        </div>
                    </a>
                </Link>
            </div>
            
            <div className='flex items-center pr-5' >
                <div className='pr-5'>
                </div>
                     <svg onClick={() => setShowSidebar(!showSidebar)} className={`lg:hidden h-6 w-6 z-50 flex items-center cursor-pointer right-10 top-6 ease-in-out duration-300 ${showSidebar ? "hidden" :"flex"}` } fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    
            </div>
        </div>
        
        <div  onClick={() => setShowSidebar(!showSidebar)} className={`top-0 right-0 w-screen bg-black text-white fixed h-screen z-0 bg-black ease-in-out duration-300 ${ showSidebar ? "opacity-50 z-10 " : "hidden " }`}>
        </div>

        <div className={`top-0 right-0 w-72 bg-white p-5 text-black fixed h-full z-40 ease-in-out duration-300 shadow-2xl ${ showSidebar ? "translate-x-0 " : "translate-x-full" }`} >
            <svg  onClick={() => setShowSidebar(!showSidebar)} className={`lg:hidden h-6 w-6 z-50 flex items-center absolute right-10 top-6 cursor-pointer ease-in-out duration-300 ${showSidebar ? "flex" :"hidden"}` } fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
            <div className="flex flex-col justify-around items-start text-gray-500 mt-10">
                <Link href='/' >
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-violet-500 ${router.pathname == "/" ? "border-violet-500  text-black " : "border-white"}`}>
                        Нүүр
                    </a>
                </Link>
                <div className='w-screen h-px bg-gray-100 ml-2'></div>
                <Link href='/pets'>
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-violet-500 ${router.pathname == "/pets" ? "border-violet-500  text-black " : "border-white"}`}>
                      Эрхүүд
                    </a>
                </Link>
                 <div className='w-screen h-px bg-gray-100 ml-2'></div>
                <Link href='/lost'>
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-violet-500 ${router.pathname == "/lost" ? "border-violet-500  text-black " : "border-white"}`}>
                        Алдсан/Олсон
                    </a>
                </Link>
                
                <div className='w-screen h-px bg-gray-100 ml-2'></div>
                <Link href='/about'>
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-violet-500 ${router.pathname == "/about" ? "border-violet-500  text-black " : "border-white"}`}>
                       Бидний тухай
                    </a>
                </Link>
               <div className='w-screen h-px bg-gray-100 ml-2'></div>
                <Link href='/contact'>
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-violet-500 ${router.pathname == "/contact" ? "border-violet-500  text-black " : "border-white"}`}>
                        Холбоо Барих
                    </a>
                </Link>
                 <div className='w-screen h-px bg-gray-100 ml-2'></div>
                <Link href='/'>
                    <a onClick={() => {setShowModal(true), setShowSidebar(!showSidebar)}}
                    className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 border-transparent text-lg hover:text-black hover:border-violet-500`}>
                       Нэвтрэх / Бүртгүүлэх
                    </a>
                </Link>
      </div>
           </div>
           {showModal ? (
        <>
            <Login />
        </>
      ) : null}
        </>
    )
}

export default Sidebar;
