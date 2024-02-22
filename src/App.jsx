import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signin from "./pages/Signin";
import FarmerData from "./pages/farmerdata/FarmerData";
import Dashboard from "./pages/Dashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Signin />} />
        <Route exact path="formdata" element={<FarmerData />} />
        <Route exact path="dashboard" element={<Dashboard />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
