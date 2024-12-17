import React from 'react'
import Logo from '../assets/Logo.png'
import Header from './Header'
import Category from './Category'

const Navbar = () => {
  return (
    <>
      
    {/* Header Part Start */}
    <Header
      imgSrc={Logo}
      imgAlt={Logo}
      menuone={'Home'} 
      menutwo={'Shop'} 
      menuthree={'About'} 
      menufour={'Contacts'}
    />
    {/* Header Part End */}

    
    {/* Category Part Start */}
    <Category
      paraOne={'Shop by Category'}
      paraTwo={'Accessories'}
      paraThree={'Furniture'}
      paraFour={'Electronics'}
      paraFive={'Clothes'}
      paraSix={'Bags'}
      paraSeven={'Home Appliance'}
    />
    {/* Category Part End */}
    </>
    
    
  )
}

export default Navbar