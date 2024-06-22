import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './components/store.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter.jsx'
import About from './components/About.jsx'
import Cart from './Cardpage/Cart.jsx'
import Products from './components/Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Products' element={<Products/>}/>
        </Routes>

      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
