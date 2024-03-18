import React from "react";
import { useParams,Link, Outlet } from "react-router-dom";
import Header from "../header/Header";
function Course({data}) {
    const {courseId}=useParams();
    const courseData = [
        {
          courseId: 1,
          courseName: "Media ethics & governance",
          coursePrice: "2010",
          courseDeletedPrice: "4567",
          coursePercentageOff: 56,
          thumbnail:
            "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/3a/8243a092de11e7897e899381a16c6e/MOOC_Coursera-Profile-pic_1200x1200px-v2.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
          courseRating: 4.8,
          courseEnrolledCount: 2300,
          language:"English,Hindi,Hinglish",
          newCourse:false
        },
        {
          courseId: 2,
          courseName: "Gathering and Developing the News",
          coursePrice: "2255",
          courseDeletedPrice: "5499",
          coursePercentageOff: 59,
          thumbnail:
            "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/02/379520bec511e5b598936a12f1615f/videocamera.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
          courseRating: 4.4,
          courseDuration: "4 week",
          courseEnrolledCount: 2400,
          language:"English,Hindi,Hinglish",
          newCourse:true
        },
        {
          courseId: 3,
          courseName: "Good with Words:Writing & Editing",
          coursePrice: "1139",
          courseDeletedPrice: "2367",
          coursePercentageOff: 47,
          thumbnail:
            "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/0c/155a43de0b42faae488c039652ca7d/gww_specializationtitle_V1.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
          courseRating: 4.7,
          courseDuration: "2 months at 10 hours a week",
          courseEnrolledCount: 2003,
          language:"English,Hindi,Hinglish",
          newCourse:false
        },
      ];
      const hideCourses=(e)=>{
        // document.getElementById("hideCourse").style.display="none";
        // document.getElementById("courses").style.display="none";
      }
  return (
    <div className=" pt-5 z-0">
    {/* <Header/> */}
    <div className="courses dark:bg-black dark:text-white py-12" id="hideCourse">
    <div className="heading flex flex-wrap justify-center items-center">
          <h1 className=' text-4xl'>Courses</h1>
        </div>
    </div>
    <div id='courses' className="courses-section flex justify-evenly items-center lg:w-full flex-wrap  dark:bg-black dark:text-white py-12 z-0">
    {
        courseData.map((data)=>{
            return (<Link key={data.courseId} to={`${data.courseId}`} onClick={hideCourses} className=" relative z-0 dark:bg-[#19191A]">
            <div className="flex flex-col border rounded-lg max-w-[450px] bg-slate-600 dark:bg-[#181a1b] lg:py-0 md:mb-5 dark:border-[rgba(255,255,255,0.10)]">
              <div className="image-container max-h-52 w-full overflow-hidden rounded-lg mb-4 p-4 flex justify-center ">
                <img className=" rounded-lg w-full"
                  src={data.thumbnail}
                  alt="image"
                />
              </div>
              <div className="course-data-container p-4">
                <div className="course-name text-[#e8e6e3] mb-2 font-rubik text-lg font-bold tracking-tight md:text-2xl">
                  <h1>{data.courseName}</h1>
                </div>
                <div className="course-price mt-4 flex gap-3 font-bold">
                  <p className="price text-base text-[#6e96cf]">₹ {data.coursePrice}</p>
                  <p className="cut-price text-base text-subText line-through">
                    <del>₹ {data.courseDeletedPrice}</del>
                  </p>
                  <p className="percentage-off rounded-md bg-grassGreen px-2 py-1 text-sm text-[#fff]">
                    {data.coursePercentageOff}% off
                  </p>
                </div>
              </div>
            </div>
            {data.newCourse?<div className="absolute bg-blue-400 px-4 py-2 animate-bounce -top-[10px] -left-[10px] rounded-[4px]">New</div>:""}
            </Link>);
        })
    }
      </div>
      {/* <Outlet/> */}
      {/* <div className=" relative padding py-5"></div> */}
      <div className=" relative w-full z-10 -top-[0px] dark:bg-[#000] text-white">
        <div className=" mx-8 lg:w-[90%] xl:mx-auto bg-indigo-500 py-12 md:py-24 rounded-3xl">
            <div className="max-w-4xl px-5 gap-y-4 flex md:flex-row flex-col justify-center items-start md:items-center mx-auto">
                <div className="flex flex-col justify-center items-start gap-y-2 flex-1 ">
                    <p className=" text-3xl font-semibold">What would you like to learn ?</p>
                    <p className=" text-3xl font-semibold">Let's have a chat together. </p>
                </div>
                <button className="inline-flex items-center justify-center text-indigo-400 whitespace-nowrap rounded-md text-xl font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 !p-3 !rounded-btn h-auto bg-white hover:bg-neutral-200">Get Started</button>
            </div>
        </div>
      </div>
      </div>
  );
}

export default Course;
