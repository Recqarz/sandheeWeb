
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Pages from './components/Pages'
import ArbitrationCard from './components/ArbitrationCard/ArbitrationCard'
import Mediation from './components/Mediation/Mediation'
import Conciliation from './components/Conciliation/Conciliation'
import ComplaintForm from './components/ComplaintForm/ComplaintForm'
import UserDetailsForm from './components/UserDetailsForm/UserDetailsForm'
import DefaulterDetails from './components/DefaulterDetails/DefaulterDetails'

function App() {

  return (
    <BrowserRouter>
      {/* <Pages/> */}
      {/* <ArbitrationCard /> */}
      {/* <Mediation/> */}
      {/* <Conciliation/> */}
      {/* <UserDetailsForm/> */}

      {/* <ComplaintForm/>  */}
      <DefaulterDetails/> 
    </BrowserRouter>
  )
}

export default App
