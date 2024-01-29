import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [data, setData] = useState(0);

     function getTmdb() {
         fetch('https://api.themoviedb.org/3/discover/movie?api_key=03209f50e8253cf416b595048aced2ff')
             .then(res => res.json())
            .then(json => {
                setData(json['results'][0]);
            })
    }

  return (
    <>
      <div>
          {data ? <img src={"https://image.tmdb.org/t/p/w1280" + data['backdrop_path']} alt="backdrop" className="frame"/> : ""}
          <p>{data ? JSON.stringify(data, null, 2) : "Loading..."}</p>
      </div>

      <div className="card">
        <button onClick={() => getTmdb()}>
          Click here
        </button>
      </div>

    </>
  )
}

export default App
