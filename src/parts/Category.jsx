import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { useState} from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading';
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Text from '../components/Text';
import { Link } from 'react-router-dom';

const Category = ({ paraOne, paraTwo, paraThree, paraFour, paraFive, paraSix, paraSeven }) => {

  const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
  const [hidden, setHidden] = useState(false);
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);

  return (
  <>
   <div className='bg-CategoryBG py-[25px] border-BorderColor border-y'>
    <Container className={'max-w-headerContainer'}>
     <Flex>
       <Flex className={'w-[20%] android:w-[50%] mobile:w-[55%] gap-2 items-center'}>
              <OutsideClickHandler onOutsideClick={() => { setHidden(false); }}>
                <Flex className={'items-center relative'}>
                  <HiMenuAlt2 className='cursor-pointer android:text-[20px]' onClick={() => setHidden(!hidden)} />
                  <div onClick={() => setHidden(!hidden)}>
                  <Heading as={'h4'} className={'font-dms text-[14px] pl-2 text-TextHColor cursor-pointer android:text-[20px] mobile:text-[17px]'} text={paraOne} />
                  </div>
                  {hidden && (
                  <div className='bg-black p-4 w-[230px] laptop:w-[200px] tablet:w-[180px] android:w-[190px] mobile:w-[180px] absolute top-[40px] rounded-md' >
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
            <div className='w-[60%] tablet:w-[55%] android:hidden mobile:hidden relative'>
              <input className='w-full p-3' type="text" placeholder='Search Products'/><FaSearch  className='absolute top-[50%] translate-y-[-50%] right-4'/>
            </div>
            <Flex className={'w-[20%] items-center justify-end tablet:justify-center android:w-[50%] mobile:w-[45%]'}>
              <OutsideClickHandler onOutsideClick={() => { setHide(false); }}>
                <Flex className={'items-center relative'}>
                  <div onClick={toggleNavbar}>
                  <div className='cursor-pointer flex' onClick={() => setHide(!hide)} >
                    <FaUser className='mr-1 tablet:mr-0 tablet:ml-1 android:mr-0 android:text-[30px] mobile:mr-0 mobile:text-[30px]' />
                    {isOpen ? <TiArrowSortedUp className='mr-9 android:text-[30px] mobile:text-[30px] mobile:mr-3' /> : <TiArrowSortedDown className='mr-9 android:text-[30px] mobile:text-[30px] mobile:mr-3' />}
                  </div>
                  </div>
                  {hide && (
                  <div className='bg-white w-[230px] laptop:w-[200px] tablet:w-[150px] tablet:left-[-100px] android:w-[190px] absolute top-[40px] left-[-150px] android:left-[-130px] mobile:w-[180px] mobile:left-[-130px] rounded-md' >
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
                    <FaShoppingCart className='android:text-[30px] mobile:text-[30px]' />
                  </div>
                  {hide1 && (
                  <div className='bg-white w-[220px] laptop:w-[200px] tablet:w-[150px] tablet:left-[-100px] android:w-[170px] absolute top-[40px] left-[-180px] android:left-[-140px] mobile:w-[180px] mobile:left-[-150px] rounded-md' >
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