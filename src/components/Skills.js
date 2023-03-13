import React from 'react'
import data from '../data/SkillsData'

export default function Skills() {
    return (
        <section className="skills" id="skills">

            <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills </h2>

        
            <div>
                <div className="container text-gray-900">
                    <div className="row" id="skillsContainer">
                        {data.map((data)=>{
                            return <div className="bar flex justify-center" key={data.title}>
                            <span>
                                <img src={data.img} className="w-24 h-24" draggable={false} />
                                <h3 className='text-center text-xl'>{data.title}</h3>
                            </span>
                        </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

