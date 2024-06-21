import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <nav  className='header1'>
            <ul className='nav'>
                <li className='logo'>
                    <img src={logo}></img>
                    <div style={{padding:"6px"}}></div>
                    <div className='header'>Organic Fresh</div>
                </li>
                <div style={{padding:"200px"}}></div>
                <li className='topl'><b>Pristine</b></li>
                <li className='topl'><b>Groceries</b></li>
                <li className='topl'><b>Frozen</b></li>
                
                <li className='topl'><b>About us</b></li>
                <li className='topl'><b>Home</b></li>
                <button  onClick={ToggleTheme} className='button'>{theme}</button>
            </ul>
        </nav>
  )
}
