const Component=()=>{
    return <div className="doctor-register-login-form">
        <h1>Doctor Login</h1>
        <form className="patient-register-form-main">
        <label htmlFor="email">Email</label>
        <input type='text' id="email" placeholder="Email" name="email"></input>
        <label htmlFor="password" >Password</label>
        <input type='password' id="password" placeholder="Password" name="password"></input>
        <button type="submit" className="btn">Login</button>
    </form>
    </div>
}
export default Component