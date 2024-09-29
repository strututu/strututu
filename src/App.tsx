import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const routes = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />} />)
);

const App = () => {
  useEffect(() => {
    document.title = "Strututu";
    AOS.init();
  }, []);
  return <RouterProvider router={routes} />;
};

export default App;
