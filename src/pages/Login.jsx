import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import Text from '../components/Text'
import Anchor from '../components/Anchor'

const Login = () => {
  return (
    <>
      <Container className={'max-w-headerContainer py-[120px]'}>
      {/* Login Header Part Start */}
        <div>
          <Heading as={'h3'} className={'text-TextHColor text-[49px] font-dms font-bold'} text={'Login'} />
          <Flex className={'items-center gap-x-2'}>
            <Link to={'/'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Home'} />
            </Link>
            <RiArrowRightSLine className={'text-TextColor text-[15px]'} />
            <Link to={'/login'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Login'} />
            </Link>
          </Flex>
        </div>
        {/* Login Header Part End */}

        {/* Login Description Text Part Start */}
        <div className='pt-[100px]'>
          <Text className={'font-dms text-TextColor text-[16px] pr-[545px] pb-10 border-b'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
        </div>
        {/* Login Description Text Part End */}
        
        {/* Login Customer Form Part Start */}
        <div className='pt-[100px] pb-[50px]'>
          <Text className={'font-dms font-bold text-TextHColor text-[39px]'} text={"Returning Customer"} />
          <Flex className='pt-[30px]'>
          <div className='w-1/3'>
          <label for="email" className="text-TextHColor text-[16px] font-dms font-bold">Email address</label>
          <input className='w-full pb-4 pt-3 border-b' type="email" placeholder='company@domain.com'/>
          </div>
          <div className='w-1/3 pl-10'>
          <label for="Password" className="text-TextHColor text-[16px] font-dms font-bold">Password</label>
          <input className='w-full pb-4 pt-3 border-b' type="password" placeholder='●●●●●●●●'/>
          </div>
          </Flex>
          <Anchor href={'#'}>
            <button className={'font-dms font-bold text-[14px] border-2 border-black text-black bg-white inline-block py-4 px-20 mt-8'} type='submit'>Log in</button>
        </Anchor>
        </div>
        {/* Login Customer Form Part End */}

        {/* Login New Customer Part Start */}
        <div className='pt-[50px] border-t'>
          <Text className={'font-dms font-bold text-TextHColor text-[39px]'} text={"New Customer"} />
          <div className='pt-[30px]'>
          <Text className={'font-dms text-TextColor text-[16px] pr-[545px] pb-8'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
          </div>
          <Link to={'/signup'}>
            <button className={'font-dms font-bold text-[14px] text-white bg-black inline-block py-4 px-[70px] mt-8'} type='button'>Continue</button>
        </Link>
        </div>
        {/* Login New Customer Part End */}

      </Container> 
    </>
  )
}

export default Login