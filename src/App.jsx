import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./HomePage/HomePage"
import Doctor from "./Doctor"
import Patient from "./Patient"
import Login from './Patient/register/login'

const App=()=>{
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/patient" element={<Patient/>}/>
        <Route path="/patient/login" element={<Login/>} />  
    </Routes>
    </BrowserRouter>
}
export default App