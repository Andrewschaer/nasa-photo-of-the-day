import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL, API_KEY } from '../constants'
import DateBar from './DateBar'
import Image from './Image'
import LearnMore from './LearnMore'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
