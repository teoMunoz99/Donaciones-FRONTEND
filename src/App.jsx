import Donar from "./components/pages/Donar"
import Inicio from "./components/pages/Inicio"
import Error404 from "./components/pages/Error404"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/donar" element={<Donar/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
