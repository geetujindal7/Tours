import './App.css';
import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Tour from './Tour';


function App() {
  const url = "https://course-api.com/react-tours-project";

  
  const [loading, setLoading] = useState(true)
  const [tour, settour] = useState([])

  const remove = (id) => 
  {
      const  newT  = tour.filter((e) => e.id !== id)
      settour(newT)
  }

  const tours = async () =>
  {
    const resp = await fetch(url)
    const tour = await resp.json();
    setLoading(false)
    settour(tour)
    console.log(tour)
  }

  useEffect(() => {
    return () => {
     tours();
    }
  }, [])

  if(loading)
  {
    return(
      <>
        <main>
        <Loading />
        </main>
      </>
    )
  }
  if(tour.length === 0)
  {
    console.log(tour)
    return(
      <main>
       <button className="refresh" onClick={()=> tours()}>Refresh</button>
      </main>
    )
  }
  else{
  return (
    <>
      <Tour tour={tour} remove = {remove}/>
    </>
  );
  }
}

export default App;
