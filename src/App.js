
import { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitute, setLongitute] = useState(0)
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        setLatitude(position.coords.latitude)
        setLongitute(position.coords.longitude)
        setisLoading(false)

      }, (error) => {
        console.log(error)
        alert("Paikannus epäonnistui!")
      })
    }
    else {
      alert("Selaimesi ei tue paikannusta!")
    }
  }, [])

  if (isLoading) {
    return <p> Ladataan sijaintia...</p>
  }
  else {


    return (
      <div>
        <h3>Sijaintisi</h3>
        <p> Position:&nbsp;
          {latitude},
        {longitute}</p>
        <Weather latitude={latitude} longitute={longitute}/>
      </div>
    );
  }
}

export default App;
