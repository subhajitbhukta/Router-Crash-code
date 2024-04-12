import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import Home from "./components/Home/Home";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Root/>,
//     children:[
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
 
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
