import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/home/Home.jsx";
import Contact from "./components/contact/Contact.jsx";
import Course from "./components/course/Course.jsx";
import CourseDetail from "./components/course/CourseDetail.jsx";
import Article from "./components/article/Article.jsx";
import Login from "./components/login/Login.jsx";
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}>
      </Route>
      <Route path="/:courseId" element={<CourseDetail />} />
      <Route path="courses/" id="courses" element={<Course />}>
        
      </Route>
      <Route path="courses/:courseId" element={<CourseDetail />} />
      <Route path="article" element={<Article/>} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login/>}/>
      <Route path="*" element={<div>Not Found</div>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
