
import Navegation from './components/Navegation';
import { useEffect, useState } from 'react';


function App() {

  const api = "https://kitsu.io/api/edge/trending/anime"

  const [series,setSeries]=useState([])

  function getSeries() {
    fetch(api)
    .then(res=>res.json())
    .then(response=>{
     const {data =[]} = response
     console.log(data)
     setSeries(data)
    })
  }
  

  useEffect(()=>{
    getSeries()

  },[])



  return (
    <>
    <Navegation/>
    <div>
      {series.map((series,index)=>
        <div>
          <h1 className="text">{series.titles}</h1>
          <img src={series.attributes.posterImage.small}alt="lo"/>
        </div>
      )}
      
    </div>
    </>
  );

}
export default App;
