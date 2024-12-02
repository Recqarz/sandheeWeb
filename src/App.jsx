import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePages from './components/HomePages';
import ArbitrationCard from './components/ArbitrationCard/ArbitrationCard';
import Mediation from './components/Mediation/Mediation';
import Conciliation from './components/Conciliation/Conciliation';
import ComplaintForm from './components/ComplaintForm/ComplaintForm';
import UserDetailsForm from './components/UserDetailsForm/UserDetailsForm';
import DefaulterDetails from './components/DefaulterDetails/DefaulterDetails';
import About from './components/About/About';
import AboutUs from './components/About/AboutUs';
import Arbitration from './components/Arbitration/Arbitration';
import Layout from './components/Layout'; // Import Layout component

// Create the router using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePages /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "arbitration", element: <Arbitration /> },
      { path: "mediation", element: <Mediation /> },
      { path: "conciliation", element: <Conciliation /> },
      { path: "complaint-form", element: <ComplaintForm /> },
      { path: "user-details", element: <UserDetailsForm /> },
      { path: "defaulter-details", element: <DefaulterDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
