import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <>  <div className=''>
            <header className="text-gray-600 body-font bg-[#EDF0F5] ">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={props.icon} alt="ICON" className='w-10 h-10 rounded-full' />
                        <span className="ml-3 text-xl">CodeWithTanishq</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className='group  transition-all duration-300 ease-in-out'>
                            <span className='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:67%_2px] transition-all duration-500 ease-out'>
                                <Link onClick={props.load} className="mr-5 hover:text-gray-900 cursor-pointer" to={"/"}>Home</Link>
                            </span>
                        </a>
                        <a className='group  transition-all duration-300 ease-in-out'>
                            <span className='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:67%_2px] transition-all duration-500 ease-out'>
                                <Link onClick={props.load} className="mr-5 hover:text-gray-900 cursor-pointer" to={"/blog"}>Blogs</Link>
                            </span>
                        </a>
                        <a className='group  transition-all duration-300 ease-in-out'>
                            <span className='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:67%_2px] transition-all duration-500 ease-out'>
                                <Link onClick={() => {
                                    props.load
                                    document.title = "Courses | CodeWithTanishq"
                                }} className="mr-5 hover:text-gray-900 cursor-pointer" to={"/courses"}>Courses</Link>
                            </span>
                        </a>
                        <a className='group  transition-all duration-300 ease-in-out'>
                            <span className='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:67%_2px] transition-all duration-500 ease-out'>
                                <Link onClick={props.scroll} className="mr-5 hover:text-gray-900 cursor-pointer" to={"/"}>About me</Link>
                            </span>
                        </a>
                    </nav>
                </div>
            </header>
        </div>
            <hr className='bg-black' />
        </>
    )
}
