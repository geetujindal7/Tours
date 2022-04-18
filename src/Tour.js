import React from 'react'
import TourOne from './TourOne'

function Tour(props) {

  
  
    return (
    <>
    <main>
    <div>
    <h1 className="heading">Our tours</h1>
       
    
    <div className="tours">
        {
            props.tour.map((e) => {
                return(
                    <>
                        <TourOne key={e.id} {...e} remove={props.remove}/>
                    </>
                )
            })
        }
    </div>
    </div>
    </main>
    </>
  )
}

export default Tour
