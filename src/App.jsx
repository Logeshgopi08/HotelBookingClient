import React from 'react'
import Header from './components/Header';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from './Pages/Home';
import Footer from './components/Footer';
import AllRooms from './Pages/AllRooms';
import RoomDetail from './Pages/RoomDetail';

const App = () => {

  const isAdminPath = useLocation().pathname.includes("/admin");
  return (
    <div>
      { !isAdminPath &&<Header/>}

      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
         <Route path='/room/:id' element={<RoomDetail/>}/>
        </Routes>
        

      </div>
       <Footer/>
    </div>
  )
}

export default App
