import React from "react";
import {education} from "../data";
import { AcademicCapIcon } from "@heroicons/react/solid";



const Education = () => {
  return (
    <section>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4 text-green" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-green">
            Educación
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap">
          {
              education.map(education=>(
                    <div className="w-full lg:w-1/4 my-2 bg-black-100 p-10 mx-3 rounded-md" key={education.name}>
                        <h2 className="text-center font-medium  text-base title-font mb-1 text-green mb-3 text-center"> {education.name}</h2>
                        <h1 className="title-font text-lg font-medium text-white  mb-3 text-center">{education.title}</h1>
                        <p className="text-center">{education.year}</p>
                    </div>
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default Education;
