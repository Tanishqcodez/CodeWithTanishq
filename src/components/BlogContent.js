import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css";


const BlogContent = (props) => {

    let content = `<script src="https://cdn.tailwindcss.com"></script>`
    useEffect(()=>{
        Prism.highlightAll();
    })
    return (
        <>
            <div className='md:grid md:justify-center mb-32 ml-2 mr-2 items-center'>
                <h1 className='text-center text-3xl my-3'>What is Tailwind CSS?</h1>
                <h3 className=' text-justify sm:w-[40vw] text-xl'>
                    <div className=''>
                        Hey peeps, today we will see what is Tailwind CSS? So let's get started!!
                    </div>
                    <br />
                    <div className=' mt-1'>
                        <b><li>What is Tailwind?</li></b> Tailwind CSS is a utility-first CSS framework for rapid UI devlopment, it comes with pre-defined classes. Tailwind css is rapidly growing CSS framework!
                    </div>
                    <div className='mt-3'>
                        <b><li>How to install Tailwind CSS?</li></b>
                        <span> Tailwind CSS can be installed using many ways. I'll cover the easiest way!</span><br /><br />
                        <span className='space-x-2'><b>Play CDN:</b> We will use CDN which is provided by Tailwind itself!<br />
                        <span>
                            <span><b>Step 1:</b>Add the Play CDN script tag to the head of your HTML file, and start using Tailwind’s utility classes to style your content.</span>
                            <pre><code className="language-html">
                                {content}
                            </code></pre>
                        </span>
                        </span>
                    </div>
                    <div className='mt-3'>
                        <b><li>Verdict</li></b><br />
                        <span></span>
                    </div>Tailwind CSS is a great framework for CSS devlopers! It is very helpful in many ways. With its utility classes we can, see which element is having which styles! I suggest you to use it in your projects, it support many framework(react,next).
                    <div className='mt-3'>
                        <span>I hope you all find this blog helpful to you! Thank you</span>
                    </div>
                </h3>
                <Link to={"/blog"}>
                    <button type="button" onClick={props.load} className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back</button>
                </Link>
            </div>
        </>
    )
}

export default BlogContent
