import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import SearchMovie from "./SearchMovie";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login /> 
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
            path: '/search-movie',
            element: <SearchMovie />
        },
    ]);

    return(
        <RouterProvider router={appRouter} />
    )
}

export default Body;