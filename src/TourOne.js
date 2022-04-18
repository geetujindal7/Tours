import React,{useState} from 'react'

function TourOne(props) {
    const [read, setRead] = useState(false)
    console.log(props)
  return (
     <>
     <div className="single-tour">
         <img  src={props.image} alt=""/>
         <div style={{display:"flex"}}>
         <p className="name">{props.name}</p>
         <h4 className="price">${props.price}</h4>
         </div>
         <div>
             <p className="infoo">{read ? props.info : `${props.info.substring(0,200)}...`}<button onClick={() => setRead(!read)}>{!read ? "Read More" :  "Show Less"}</button></p>
         </div>
         <button className="tour_button" onClick={() => props.remove(props.id)}>Not Interested</button>
         </div>
     </>
    
  )
}

export default TourOne
