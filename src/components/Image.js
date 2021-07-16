import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'

const StyledImage = styled.div `
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
      max-width: 50%;
  }
` 
    
export default function Image(props) {
    const { dateHeader, apodData } = props
    return (
      <StyledImage className='container'>
          <h2>{apodData.title}</h2>
          <img src={apodData.url} alt={`${dateHeader} NASA Astronomy Photo of the Day - Titled ${apodData.title}`}></img>
          <button>Learn More About This Image</button>
      </StyledImage>
    )
  }
