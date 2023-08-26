/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
const App = () => {
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