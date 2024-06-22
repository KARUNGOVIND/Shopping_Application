import React, { useEffect, useState } from 'react'
import Products from './components/Products'
import logo from './components/imagesheader/logo.png'
import './App.css'
import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import Cart from './Cardpage/Cart';
import { Link } from 'react-router-dom';


function App() {

  const [theme, Settheme] = useState('Dark');
  //no Dependency Array

  useEffect(() => { document.body.className = theme }, [theme])

  function ToggleTheme() {
    Settheme(theme === 'Light' ? 'Dark' : 'Light');
  }

  const itemsval=useSelector((state)=>state.cart.items)

  return (
    <div>
      <nav  className='header1'>
            <ul className='nav'>
                <li className='logo'>
                    <img src={logo}></img>
                    <div style={{padding:"6px"}}></div>
                    <div className='header'>ZipKart</div>
                </li>
                <div style={{padding:"350px"}}></div>
                
                <li className='topl'><Link to='/Products'><b>Shopfy</b></Link></li>
                
                <li className='topl'><Link to='/About'><b>About us</b></Link></li>
                <li className='topl' ><Link to='/'><b>Home</b></Link></li>
                <li className='topl'><button  onClick={ToggleTheme} className='button'>{theme}</button></li>
                <li className='topl'><Link to='/Cart'>Cart : {itemsval.length}</Link></li>
            </ul>
        </nav>

    </div>
  )
}

export default App
