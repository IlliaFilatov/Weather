import React from 'react'
import axios from 'axios'

axios.get('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
