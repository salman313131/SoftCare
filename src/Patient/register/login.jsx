import { useState } from "react"
import getData from "../getFormdata"
const Login = () =>{
    const [isMember,setIsMember] = useState(false)
    const onSubmit=(e)=>{
        e.preventDefault()
        const {isEmpty,data} = getData(e.currentTarget)
        if(isEmpty){
            alert('Value is missing, please check')
        }
        console.log(data)
    }
    return <>
    <div className="patient-register-login-form">
    {isMember? <h1>Login</h1>: <h1>Register</h1>}
    {isMember?
    
    <form className="patient-register-form-main" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type='text' id="email" placeholder="Email" name="email"></input>
        <label htmlFor="password" >Password</label>
        <input type='password' id="password" placeholder="Password" name="password"></input>
        <button type="submit" className="btn">Login</button>
        <p>Not a member, <a href="#" onClick={()=>setIsMember(false)}>Register</a></p>
    </form>:

    <form className="patient-login-form-main" onSubmit={onSubmit}>
        <label htmlFor="name" >Full Name</label>
        <input type='text' id="name" placeholder="Full Name" name="name"></input>
        <label htmlFor="password" >Password</label>
        <input type='password' id="password" placeholder="Password" name="password"></input>
        <label htmlFor="email">Email</label>
        <input type='text' id="email" placeholder="Email" name="email"></input>
        <label htmlFor="number">Number</label>
        <input type='tel' id="number" placeholder="Number" name="number"></input>
        <button type="submit" className="btn">Register</button>
        <p>Already a member, <a href="#" onClick={()=>setIsMember(true)}>Login</a></p>
    </form>

    }
    </div>
    </>
}
export default Login
