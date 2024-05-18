import {createBrowserRouter} from "react-router-dom"
import HomePage from "../pages/HomePage";
import CountryDetailPage from "../pages/CountryDetailPage";

const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/:name', element: <CountryDetailPage />}
]);

export default router;