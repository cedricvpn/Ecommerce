/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { productRedux } from './redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
const App = () => {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product)
  console.log(productData)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/product`);
        dispatch(productRedux(res.data));
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        // Considérez d'ajouter une gestion d'erreur plus conviviale ici
      }
    };

    fetchProducts();
  }, [dispatch]); 
  return (
    <div className=''>
      <Header/>
      <main className='pt-16 bg-slate-300 min-h-[calc(100vh)]'>
        <Outlet/>
      </main>

    </div>
  )
}

export default App