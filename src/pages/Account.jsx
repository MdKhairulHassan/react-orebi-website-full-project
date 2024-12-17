import React from 'react'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { Link, NavLink } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import Text from '../components/Text'

const Account = () => {

  return (
    <>
    <div className={'w-1/3 py-[120px]'}>
        {/* Account Header Part Start */}
        <div>
          <Heading as={'h3'} className={'text-TextHColor text-[49px] font-dms font-bold'} text={'My Account'} />
          <Flex className={'items-center gap-x-2'}>
            <Link to={'/'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Home'} />
            </Link>
            <RiArrowRightSLine className={'text-TextColor text-[15px]'} />
            <Link to={'/account'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'My account'} />
            </Link>
          </Flex>
        </div>
        {/* Account Header Part End */}

        {/* Account Menu Part Start */}
        <div className='w-[250px] pt-[100px] rounded-md' >
        <ul className='font-dms text-[16px] text-TextColor'>
            <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
              <NavLink to={'/account'}>
              <Text className={'border-b py-5'} text={'Dashboard'} />
              </NavLink>
            </li>
            <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
              <NavLink to={"others"}>
              <Text className={'border-b py-5'} text={'Others'} />
              </NavLink>
            </li>
            <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
            <NavLink to={"donwloads"}>
              <Text className={'border-b py-5'} text={'Donwloads'} />
            </NavLink>
            </li>
            <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
              <NavLink to={"addresses"}>
              <Text className={'border-b py-5'} text={'Addresses'} />
              </NavLink>
            </li>
            <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
              <NavLink to={"accountdetails"}>
              <Text className={'border-b py-5'} text={'Account details'} />
              </NavLink>
            </li>
            <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
            <NavLink to={"logout"}>
              <Text className={'border-b py-5'} text={'Logout'} />
            </NavLink>
            </li>
        </ul>
        </div>
        {/* Account Menu Part End */}
    </div>
    </>
  )
}

export default Account