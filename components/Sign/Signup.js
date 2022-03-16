import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)
  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button type="button" onClick={openModal} className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" >
          Open dialog
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal} >
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-black/60" />
            </Transition.Child>

            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <div className='w-screen h-screen flex items-center justify-center '>
                <div className="transition-all transform lg:w-1/3 md:w-1/2 w-11/12 bg-white shadow-xl rounded-2xl flex items-center flex-col">
                  <Dialog.Title as="p" className="text-3xl font-bold text-gray-600 md:mt-16 md:mb-5 mt-12 mb-3">
                    Бүртгүүлэх
                  </Dialog.Title>
                  <div className='flex flex-col w-full md:px-20 px-5 text-gray-600 my-5'>
                    <label className='font-semibold' htmlFor="name">Нэвтрэх нэр</label>
                    <input type="name" className="transition duration-400 ease-in-out border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 focus:ring-0 p-2" />
                 
                    <label className='font-semibold mt-3' htmlFor="name">И-Мейл</label>
                    <input type="email" className="transition duration-400 ease-in-out border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 focus:ring-0 p-2 " />

                    <label className='font-semibold mt-3' htmlFor="name">Нууц үг</label>
                    <input type="password" className="transition duration-400 ease-in-out border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 focus:ring-0 p-2" />

                    <label className='font-semibold mt-3' htmlFor="name">Нууц үг давтах</label>
                    <input type="password" className="transition duration-400 ease-in-out border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 focus:ring-0 p-2 " />
                    <p className='w-full text-xs text-jusitfy mt-3'>
                        Та бүртгэл үүсгэснээр манай <b><u>Үйлчилгээний нөхцөл</u></b> болон <b><u>Нууцлалын бодлогыг</u></b> хүлээн зөвшөөрч буй болно.
                    </p>
                  </div>
                  <div className='w-full md:px-20 px-5 md:mb-20 mb-10 cursor:default'> 
                    <div className='my-2 w-full h-10 bg-gradient-to-r from-violet-500 text-white to-violet-400 flex justify-center items-center rounded-md'>
                      <p>
                        Бүртгүүлэх
                        
                      </p>
                    </div>
                    <div className='my-2 w-full h-10 border border-violet-500 text-violet-500 flex justify-center items-center rounded-md' >
                      <p>
                        Нэвтрэх
                      </p>
                    </div>
                  </div>
                    

                  <div className="absolute right-5 top-5">
                    <button type="button" className="transition duration-200 ease-in-out text-gray-500 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModal} >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
