import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { links } from "../data";



const About = () => {
    return (
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Zuleidy 
            <br className="hidden lg:inline-block" />Ingeniera de Sistemas y Desarrolladora Web.
           
          </h1>
          <p className="mb-8 leading-relaxed">
            Gran capacidad de resolución de problemas y alto grado de compromiso; autodidacta, en 
            constante aprendizaje. Amante de los videojuegos y la lectura relacionada con temas tecnológicos.
          </p>
          <div className="mb-7 text-green">
            {
              links.map(link=>{
                return(
                  <a href={link.url} target="_blank" key={link.name}>
                    <FontAwesomeIcon className="m-3 " icon={link.icon} size="2x"/>
                  </a>
                )
              })
            }
          </div>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Descarga mi CV
            </a>
          </div>
          
        </div>
        <div className="lg:max-w-lg  md:w-1/3 ">
          <img
            className="rounded"
            alt="hero"
            src="./profile.png"
          />
        </div>
      </div>
    </section>
    )
}

export default About
