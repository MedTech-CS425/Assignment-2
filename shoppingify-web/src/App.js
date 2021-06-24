import Auth from './pages/auth/Auth'
import './App.css'
import Home from './pages/home/Home'
import { useState } from 'react'

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false)

  let page = <Home />
  if(!isLoggedIn){
    page = <Auth setIsLoggedIn={setIsLoggedIn}/>
  }

  return <> {page} </>
}

export default App;
