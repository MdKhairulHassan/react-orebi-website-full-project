import React from 'react'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { Link, NavLink } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import Text from '../components/Text'

const Account = () => {

  return (
    <>
    <div className={'w-1/3 mobile:w-full py-[120px]'}>
        {/* Account Header Part Start */}
        <div>
          <Heading as={'h3'} className={'text-TextHColor text-[49px] tablet:text-[44px] android:text-[32px] font-dms font-bold mobile:text-center'} text={'My Account'} />
          <Flex className={'items-center gap-x-2 mobile:justify-center'}>
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
        <div className='w-[250px] tablet:w-[220px] android:w-[160px] pt-[100px] mobile:w-full rounded-md' >
        <ul className='font-dms text-[16px] text-TextColor mobile:text-center'>
            <li className='acmenuone'>
              <NavLink to={'/account'}>
                <Text className={'hover:font-bold hover:text-TextHColor hover:text-[16px] border-b py-5'} text={'Dashboard'} />
              </NavLink>
            </li>
            <li className='hover:font-bold hover:text-TextHColor'>
              <NavLink to={"others"}>
              <Text className={'border-b py-5'} text={'Others'} />
              </NavLink>
            </li>
            <li className='hover:font-bold hover:text-TextHColor'>
            <NavLink to={"donwloads"}>
              <Text className={'border-b py-5'} text={'Donwloads'} />
            </NavLink>
            </li>
            <li className='hover:font-bold hover:text-TextHColor'>
              <NavLink to={"addresses"}>
              <Text className={'border-b py-5'} text={'Addresses'} />
              </NavLink>
            </li>
            <li className='hover:font-bold hover:text-TextHColor'>
              <NavLink to={"accountdetails"}>
              <Text className={'border-b py-5'} text={'Account details'} />
              </NavLink>
            </li>
            <li className='hover:font-bold hover:text-TextHColor'>
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