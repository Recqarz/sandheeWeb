import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePages from './components/HomePages';
import Mediation from './components/Mediation/Mediation';
import Conciliation from './components/Conciliation/Conciliation';
import AboutUs from './components/About/AboutUs';
import Arbitration from './components/Arbitration/Arbitration';
import Layout from './components/Layout'; // Import Layout component
import Location from './components/Location/Location';
import ErrorPage from './components/Error/ErrorPage';
import ArbitrationRules from './components/ArbitrationRules/ArbitrationRules';
import Contact from './components/Contact/Contact';
import MediationRules from './components/MediationRules/MediationRules';

// Create the router using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePages /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "arbitration", element: <HomePages /> },
      {
        path: "arbitration/whatIsArbiration",
        element: <Arbitration />,
      },
      {
        path: "arbitration/arbitration-rules",
        element: <ArbitrationRules />,
      },
      { path: "mediation", element: <Mediation /> },
      // {
      //   path: "mediation/whatIsMediation",
      //   element: <Mediation />,
      // },
      // {
      //   path: "mediation/mediation-rules",
      //   element: <MediationRules />,
      // },
      { path: "conciliation", element: <Conciliation /> },
      { path: "location", element: <Location /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
