import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BASE_URL, API_KEY } from '../constants'
import DateBar from './DateBar'
import Image from './Image'
import LearnMore from './LearnMore'
import styled from 'styled-components'

const StyledApp = styled.div `
  .header h1{
    font-size: 3rem;
    text-align: center;
  }
  .header h4{
    text-align: center;
    font-size: 1.2rem;
  }
` 

export default function App() {
  
  let today = new Date()
  let dd = String(today.getDate());
  let ddPadded = String(today.getDate()).padStart(2, '0');
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  let month = String(monthNames[today.getMonth()]);
  let mmPadded = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  let todayHeader = `${month} ${dd}, ${yyyy}`
  let todayAPI = `${yyyy}-${mmPadded}-${ddPadded}`

  const [dateHeader, setDateHeader] = useState(todayHeader)
  const [dateAPI, setDateAPI] = useState(todayAPI)
  const [apodData, setApodData] = useState({})
  
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${dateAPI}`)
      .then(res => {
        console.log(res.data)
        setApodData(res.data)
      })
      .catch(err => console.log(err))
  }, [dateAPI])

  return (
    <StyledApp className="App">
      <header className="header">
        <h1>Astronomy Photo of the Day</h1>
        <h4>A NASA APOD Viewer by Andrew Schaer</h4>
      </header>
      <DateBar dateHeader={dateHeader} dateAPI={dateAPI} apodData={apodData} />
      <Image dateHeader={dateHeader} apodData={apodData} />
    </StyledApp>
  );
}
