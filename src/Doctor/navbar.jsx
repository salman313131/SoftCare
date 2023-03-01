import { useState } from "react"

const Navbar=()=>{
    const [isValue,setIsValue] = useState('')
    return <nav className="navbar-container">
        <h1 className="logo">CARE <span>SOFT</span></h1>
        <input id="search" name="search" value={isValue} placeholder="search doctor"
        onChange={(e)=>setIsValue(e.target.value)}></input>
    </nav>
}
export default Navbar