import React from "react";
import Horiseon from "../../assets/Images/Horiseon.png";
import WeatherDashboard from "../../assets/Images/WeatherDashboard.jpeg";
import Book from "../../assets/Images/BookLibrary.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project() {
  return (
    <div className="w-full md:h-screen text-dark-100 background-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-serif inline border-b-4 text-grey-400 ">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>
        {/* container holder for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Project list */}

          {/* Horiseon project */}
          <div
            style={{ background: `url(${Horiseon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto work-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl  font-serif tracking-wider">
                React JS Application
              </span>
              <div>
                <a href="">
                  <button> Demo</button>
                </a>
                <a href="">
                  <button>Link</button>
                </a>
              </div>
            </div>
          </div>
          {/* Weather project */}
          <div
            style={{ background: `url(${Horiseon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  work-div  "
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl  font-serif tracking-wider">
                React JS Application
              </span>
              <div>
                <a href="https://github.com/Rodiat-Oluwaseun">
                  <button> Demo</button>
                </a>
                <a href="">
                  <button>Link</button>
                </a>
              </div>
            </div>
          </div>

          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-screen bg-coverA bg-center work-div"
            style={{ background: `url(${Book})` }}
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl  font-serif tracking-wider">
                React JS Application
              </span>
              <div>
                <a href="https://venkatamora.github.io/Book-and-Movies-library/index.html">
                  <button> Demo</button>
                </a>
                <a href="">
                  <button>Link</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ background: `url(${Horiseon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto work-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl  font-serif tracking-wider">
                React JS Application
              </span>
              <div>
                <a href="">
                  <button> Demo</button>
                </a>
                <a href="">
                  <button>Link</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ background: `url(${Horiseon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto work-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl  font-serif tracking-wider">
                React JS Application
              </span>
              <div>
                <a href="">
                  <button> Demo</button>
                </a>
                <a href="">
                  <button>Link</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ background: `url(${WeatherDashboard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto work-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 m-5">
              <span className="text-2xl  font-serif tracking-wider ">
                Weather Dashboard
              </span>
              <p>
                The App uses openweather map API to access weather data for a
                particular city and a 5 day weather Prediction
              </p>
              <div>
                <a href=" https://rodiat-oluwaseun.github.io/weatherDashboard/">
                  <button>
                    <FontAwesomeIcon icon="fal fa-link" />
                  </button>
                </a>
                <a href="">
                  <button>Link</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
