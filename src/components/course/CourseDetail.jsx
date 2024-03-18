import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function CourseDetail({ data }) {
  const feedBack = [
    {
      username: "Amit Sharma",
      id: 1,
      learner: "Learner since 2020",
      message:
        "I directly applied the concepts and skills I learned from my courses to an exciting new project at work.",
      thumbnail:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Felipe_Moitta.png?auto=format%2Ccompress&dpr=1&w=64&h=64&fit=crop",
    },
    {
      username: "Aman Roy",
      id: 2,
      learner: "Learner since 2021",
      message:
        "When I need courses on topics that my university doesn't offer, Coursera is one of the best places to go.",
      thumbnail:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Larry_Tao_Wang_1.png?auto=format%2Ccompress&dpr=1&w=64&h=64&fit=crop",
    },
    {
      username: "Abhay Kumar",
      id: 3,
      learner: "Learner since 2018",
      message:
        "Learning isn't just about being better at your job: it's so much more than that. Coursera allows me to learn without limits.",
      thumbnail:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Chaitanya_Anand.png?auto=format%2Ccompress&dpr=1&w=64&h=64&fit=crop",
    },
    {
      username: "Abhishek Sharma",
      id: 4,
      learner: "Current Learning",
      message:
        "To be able to take courses at my own pace and rhythm has been an amazing experience. I can learn whenever it fits my schedule and mood",
      thumbnail:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/a3/b90d7b6f6341838c7c777c67debd90/barry_patrick.jpg?auto=format%2Ccompress&dpr=1&w=75&h=75&fit=crop",
    },
  ];
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
      courseDuration: "Course Duration 4 week",
      courseEnrolledCount: 3300,
      language: "English, Hindi, Hinglish",
      lectureCount: 30,
      courseEnrollment:true,
      aboutCourse: [
        {
          imageSrc: "abc",
          serviceName: "Mode of the Course LIVE + Recordings",
        },
        {
          imageSrc: "abc",
          serviceName: "No. Of Lectures 60 LIVE lectures + Recordings",
        },
        {
          imageSrc: "abc",
          serviceName: "Class Recording Provided Yes [HD Quality]",
        },
        {
          imageSrc: "abc",
          serviceName: "Course Validity 2.5 Years",
        },
        {
          imageSrc: "abc",
          serviceName: "Class starts on 11st November, 2023",
        },
        {
          imageSrc: "abc",
          serviceName: "Class Timings 9pm - 11pm",
        },
        {
          imageSrc: "abc",
          serviceName:
            "Class Schedule LIVE [Monday, Wednesday, Sunday] + Recorded [Friday]",
        },
      ],
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
      courseDuration: "Course Duration 4 week",
      courseEnrolledCount: 2400,
      language: "English, Hindi, Hinglish",
      lectureCount: 29,
      courseEnrollment:true,
      aboutCourse: [
        {
          imageSrc: "abc",
          serviceName: "Mode of the Course LIVE + Recordings",
        },
        {
          imageSrc: "abc",
          serviceName: "No. Of Lectures 60 LIVE lectures + Recordings",
        },
        {
          imageSrc: "abc",
          serviceName: "Class Recording Provided Yes [HD Quality]",
        },
        {
          imageSrc: "abc",
          serviceName: "Course Validity 2 Years",
        },
        {
          imageSrc: "abc",
          serviceName: "Class starts on 31st January, 2024",
        },
        {
          imageSrc: "abc",
          serviceName: "Class Timings 9pm - 11pm",
        },
        {
          imageSrc: "abc",
          serviceName:
            "Class Schedule LIVE [Monday, Wednesday, Sunday] + Recorded [Friday]",
        },
      ],
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
      language: "English, Hindi, Hinglish",
      lectureCount: 50,
      courseEnrollment:false,
      aboutCourse: [
        {
          imageSrc: "abc",
          serviceName: "Mode of the Course LIVE + Recordings",
        },
        {
          imageSrc: "abc",
          serviceName: "No. Of Lectures 60 LIVE lectures + Recordings",
        },
        {
          imageSrc: "abc",
          serviceName: "Class Recording Provided Yes [HD Quality]",
        },
        {
          imageSrc: "abc",
          serviceName: "Course Validity 1 Years",
        },
        {
          imageSrc: "abc",
          serviceName: "Class starts on 20th September, 2023",
        },
        {
          imageSrc: "abc",
          serviceName: "Class Timings 9pm - 11pm",
        },
        {
          imageSrc: "abc",
          serviceName:
            "Class Schedule LIVE [Monday, Wednesday, Sunday] + Recorded [Friday]",
        },
      ],
    },
  ];
  const { courseId } = useParams();
  console.log(courseId);
  let dataOne = courseData.filter((course) => {
    return course.courseId === parseInt(courseId);
  });
  console.log(dataOne.length);
  return (
    // bg-gradient-to-b from-[#2b3782] to-[#3c0084]
    <div className="dark:bg-black dark:text-white px-[5%] mt-[10vh]">
      <div className="w-full dark:bg-[#19191A] px-4 sm:px-10 xl:px-0 z-10 ">
        <div className="mx-auto pt-5 sm:pt-10 pb-20 px-2">
          <div className="paths sm:flex hidden items-start gap-[0.375rem] text-base">
            <div className="path flex items-center gap-1">
              <Link to={"/"}>Home</Link>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-5 h-5 fill-black dark:fill-white rotate-180 "
              >
                <path
                  d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="path flex items-center gap-1">
              <Link to={"/courses"}>Courses</Link>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-5 h-5 fill-black dark:fill-white rotate-180"
              >
                <path
                  d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="path flex items-center gap-1">
              <Link to={`/courses/${dataOne[0].courseId}`}>
                {dataOne[0].courseName}
              </Link>{" "}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-5 h-5 fill-black dark:fill-white rotate-180"
              >
                <path
                  d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg> */}
            </div>
          </div>
          <div className="2xl:relative grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-0 ">
            <div className="flex flex-col gap-3 place-self-start sm:mt-7 xl:min-w-[710px] dark:text-white">
              <p>{dataOne[0].courseEnrolledCount}, already enrolled</p>
              <h2 className="text-[2rem] font-semibold">{dataOne[0].courseName}</h2>
              <p className="text-lg font-medium">
                {dataOne[0].courseDuration}
              </p>
              <div className="flex items-center gap-4 text-base font-medium flex-wrap">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 "
                    fill="green"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
                  </svg>
                  <p className="flex text-green-600 justify-center items-center">
                    {dataOne[0].lectureCount}
                    <span>+ Lectures</span>
                  </p>
                </div>
                <div className="h-3 w-[1px] bg-neutral-500"></div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="Blue"
                    viewBox="0 0 18 18"
                    class="w-5 h-5 fill-pictonBlue-500"
                  >
                    <path d="M9 1.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15m1.262 10.462c-.822.05-1.702.05-2.524 0 .101.59.231 1.12.383 1.574.189.567.397.972.592 1.22.066.083.167.244.288.244.11-.01.227-.17.286-.245.195-.247.403-.652.592-1.22.152-.452.282-.983.383-1.573m4.373-.896a8 8 0 0 1-.625.236c-.64.214-1.386.384-2.205.503-.119.82-.29 1.566-.502 2.205a8 8 0 0 1-.237.625 6.02 6.02 0 0 0 3.569-3.569m-11.27 0a6.02 6.02 0 0 0 3.569 3.569 8 8 0 0 1-.237-.625 13 13 0 0 1-.502-2.205c-.82-.119-1.566-.29-2.205-.502a8 8 0 0 1-.625-.237m4.189-3.512c-.073.962-.073 1.93 0 2.892.962.073 1.93.073 2.892 0 .073-.962.073-1.93 0-2.892a19 19 0 0 0-2.892 0m4.408.184c.05.822.05 1.702 0 2.524.59-.101 1.12-.231 1.574-.383.567-.189.972-.397 1.22-.592.082-.065.244-.168.244-.288-.01-.11-.17-.227-.245-.286-.247-.195-.652-.403-1.22-.592a11 11 0 0 0-1.573-.383m-5.924 0c-.59.102-1.12.231-1.574.383-.567.189-.972.397-1.22.592-.179.142-.234.25-.242.276-.034.112.172.242.243.298.247.195.652.403 1.22.592.452.152.983.282 1.573.383-.05-.822-.05-1.702 0-2.524m.896-4.373a6.02 6.02 0 0 0-3.569 3.569q.299-.128.625-.237c.64-.213 1.386-.383 2.205-.502.119-.82.29-1.566.502-2.205q.11-.326.237-.625m4.132 0q.128.299.236.625c.214.64.384 1.386.503 2.205.82.119 1.566.29 2.205.502q.326.109.625.237a6.02 6.02 0 0 0-3.569-3.569M9 3c-.104 0-.234.177-.287.245-.195.247-.403.652-.592 1.22a11 11 0 0 0-.383 1.573c.822-.05 1.702-.05 2.524 0-.101-.59-.231-1.12-.383-1.574-.189-.567-.397-.972-.592-1.22C9.234 3.178 9.104 3 9 3"></path>
                  </svg>
                  <p className=" text-blue-500">{dataOne[0].language}</p>
                </div>
                <div className="h-3 w-[1px] bg-neutral-500"></div>
                <div className="flex items-center gap-2">
                  <p className=" text-orange-500">{dataOne[0].courseRating}</p>
                  <div className="flex gap-1">
                    <svg
                      className="w-4 h-4 text-orange-400 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-orange-400 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-orange-400 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-orange-400 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-4 h-4 text-orange-400 mr-1"
                      fill="currentColor"
                    >
                      <path d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full min-h-[200px] px-2 sm:px-8 ">
              <div className="lg:absolute rounded-2xl p-4 sm:p-8 -bottom-[550px] right-[1rem] min-h-[600px] max-w-[423px] mx-auto lg:translate-y-0 translate-y-10 flex flex-col gap-4 dark:bg-[#19191A] border-[rgba(255,255,255,0.10)] border shadow-md shadow-grey-100 backdrop-blur-md z-10">
                <img
                  src={dataOne[0].thumbnail}
                  alt="course Thumbnail"
                  className="md:max-w-full w-[400px] min-h-[180px] rounded-2xl overflow-hidden object-cover"
                />
                <div className="flex flex-col gap-y-4 mt-4">
                  <div className="coursePrice flex gap-5">
                    <span className=" text-indigo-500 text-2xl font-bold">
                      ₹{dataOne[0].coursePrice}
                    </span>
                    <span className="deleted-price text-2xl dark:text-slate-400 font-bold">
                      <del>₹{dataOne[0].courseDeletedPrice}</del>
                    </span>
                    {/* <p>₹ {dataOne[0].coursePrice} &nbsp; <span>₹ {dataOne[0].courseDeletedPrice}</span></p> */}
                  </div>
                  <div className="courseDetail">
                    <p className="font-semibold text-xl mb-4">
                      This Course Includes :
                    </p>
                    <div className="flex flex-col gap-3">
                      <p>✔️ No Pre-requisite Required </p>
                      <p>✔️ 170+ hours On-Demand Video</p>
                      <p>✔️ with Doubt Assistance</p>
                    </div>
                  </div>
                  <div className="course-buy-btn flex items-center gap-4 self-stretch flex-col-reverse sm:flex-row sm:items-start">
                    {
                        dataOne[0].courseEnrollment?(<button className="w-full text-center p-3 rounded-btn text-white h-auto bg-indigo-600 hover:bg-indigo-700">
                        Buy Now
                      </button>):(<button disabled className="w-full text-center p-3 rounded-btn text-white h-auto bg-indigo-600 hover:bg-indigo-700">
                      Enrollment Closed
                    </button>)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <h1>course Details</h1> */}
        {/* <h2>{dataOne[0] ? dataOne[0].courseName : ""}</h2> */}
      </div>
      <div className="mx-auto max-w-maxScreen flex pt-4 px-4 sm:px-10 xl:px-0">
        <div className="w-full lg:max-w-[700px] flex flex-col gap-y-10 items-start">
          <div className="about-course bg-slate-200 dark:bg-[#19191A] shadow-md shadow-grey-100 dark:shadow-green-400 px-2">
            <h1 className=" text-3xl">About Course</h1>
            <h1>{dataOne[0] ? dataOne[0].courseName : ""}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              minus est maxime. Fugiat hic quo animi blanditiis saepe velit
              quasi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              aliquam illum fugiat, nisi, recusandae vitae quaerat similique
              porro sapiente sunt libero vel distinctio nesciunt doloremque.
              Excepturi tenetur culpa fugit ex vero, aliquam, perferendis
              consequuntur, labore veritatis impedit illum facilis qui!
            </p>
            <p></p>
          </div>
          <div className="course-mode w-full p-5 grid grid-cols-1 sm:grid-cols-2 place-content-start sm:place-content-center place-items-start border-[rgba(255,255,255,0.10)] border rounded-lg bg-slate-200 dark:bg-[#19191A] gap-x-4 gap-y-8">
            {
                dataOne[0].aboutCourse.map((courseService)=>{
                    return (<div className="flex flex-row gap-x-3 items-center">
                    <div className="image flex p-4 justify-center items-center rounded-full border border-neutral-800 bg-neutral-9">
                      {/* <img src={courseService.imageSrc} alt="" /> */}
                      <img src="h" alt="" />
                    </div>
                    <p>{courseService.serviceName}</p>
                  </div>);
                })
            }
            {/* <div className="flex flex-row gap-x-3 items-center">
              <div className="image flex p-4 justify-center items-center rounded-full border border-neutral-800 bg-neutral-900">
                image here
              </div>
              <p>Lorem, ipsum.</p>
            </div>
            <div className="flex flex-row gap-x-3 items-center">
              <div className="image flex p-4 justify-center items-center rounded-full border border-neutral-8 bg-neutral-9">
                image here
              </div>
              <p>Lorem, ipsum.</p>
            </div>
            <div className="flex flex-row gap-x-3 items-center">
              <div className="image flex p-4 justify-center items-center rounded-full border border-neutral-8 bg-neutral-9">
                image here
              </div>
              <p>Lorem, ipsum.</p>
            </div> */}
          </div>
          <div className="course-include w-full flex flex-col gap-y-6 items-start">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-3xl font-medium">This Course Includes</h2>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, quia illo. Nisi quam, aut dolore et quo dolorum
                nostrum. Sunt.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[500px] px-8 hidden lg:flex"></div>
      </div>
      <div className=" pt-5 pb-5">
        <h1 className=" text-2xl mb-4">
          Why people choose this course for their career
        </h1>
        <div className="flex justify-evenly items-center flex-wrap w-full ">
          {feedBack.map((data) => {
            return (
              <div className=" lg:w-1/5 border rounded-xl h-60 md:w-1/2 bg-slate-200 dark:bg-[#19191A] border-[rgba(255,255,255,0.10)] ">
                <div className="heading-part flex gap-3 p-4">
                  <img
                    className=" rounded-[50%] object-cover"
                    src={data.thumbnail}
                    alt="user-Image"
                  />
                  <div className="user-data flex flex-col px-3">
                    <h1>{data.username}</h1>
                    <p>{data.learner}</p>
                  </div>
                </div>
                <div className="message-part px-3">
                  <p className=" gap-3">"{data.message}"</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
