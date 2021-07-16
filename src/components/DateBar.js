import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'
import styled from 'styled-components'

const StyledDateBar = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: blue;
  h4{
      font-size: 2rem;
  }
` 
    
export default function DateBar(props) {
    const { dateHeader, dateAPI, apodData } = props
    
    
    return (
      <StyledDateBar className='container'>
          <button>Previous Day</button>
          <h4>{dateHeader}</h4>
          <button>Next Day</button>
      </StyledDateBar>
    )
  }