import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'

export default function DateBar(props) {
    // const {  } = props
    // const [x, Setx] = useState(null)
  
    // useEffect(() => {
    //   axios.get(`${BASE_URL}/xyz/${API_KEY}`)
    //     .then(res => { setDetails(res.data) })
    //     .catch(err => { debugger }) // eslint-disable-line
    // }, [parameterforinfinateloop])
  
    // return (
    //   <StyledDetails className='container'>
    //     <h2>Details:</h2>
    //     {
    //       details &&
    //       <>
    //         <p>{details.name} is {details.age}</p>
    //         <p>email is {details.email}</p>
    //         {name} likes:
    //         <ul>
    //           {
    //             details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
    //           }
    //         </ul>
    //       </>
    //     }
    //     <button onClick={close}>Close</button>
    //   </StyledDetails>
    // )
  }