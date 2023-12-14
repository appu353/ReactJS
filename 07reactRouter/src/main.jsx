import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/GitHub/Github.jsx";
import Layout from "./Layout.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx";

//One way
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

//Another way:-
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      {/* How to take dyanmic value form url :-userid */}
      <Route path="user/:userid" element={<User />} />

      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
//RouterProvider needs one prop, without it it won't work.it is kind of wrapper.
//Two ways of creating router:-
//We have to import one method createBrowserRouter which is coming from react-router-dom.

//There is another way of routing which is easy to use
//path="user/:userid" userid will be accessible in User Component.

//On the top instead of importing each an devry componenet seperately, we can put all in one page index.js and
// after doing that we have to import just one single page

//Loader:-If we will use loader, once page is redirected to Github, Api will be called immediately after page load even before useEffect.
//  <Route path="contact" element={<Contact />} />
//   <Route
//   path="dashboard"
//   element={<Dashboard />}
//   loader={({ request }) =>
//     fetch("/api/dashboard.json", {
//       signal: request.signal,
//     })
//   }
// />
//We can fire callback and use fetch directly to call API in loader.

//We can directly call method.

// <Route element={<AuthLayout />}>
//   <Route
//     path="login"
//     element={<Login />}
//     loader={redirectIfUser}
//   />

//Nesting of about, expected route:-/about/aparna
//If we want that router should appear as written  then we have to close it first and inside that we can write:-
//<Route path="about" element={<About />} />
//<Route path="aparna"/>
//</Route>
