import { createBrowserRouter } from "react-router-dom";
import App from "../App";  // Make sure to import App component
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: < App/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    }
]);

export default router;
