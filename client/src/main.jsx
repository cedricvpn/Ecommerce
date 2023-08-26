import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Home from "./components/Home.jsx"
import Menu from "./components/Menu.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Login from './Pages/Login.jsx'
import NewProduct from './Pages/NewProduct.jsx'
import Signup from './Pages/Signup.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/index.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='menu' element={<Menu/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='newProduct' element={<NewProduct/>}/>
      <Route path='signup' element={<Signup/>}/>



    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <ToastContainer 
  position="top-center"
  autoClose={2000} // Durée d'affichage en millisecondes
  hideProgressBar
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover/>
  <Provider store={store}>
    <RouterProvider router={router}>
    <App/>
  </RouterProvider> 
  </Provider>
  
  </>
)
