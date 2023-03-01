import getData from "./getFormdata"
const Form=()=>{
    const onSubmit=(e)=>{
        e.preventDefault()
        const {isEmpty,data} = getData(e.currentTarget)
        if(isEmpty){
            alert('Value is missing, please check')
        }
        console.log(data)
    }
    return<div className="patient-booking-form">

    <form className="patient-form" onSubmit={onSubmit}>
        <label htmlFor="name" >Full Name</label>
        <input type='text' id="name" placeholder="Full Name" name="name"></input>
        <label htmlFor="email">Email</label>
        <input type='text' id="email" placeholder="Email" name="email"></input>
        <label htmlFor="number">Number</label>
        <input type='tel' id="number" placeholder="Number" name="number"></input>
        <label htmlFor="specialty">Specialty</label>
        <select name="specialty" id="specialty">
            <option value='Ortho'>Ortho</option>
            <option value='Heart'>Heart</option>
            <option value='Dental'>Dental</option>
            <option value='General'>General</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <input type='text' name="comment" id="comment" placeholder="comment"></input>
        <button className="btn form-btn">Book an appointment</button>
    </form>
    </div> 
}
export default Form