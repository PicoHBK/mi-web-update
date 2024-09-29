import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "@/pages/components/Header";
import Home from "@/pages/Home/Home";
import About from "@/pages/About";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <h1>ERROR</h1>,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <h1>ERROR</h1>,
      },
    ],
  },
]);

function RoutesWeb() {
    return (
      <RouterProvider router={routers} />
    )
  }
  
  export default RoutesWeb