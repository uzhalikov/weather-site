import { useEffect, useState } from 'react'
import { Weather } from '../components/weather/Weather'
import styles from './App.module.css'

export default function App() {
  const [temp, setTemp] = useState()
  const [error, setError] =  useState()

  const KEY = 'YOUR API KEY'
  let searchParams = new URLSearchParams(location.href)

  let city = searchParams.get("city")
  if(!city){
    city = 'izhevsk'
    window.history.replaceState("", "", `?&city=${city}`)
  }

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?&key=${KEY}&q=${city.charAt(0).toUpperCase() + city.slice(1)}}`)
    .then(response => response.json())
    .then(result => result.error ? setError(result.error.message) : setTemp(result.current.temp_c))
  }, [city])

  return (
    <div className={styles.container}>
        {temp ? <Weather city={city.charAt(0).toUpperCase() + city.slice(1)} temperature={temp}/> : <div>{ error }</div>}
    </div>
  )
}
