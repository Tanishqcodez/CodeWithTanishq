import React from 'react'

export default function Footer(props) {
    return (
        <>
            <footer className="text-gray-600 body-font bottom-0 ">
                <div>
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src={props.icon} alt="ICON" className='h-10 w-10 rounded-full' />
                        <span className="ml-3 text-xl">CodeWithTanishq</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 CodeWithTanishq —@Tanishq
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500" href='https://www.youtube.com/channel/UCzHcFPUEcGOcvW3BEI9ATsQ' target={"_blank"}>
                    <i className="fa-brands fa-youtube"></i>
                    </a>
                    </span>
                </div>
                </div>
            </footer>
        </>
    )
}
