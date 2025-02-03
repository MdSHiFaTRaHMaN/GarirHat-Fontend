import React from 'react';

const ButtomBer = () => {
    return (
        <footer className="bg-white w-full lg:w-11/12 mx-auto">
        <div className="container py-8 mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array(4).fill().map((_, index) => (
              <div key={index}>
                <div className="text-xs font-medium text-black uppercase">
                  Getting Started
                </div>
                <a
                  href="#"
                  className="block mt-5 text-sm font-medium text-black duration-700 hover:text-black  hover:underline"
                >
                  Installation
                </a>
                <a
                  href="#"
                  className="block mt-3 text-sm font-medium text-black duration-700 hover:text-black  hover:underline"
                >
                  Release Notes
                </a>
                <a
                  href="#"
                  className="block mt-3 text-sm font-medium text-black duration-700 hover:text-black  hover:underline"
                >
                  Upgrade Guide
                </a>
                <a
                  href="#"
                  className="block mt-3 text-sm font-medium text-black duration-700 hover:text-black  hover:underline"
                >
                  Using with Preprocessors
                </a>
                <a
                  href="#"
                  className="block mt-3 text-sm font-medium text-black duration-700 hover:text-black  hover:underline"
                >
                  Optimizing for Production
                </a>
                <a
                  href="#"
                  className="block mt-3 text-sm font-medium text-black duration-700 hover:text-black  hover:underline"
                >
                  Browser Support
                </a>
                <a
                  href="#"
                  className="block mt-3 text-sm font-medium text-black duration-700 hover:text-black  hover:underline"
                >
                  IntelliSense
                </a>
              </div>
            ))}
          </div>
          <div className="my-10 border-t border-gray-200 "></div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-black">© Copyright 2021. All Rights Reserved.</p>
            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                className="mx-2 text-black hover:text-black"
                aria-label="Reddit"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..."></path> {/* Add valid SVG path here */}
                </svg>
              </a>
              <a
                href="#"
                className="mx-2 text-black hover:text-black"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..."></path> {/* Add valid SVG path here */}
                </svg>
              </a>
              <a
                href="#"
                className="mx-2 text-black hover:text-black"
                aria-label="Github"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..."></path> {/* Add valid SVG path here */}
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default ButtomBer;