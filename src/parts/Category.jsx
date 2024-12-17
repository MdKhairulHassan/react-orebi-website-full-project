import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { useState} from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading';
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import Text from '../components/Text';
import { Link, NavLink } from 'react-router-dom';

const Category = ({ paraOne, paraTwo, paraThree, paraFour, paraFive, paraSix, paraSeven }) => {
  
  const [hidden, setHidden] = useState(false);
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);

  return (
  <>
   <div className='bg-CategoryBG py-[25px] border-BorderColor border-y'>
    <Container className={'max-w-headerContainer'}>
     <Flex>
       <Flex className={'w-[20%] gap-2 items-center'}>
              <OutsideClickHandler onOutsideClick={() => { setHidden(false); }}>
                <Flex className={'items-center relative'}>
                  <HiMenuAlt2 className='cursor-pointer' onClick={() => setHidden(!hidden)} />
                  <div onClick={() => setHidden(!hidden)}>
                  <Heading as={'h4'} className={'font-dms text-[14px] pl-2 text-TextHColor cursor-pointer'} text={paraOne} />
                  </div>
                  {hidden && (
                  <div className='bg-black p-4 w-[230px] absolute top-[40px] rounded-md' >
                  <ul className='font-dms text-[16px] text-TextColor'>
                    <li className='border-b py-5 px-3 bottom-BorderInfoColor hover:text-white'><Text text={paraTwo}/></li>
                    <li className='border-b py-5 px-3 bottom-BorderInfoColor hover:text-white'><Text text={paraThree}/></li>
                    <li className='border-b py-5 px-3 bottom-BorderInfoColor hover:text-white'><Text text={paraFour}/></li>
                    <li className='border-b py-5 px-3 bottom-BorderInfoColor hover:text-white'><Text text={paraFive}/></li>
                    <li className='border-b py-5 px-3 bottom-BorderInfoColor hover:text-white'><Text text={paraSix}/></li>
                    <li className='border-b py-5 px-3 bottom-BorderInfoColor hover:text-white'><Text text={paraSeven}/></li>
                  </ul>
                  </div>
                 )}
                </Flex>
              </OutsideClickHandler>
            </Flex>
            <div className='w-[60%] relative'>
              <input className='w-full p-3' type="text" placeholder='Search Products'/><FaSearch  className='absolute top-[50%] translate-y-[-50%] right-4'/>
            </div>
            <Flex className={'w-[20%] items-center justify-end'}>
              <OutsideClickHandler onOutsideClick={() => { setHide(false); }}>
                <Flex className={'items-center relative'}>
                  <div className='cursor-pointer flex' onClick={() => setHide(!hide)}>
                    <FaUser className='mr-1' />
                    <TiArrowSortedDown className='mr-9' />
                  </div>
                  {hide && (
                  <div className='bg-white w-[230px] absolute top-[40px] left-[-200px] rounded-md' >
                  <ul className='font-dms text-[16px] text-TextColor'>
                  <Link to={'/account'}>
                  <li className='border-b py-5 bottom-BorderInfoColor text-center rounded-md hover:bg-black hover:text-white' ><Text text={'Account'} /></li>
                  </Link>
                  <Link to={'/signup'}>
                  <li className='border-b py-5 bottom-BorderInfoColor text-center rounded-md hover:bg-black hover:text-white' ><Text text={'Sign Up'}/></li>
                  </Link>
                  <Link to={'/login'}>
                  <li className='border-b py-5 bottom-BorderInfoColor text-center rounded-md hover:bg-black hover:text-white' >
                  <Text text={'Log In/Out'} />
                  </li>
                  </Link>
                  </ul>
                  </div>
                 )}
                </Flex>
              </OutsideClickHandler>

              <OutsideClickHandler onOutsideClick={() => { setHide1(false); }}>
                <Flex className={'items-center relative'}>
                  <div className='cursor-pointer flex' onClick={() => setHide1(!hide1)}>
                    <FaShoppingCart />
                  </div>
                  {hide1 && (
                  <div className='bg-white w-[230px] absolute top-[40px] left-[-200px] rounded-md' >
                  <ul className='font-dms text-[16px] text-TextColor'>
                  <Link to={'cart'}>    
                  <li className='border-b py-5 bottom-BorderInfoColor text-center rounded-md hover:bg-black hover:text-white' ><Text text={'Cart'}/></li>
                  </Link>
                    <Link to={'checkout'}>
                    <li className='border-b py-5 bottom-BorderInfoColor text-center rounded-md hover:bg-black hover:text-white' >
                    <Text text={'Checkout'} />
                    </li>
                    </Link>
                  </ul>
                  </div>
                 )}
                </Flex>
              </OutsideClickHandler>
              
          </Flex>
        </Flex>
      </Container>
    </div>
   </>
 )
}

export default Category