
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
    <div className="container">
      <div className="row mt-5">
        {series.map((series,index)=>(
          <div key={index}className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{minWidth:"200px"}}>
              <img src={series.attributes.posterImage.small} alt="lo"/>
              <div className="card-body">
                <h5 className="card-title"> titles:{series.titles}</h5>
                <hr/>
                <p className="text-dark"> CreatedAt: {series.attributes.createdAt}</p>
                <p className="text-dark"> Id: {series.id}</p>
              </div>
            </div>
          </div>
        ))}   
      </div>
      
    </div>
    </>
  );

}
export default App;
