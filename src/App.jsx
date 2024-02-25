import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signin from "./pages/Signin";
import FarmerData from "./pages/farmerdata/FarmerData";
import About from "./pages/About";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";
import Root from "./pages/routes/root";
import ErrorPage from "./error-page";
import Home from "./pages/routes/home";

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route index element={<Root />} />
  //       <Route exact path="formdata" element={<FarmerData />} />
  //       <Route exact path="dashboard" element={<Dashboard />} />
  //     </>
  //   )
  // );
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/formdata",
          element: <Form />,
        },
        {
          path: "/about",
          element: <About />,
        }
      ]
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
