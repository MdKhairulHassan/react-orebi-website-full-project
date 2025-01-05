import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Menu from '../components/Menu'
import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom'
import { useState} from 'react'
import { FaSearch } from 'react-icons/fa'

const Header = ({ imgSrc, imgAlt, menuone, menutwo, menuthree, menufour }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  
  const navigate = useNavigate();

  return (
    
    <>
      {/* Header Logo with Menu Start */}
      <div className='py-[30px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={'android:flex-wrap mobile:flex-wrap items-center justify-between'}>
          <div className='w-[30%] android:w-[13%] mobile:w-[13%]'>
            <NavLink to={'/'}>
            <Image imgSrc={imgSrc} imgAlt={imgAlt}/>
            </NavLink>
            </div>
            <div className='hidden android:block mobile:block android:w-[70%] mobile:w-[70%] relative'>
              <input className='w-full p-3 border-2' type="text" placeholder='Search Products'/><FaSearch  className='absolute top-[50%] translate-y-[-50%] right-4'/>
            </div>
            <div className='android:w-[7%] mobile:w-[7%]'>
              <span className='hidden mobile:block android:block' onClick={toggleNavbar}>
                {isOpen ? <X /> : <AlignJustify />}
              </span>
            </div>
            <Menu className='flex w-[70%] pl-8 mobile:hidden android:hidden android:pt-[60px] android:pl-[0px] android:w-full android:text-center'>
              <li className={'hover:font-bold hover:text-TextHColor android:hover:bg-slate-400 px-5'}>
              <NavLink to={'/'}>{menuone}</NavLink>
              </li>
              <li className='hover:font-bold hover:text-TextHColor android:hover:bg-slate-400 px-5'>
              <NavLink to={'/shop'}>{menutwo}</NavLink>
              </li>
              <li className='hover:font-bold hover:text-TextHColor android:hover:bg-slate-400 px-5'>
              <NavLink to={'/about'}>{menuthree}</NavLink>
              </li>
              <li className={'hover:font-bold hover:text-TextHColor android:hover:bg-slate-400 px-5'}>
                <NavLink to={'/contact'} onClick={() => navigate('/', { replace: true })}>{menufour}</NavLink>
              </li>
            </Menu>
            {isOpen && ( 
            <Menu className='w-[70%] pl-8 hidden mobile:block mobile:pt-[60px] mobile:pl-[0px] mobile:w-full mobile:text-center android:block android:pt-[60px] android:pl-[0px] android:w-full android:text-center'>
                <li>
                  <NavLink to={'/'}>
                  <div className={'hover:font-bold hover:text-TextHColor mobile:hover:bg-slate-400 android:hover:bg-slate-400 py-5 px-5'}>
                    {menuone}
                  </div>
                  </NavLink>
              </li>
                <li>
                  <NavLink to={'/shop'}>
                  <div className='hover:font-bold hover:text-TextHColor mobile:hover:bg-slate-400  android:hover:bg-slate-400 py-5 px-5'>
                    {menutwo}
                  </div>
                  </NavLink>
              </li>
                <li>
                  <NavLink to={'/about'}>
                  <div className='hover:font-bold hover:text-TextHColor mobile:hover:bg-slate-400  android:hover:bg-slate-400 py-5 px-5'>
                    {menuthree}
                  </div>
                  </NavLink>
              </li>
                <li >
                  <NavLink to={'/contact'} onClick={() => navigate('/', { replace: true })}>
                  <div className={'hover:font-bold hover:text-TextHColor mobile:hover:bg-slate-400  android:hover:bg-slate-400 py-5 px-5'}>
                    {menufour}
                  </div>
                  </NavLink>
              </li>
            </Menu>
            )}
          </Flex>
        </Container>
      </div>
      {/* Header Logo with Menu End */}
    </>
  )
}

export default Header