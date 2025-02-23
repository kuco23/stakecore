import { createHashRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Service from "../pages/service";
import SingleProject from "../pages/single-project";
import Performance from "../pages/performance";


export const router = createHashRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
            /* {
                path: "/service",
                element: <Service />
            }, */
            {
                path: "/single-project",
                element: <SingleProject />
            },
            {
                path: "/performance",
                element: <Performance />
            },
        ]
    }
])