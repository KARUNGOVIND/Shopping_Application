import React, { useEffect, useState } from 'react'
import Products from './components/Products'
import logo from './components/imagesheader/logo.png'
import './App.css'


function App() {

  const [theme, Settheme] = useState('Dark');
  //no Dependency Array

  useEffect(() => { document.body.className = theme }, [theme])

  function ToggleTheme() {
    Settheme(theme === 'Light' ? 'Dark' : 'Light');
  }

  return (
    <div>
      <nav  className='header1'>
            <ul className='nav'>
                <li className='logo'>
                    <img src={logo}></img>
                    <div style={{padding:"6px"}}></div>
                    <div className='header'>ZipKart</div>
                </li>
                <div style={{padding:"200px"}}></div>
                <li className='topl'><b>Pristine</b></li>
                <li className='topl'><b>Shppyfy</b></li>
                <li className='topl'><b>Frozen</b></li>
                
                <li className='topl'><b>About us</b></li>
                <li className='topl'><b>Home</b></li>
                <li className='topl'><button  onClick={ToggleTheme} className='button'>{theme}</button></li>
            </ul>
        </nav>
        <Products/>

    </div>
  )
}

export default App
