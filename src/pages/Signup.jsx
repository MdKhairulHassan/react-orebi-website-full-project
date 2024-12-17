import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Text from '../components/Text'
import Anchor from '../components/Anchor'

const Signup = () => {
  return (
    <>
      <Container className={'max-w-headerContainer py-[120px]'}>
        
        {/* Signup Header Part Start */}
        <div>
          <Heading as={'h3'} className={'text-TextHColor text-[49px] font-dms font-bold'} text={'Sign up'} />
          <Flex className={'items-center gap-x-2'}>
            <Link to={'/'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Home'} />
            </Link>
            <RiArrowRightSLine className={'text-TextColor text-[15px]'} />
            <Link to={'/signup'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Sign up'} />
            </Link>
          </Flex>
        </div>
        {/* Signup Header Part End */}

        {/* Signup Description Text Part Start */}
        <div className='pt-[100px]'>
          <Text className={'font-dms text-TextColor text-[16px] pr-[545px] pb-10 border-b'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
        </div>
        {/* Signup Description Text Part End */}

        {/* Signup Personal Details Form Part Start */}
        <div className='pt-[50px]'>
          <Text className={'font-dms font-bold text-TextHColor text-[39px]'} text={"Your Personal Details"} />
          <Flex className='pt-[30px]'>
          <div className='w-1/3'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">First Name *</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='First Name'/>
          </div>
          <div className='w-1/3 pl-10'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Last Name *</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='Last Name'/>
          </div>
          </Flex>
          <Flex className='pt-[30px]'>
          <div className='w-1/3'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Email address</label>
          <input className='w-full pb-4 pt-3 border-b' type="email" placeholder='company@domain.com'/>
          </div>
          <div className='w-1/3 pl-10'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Telephone</label>
          <input className='w-full pb-4 pt-3 border-b' type="number" placeholder='Your phone number'/>
          </div>
          </Flex>
        </div>
        {/* Signup Personal Details Form Part End */}

        {/* New Customer Form Part Start */}
        <div className='mt-[80px] pt-[30px] border-t'>
          <Text className={'font-dms font-bold text-TextHColor text-[39px]'} text={"New Customer"} />
          <Flex className='pt-[30px]'>
          <div className='w-1/3'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Address 1</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='4279 Zboncak Port Suite 6212'/>
          </div>
          <div className='w-1/3 pl-10'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Address 2</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='-'/>
          </div>
          </Flex>
          <Flex className='pt-[30px]'>
          <div className='w-1/3'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">City</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='Your city'/>
          </div>
          <div className='w-1/3 pl-10'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Post Code</label>
          <input className='w-full pb-4 pt-3 border-b' type="number" placeholder='05228'/>
          </div>
          </Flex>
          <Flex className='pt-[30px]'>
          <div className='w-1/3 relative'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Country</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='Please select'/><TiArrowSortedDown className='absolute top-[55%] right-5 text-TextColor'/>
          </div>
          <div className='w-1/3 pl-10 relative'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Region/State</label>
          <input className='w-full pb-4 pt-3 border-b' type="number" placeholder='Please select'/><TiArrowSortedDown className='absolute top-[55%] right-5 text-TextColor'/>
          </div>
          </Flex>
        </div>
        {/* New Customer Form Part End */}

        {/* Password Form Part Start */}
        <div className='pt-[50px] mt-[80px] border-t'>
          <Text className={'font-dms font-bold text-TextHColor text-[39px]'} text={"Your Password"} />
          <Flex className='pt-[30px]'>
          <div className='w-1/3'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Password</label>
          <input className='w-full pb-4 pt-3 border-b' type="password" placeholder='Password'/>
          </div>
          <div className='w-1/3 pl-10'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Repeat Password</label>
          <input className='w-full pb-4 pt-3 border-b' type="password" placeholder='Repeat password'/>
          </div>
          </Flex>
        </div>
        {/* Password Form Part End */}

        {/* Password Form Part Start */}
        <div className='pt-[50px] mt-[80px] border-t'>
          <div>
          <input type="checkbox"></input>
          <label className="text-TextColor text-[14px] font-dms pl-3">I have read and agree to the Privacy Policy</label>
          </div>
          <Flex className={'items-center my-6'}>
          <label className="text-TextColor text-[14px] font-dms">Subscribe Newsletter</label>
          <input type="radio" name='subscribe' class="appearance-none w-4 h-4 mr-2 ml-5 bg-white border border-TextColor outline-TextColor rounded checked:bg-TextColor"></input><label className="text-TextColor text-[14px] font-dms">Yes</label>
            <input type="radio" name='subscribe' class="appearance-none w-4 h-4 mr-2 ml-5 bg-white border border-TextColor outline-TextColor rounded checked:bg-TextColor"></input>
            <label className="text-TextColor text-[14px] font-dms">No</label>
          </Flex>
          <Anchor href={'#'}>
            <button className={'font-dms font-bold text-[14px] text-white bg-black inline-block py-4 px-[70px] mt-8'} type='button'>Sign up</button>
        </Anchor>
        </div>
        {/* Password Form Part End */}

    </Container>
    </>
  )
}

export default Signup