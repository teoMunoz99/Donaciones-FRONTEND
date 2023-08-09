import Donar from "./components/pages/Donar"
import Bienvenida from "./components/pages/Bienvenida"
import Error404 from "./components/pages/Error404"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida/>}/>
        <Route path="/donar" element={<Donar/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
