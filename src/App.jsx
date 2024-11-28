
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Pages from './components/Pages'
import DirectionalIndicator from './components/DirectionalIndicator/DirectionalIndicator'
import About from './components/About/About'

function App() {

  return (
    <BrowserRouter>
    <Pages/>
    {/* <DirectionalIndicator/> */}
    {/* <About/> */}
    </BrowserRouter>
  )
}

export default App
