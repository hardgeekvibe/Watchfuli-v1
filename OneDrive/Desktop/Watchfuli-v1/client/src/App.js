import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicRoute from './views/Routes/PublicRoutes'
import PrivateRoute from './views/Routes/PrivateRoutes'
import Landing from './views/Public/Landing'
import Home from './views/Private/Home'
import Navbar from './components/blockComponents/Navbar'
import Footer from './components/blockComponents/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/' element={<Landing />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App