import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Error from './pages/Error'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import AccountLayout from './layout/AccountLayout'
import Dashboard from './components/Dashboard'
import Others from './components/Others'
import Donwloads from './components/Donwloads'
import Addresses from './components/Addresses'
import Accountdetails from './components/Accountdetails'
import Logout from './components/Logout'
import Productdetails from './pages/Productdetails'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contacts/>} />
        <Route path='productdetails' element={<Productdetails/>} />
        <Route path='account' element={<AccountLayout />}>
          <Route index element={<Dashboard/>} />
          <Route path='others' element={<Others/>} />
          <Route path='donwloads' element={<Donwloads/>} />
          <Route path='addresses' element={<Addresses/>} />
          <Route path='accountdetails' element={<Accountdetails/>} />
          <Route path='logout' element={<Logout/>} />
        </Route>
        <Route path='signup' element={<Signup/>} />
        <Route path='login' element={<Login/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='*' element={<Error/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
