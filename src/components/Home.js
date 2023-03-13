import React from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Courses from './Courses'
import About from './About'
export default function Home(props) {
    document.title = "Home | CodeWithTanishq"
    return (
        <>
            <section className='bg-screen-import'>
                <Hero image={props.image} scroll={props.scroll}/>
                <About/>
                <Skills/>
                <Courses/>
            </section>
        </>
    )
    }

