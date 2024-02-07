import { BrowserRouter, Routes,Route } from 'react-router-dom'
import {Feed,NavBar,Video} from './Components/'
import Search from './Components/Search/Search.jsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='Main-Section'> 
            <NavBar></NavBar>
            <Routes>
                <Route path='/' element={<Feed></Feed>} />
                <Route path='/Video/' element={<Video></Video>} />
                <Route path='/Search/' element={<Search></Search>} />
                <Route />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
