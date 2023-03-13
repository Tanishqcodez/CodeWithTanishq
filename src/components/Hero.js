import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
export default function Hero(props) {

    return (
        <div>
            <section className="text-gray-600 body-font   h-[100%] F lg:relative md:block sm:flex flex-wrap gap-5 min-h-[100vh] items-center mx-[6rem] ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900">Hi There,</h1>
                        <h1 className="title-font sm:text-4xl text-3xl  ml-2 font-medium text-gray-900">Code with <span className='text-blue-500'>Tanishq</span></h1>
                        <span className="title-font sm:text-4xl text-3xl  font-medium text-gray-900" id='typewriter'>
                            <ReactTypingEffect
                                text={["Frontend Devlopement!", "Backend Devlopement!", "Web designing!"]} speed={100} staticText={"I am into"} eraseSpeed={100} eraseDelay={200} typingDelay={700}
                            />
                        </span>
                        <p className="mb-8 leading-relaxed"></p>
                        <div className="flex justify-center ml-3">
                            <button className="inline-flex  text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] delay-100 transition ease-in-out" onClick={props.scroll}>About me <i class="fa-solid fa-angle-down mt-2 ml-2"></i></button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  hidden lg:block">
                        <img className="object-cover object-center rounded-full h-80 w-80 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] " alt="hero" src={props.image} />
                    </div>
                </div>
            </section>
        </div>
    )
}

//  make the typing writing effect
