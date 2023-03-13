import React from 'react'
import logo from '../image/logo.png'
export default function About() {


    return (
        <>
            <section id='about'>
                <h1 className='heading'><i className="fa-solid fa-user"></i> About <span className='text-blue-500'>Me</span></h1>
                <div className='flex justify-center items-center mt-2 mb-2'>
                    <div>
                        <div className=' flex justify-center'>
                            <img src={logo} alt="Image" draggable={false} className='sm:w-[100vw] lg:w-[10vw] rounded-full ' />
                        </div>
                        <div className='mt-2 mx-2'>
                            <h3 className='text-black text-2xl text-center '>I'm Tanishq</h3>
                            <h3 className='text-gray-800 text-2xl text-center '>Half Stack Web devloper</h3>
                            <p className='text-gray-900 text-xl text-center '>
                                I'm Half Stack Web devloper currently studying in 7th Class. I'm very passionate about Coding from very early age!
                            </p>
                            <span>
                                <p className='text-xl mt-2'>Aim: <span className='text-blue-500'>Full stack Software Devloper</span></p>
                            </span>
                            <span>
                                <p className='text-xl mt-2'>Age: <span className='text-blue-500'>13</span></p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
