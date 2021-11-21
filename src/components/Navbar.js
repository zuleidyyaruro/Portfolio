import React from "react";

const Navbar = () => {
  return (
    <header className="bg-black-100 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <span href="#about" className="ml-3 text-xl">
            Zuleidy Yaruro
          </span>
        </a>
              
      </div>
    </header>
  );
};

export default Navbar;
