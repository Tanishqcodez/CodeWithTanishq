import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/BlogsData'

export default function Blogs(props) {
    document.title = "Blogs | CodeWithTanishq"
    return (
        
        <section className="text-gray-600 body-font overflow-hidden mt-1">
            <h1 className='body-font text-center text-2xl text-black'>Blogs By Tanishq</h1>
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    

                    {data.map((data)=>{
                        return <div className="py-8 flex flex-wrap md:flex-nowrap" key={data.title}>
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-gray-700">{data.category}</span>
                            <span className="mt-1 text-gray-500 text-sm">{data.date}</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{data.title}</h2>
                            <p className="leading-relaxed">{data.desc}</p>
                            
                            <Link onClick={props.load} to={data.slug} className="text-blue-500 inline-flex items-center mt-4 cursor-pointer">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>

                        </div>
                    </div>
                    })}

                </div>
            </div>
        </section>
    )
}
