import React from "react";
import Horiseon from "../../assets/Images/Horiseon.png";
import WeatherDashboard from "../../assets/Images/WeatherDashboard.jpeg";
import Quizapp from "../../assets/Images/codeQuiz.jpeg";
import Book from "../../assets/Images/BookLibrary.jpeg";
import password from "../../assets/Images/passwordgen.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLink } from "react-icons/fa";

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
            style={{ backgroundImage: `url(${Horiseon})` }}
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
            style={{ backgroundImage: `url(${Quizapp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  work-div  "
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 m-5">
              <span className="text-2xl  font-serif tracking-wider">
                Code Quiz
              </span>
              <p>
                A timed coding quiz with multiple-choice questions. This app
                will run in the browser, and will feature dynamically updated
                HTML and CSS powered by JavaScript code that you write. It will
                have a clean, polished, and responsive user interface.
              </p>
              <div>
                <a href="https://rodiat-oluwaseun.github.io/codeQuiz/">
                  <button>
                    {" "}
                    <FaLink />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-screen bg-coverA bg-center work-div"
            style={{ backgroundImage: `url(${Book})` }}
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl  font-serif tracking-wider">
                React JS Application
              </span>
              <div>
                <a href="https://venkatamora.github.io/Book-and-Movies-library/index.html">
                  <FaLink />
                  <button> </button>
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
                  <button>
                    <FaLink />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${password})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto work-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 m-5">
              <span className="text-2xl  font-serif tracking-wider">
                DailyPlannerApp
              </span>

              <p>
                This is an application that allow employee to generate a random
                password based on criteria they’ve selected by modifying starter
                code.
              </p>

              <div>
                <a href=" https://rodiat-oluwaseun.github.io/passWordGenerator/">
                  <button>
                    <FaLink />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WeatherDashboard})` }}
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
                    <FaLink />
                  </button>
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
