import React from 'react'
import Header from './components/Header';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from './Pages/Home';

const App = () => {

  const isAdminPath = useLocation().pathname.includes("/admin");
  return (
    <div>
      { !isAdminPath &&<Header/>}

      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>

      </div>
    </div>
  )
}

export default App
