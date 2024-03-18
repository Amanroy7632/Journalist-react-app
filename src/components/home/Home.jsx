import React from "react";
import image from "./images/jor.jpg";
import Course from "../course/Course";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const courseData = [
    {
      courseId: 1,
      courseName: "Environmental Journalism",
      coursePrice: "1230",
      courseDeletedPrice: "4567",
      coursePercentageOff: 40,
    },
    {
      courseId: 2,
      courseName: "Sports Journalism",
      coursePrice: "1230",
      courseDeletedPrice: "4567",
      coursePercentageOff: 40,
    },
    {
      courseId: 3,
      courseName: "Buisness and Health Reporting",
      coursePrice: "1230",
      courseDeletedPrice: "4567",
      coursePercentageOff: 40,
    },
  ];
  const handleClick = () => {
    navigate("/courses");
  };
  return (
    <div className=" z-0">
      {/* <Header/> */}
      {/* <div id="mouse" className="absolute rounded-full backdrop-blur-md bg-no-repeat  w-20 h-20 top-0 left-0 shadow-5xl shadow-[0_0px_42px_0px_rgba(183,37,78,0.24)] " style={{zIndex:"1"}}></div> */}
      <div
        className=" card mt-[10vh]  flex justify-center lg:w-full lg:h-[50vh] dark:bg-[#181a1b] dark:text-white bg-slate-200"
        style={{ zIndex: "0" }}
      >
        {/* hello */}
        <div className="data-container flex flex-col justify-center items-center">
          <h1 className=" text-4xl">
            Hello! Welcome to my corner of journalism!
          </h1>
          <h1 className=" text-4xl">I'm Arun a Ex-Journalist .</h1>
          <div className=" flex justify-evenly lg:w-1/2 max-sm:flex-col">
            <button
              onClick={handleClick}
              className="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border px-6 h-12  flex items-center gap-3 xl:text-xl text-lg lg:h-[4rem] hover:bg-brand rounded-[4rem] lg:mt-4 dark:hover:bg-[#333f90] hover:bg-indigo-200 max-sm:mb-4"
            >
              View Courses
            </button>
            <button className="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border px-6 h-12  flex items-center gap-3 xl:text-xl text-lg lg:h-[4rem] hover:bg-brand rounded-[4rem] lg:mt-4 dark:hover:bg-[#272626] hover:bg-indigo-200 max-sm:mb-4">
              Watch Video <span className=" text-slate-400">|</span>{" "}
              <span className="text-red-400">Live &rarr;</span>{" "}
            </button>
          </div>
        </div>
      </div>
      <div
        className=" card max-sm:h-[30vh] h-[40vh] image-container lg:w-full lg:h-[70vh] bg-black items-center flex justify-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className=" relative  bg-blue-400 px-4 py-2 animate-bounce -top-[300px] -left-[100px]  rounded-[4px] text-white" >New</div> */}
        <div
          id="floating"
          className=" max-lg:hidden lg:relative  bg-blue-400 px-4 py-2 animate-bounce max-xl:-top-[400px] max-xl:-right-[400px] lg:-top-[400px] lg:-right-[400px]  rounded-[40%] text-white"
        >
          🎤
        </div>
        <div
          id="floating"
          className=" max-lg:hidden lg:relative shadow-2xl shadow-green-500  px-4 py-2  -top-[400px] -left-[400px]  rounded-[4px] text-red-600 font-bold "
        >
          News
        </div>
      </div>
      <div className="about-section dark:bg-black dark:text-white " id="about-section" >
        <h1 className=" text-3xl text-center pt-5  font-bold">About <span className=" text-[#0ef]">Us</span></h1>
        <div className="about-conatiner flex justify-evenly p-8 px-[10%] max-md:flex-col max-md:justify-center max-md:items-center">
          <div className="image-container w-1/3">
            <img className=" w-[20rem] rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww" alt="avtar-img" />
          </div>
          <div className="about-info-conatiner flex justify-center items-center gap-3 flex-col w-2/3">
            <h1 className=" text-3xl">I'm <strong className=" text-blue-400">Arun</strong> a Ex-Journalist at ABP News.</h1>
            <p>A passionate and dedicated journalist with a deep-seated love for uncovering stories that resonate with people. <strong className=" text-blue-400">With 20 years of experience</strong> in the field, I've honed my skills in investigative reporting, feature writing, and news analysis.My journey in journalism began with Reporting and came across. Since then, I've had the privilege of working with esteemed publications such as <strong className=" text-blue-400">Pulmawa Attack, 26 11 attack</strong> where I've covered a wide range of topics including politics, social issues, technology, and culture.</p>
          </div>
        </div>
      </div>
      <div className=" card courses dark:bg-black dark:text-white py-1">
        <div
          id="courses"
          className="courses-section flex justify-evenly items-center lg:w-full flex-wrap  dark:bg-black dark:text-white py-1 z-0"
        >
          <Course />
          {/* {
          courseData.map((data)=>{
            return <Course key={data.courseId} data={data}/>
          })
        } */}
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
