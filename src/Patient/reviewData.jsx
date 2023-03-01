import {data} from  './data'
const Review=()=>{
return<div className='patient-review'>
    {data.map((person)=>{
        return<div key={person.id} className='patient-review-main'>
            <div className='patient-review-header'>
                <img src={person.img}></img>
                <h3>{person.name.toUpperCase()}</h3>
            </div>
            <p>{person.comment}</p>
        </div>
    })}
</div>
}
export default Review