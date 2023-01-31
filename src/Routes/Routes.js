
import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../Components/Allusers/AllUsers";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import FrequentlyAsked from "../Components/FrequentlyAsked/FrequentlyAsked";
import Home from "../Components/Home/Home";
import Main from "../layouts/Main";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },{
                path:"/login",
                element:<Login></Login>
            },{
                path:"/register",
                element:<Register></Register>
            },{
                path:"/faq",
                element:<FrequentlyAsked></FrequentlyAsked>
            },{
                path:"/all-users-63d98fcbb1780a832bcf8fce",
                element:<AllUsers></AllUsers>
            }
        ]
    }
])