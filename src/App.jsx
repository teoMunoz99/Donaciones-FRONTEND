import Home from "./components/pages/Home"
import Welcome from "./components/pages/Welcome"
import Error404 from "./components/pages/Error404"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
