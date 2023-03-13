import React from 'react'
import { Link } from 'react-router-dom'

const Testing = (props) => {
    return (
        <>
            <div className='md:grid md:justify-center mb-32 ml-2 mr-2 items-center'>
            <h1 className='text-center text-3xl mt-3' dangerouslySetInnerHTML={{__html: props.blogTitle}}></h1>
                <h3 className=' text-justify sm:w-[40vw] text-xl' dangerouslySetInnerHTML={{__html: props.blogContent }}></h3>
                <Link to={"/blog"}>
                    <button type="button" onClick={props.load} className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back</button>
                </Link>
            </div>
        </>
    )
}

export default Testing;
