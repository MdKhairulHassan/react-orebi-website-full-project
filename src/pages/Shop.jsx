import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'
import Heading from '../components/Heading'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import { FaPlus } from "react-icons/fa";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useState } from 'react'
import Text from '../components/Text'
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

const Shop = () => {

  const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
  const [isOpen2, setIsOpen2] = useState(false);
    const toggleNavbar2 = () => {
      setIsOpen2(!isOpen2);
  };
  

  return (
    <div className=' pt-[100px] pb-[40px]'>
      <Container className={'max-w-headerContainer'}>

        {/* Shop Header Part Start */}
        <div className='mobile:w-full mobile:text-center'>
          <Heading as={'h3'} className={'text-TextHColor text-[49px] font-dms font-bold '} text={'Products'} />
          <Flex className={'items-center mobile:justify-center gap-x-2'}>
            <Link to={'/'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Home'} />
            </Link>
            <RiArrowRightSLine className={'text-TextColor text-[15px]'} />
            <Link to={'/shop'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Products'} />
            </Link>
          </Flex>
        </div>
        {/* Shop Header Part End */}

        <Flex className={'mobile:block'}>

        {/* Shop by Category Part Start */}
        <div className='w-3/12 mobile:w-full pt-[100px]'>
        <Heading as={'h5'} className={'font-dms font-bold text-TextHColor text-[20px] tablet:text-[19px] android:text-[15px]'} text={'Shop by Category'} />
        <div className='w-[250px] laptop:w-[210px] tablet:w-[168px] android:w-[160px] pt-[10px] rounded-md' >
        <ul className='font-dms text-[16px] text-TextColor'>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
            <Link to={"#"}>
            <Text className={'py-3 inline-block'} text={'Category 1'} /><FaPlus className='ml-[145px] pl-[7px] tablet:ml-[70px] laptop:ml-[110px] android:ml-[65px] inline-block'/>
            </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
            <Link to={"#"}>
            <Text className={'py-3'} text={'Category 2'} />
            </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link to={"#"}>
            <Text className={'py-3 inline-block'} text={'Category 3'} /><FaPlus className='ml-[140px] pl-[7px] laptop:ml-[105px] tablet:ml-[65px] android:ml-[60px] inline-block'/>
          </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
            <Link to={"#"}>
            <Text className={'border-b py-3'} text={'Category 4'} />
            </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
            <Link to={"#"}>
            <Text className={'border-b py-3'} text={'Category 5'} />
            </Link>
          </li>
        </ul>
        </div>
        {/* Shop by Category Part End */}
            
        {/* Shop by Color Part Start */}
        <div onClick={toggleNavbar}>
          <Heading as={'h5'} className={'font-dms font-bold text-TextHColor inline-block text-[20px] android:text-[15px] tablet:text-[19px] pt-10'} text={'Shop by Color'} />
          {isOpen ?  <TiArrowSortedUp className='inline-block ml-14 tablet:ml-[12px] android:ml-[18px] mobile:ml-[87px] ' /> : <TiArrowSortedDown className='inline-block ml-14 tablet:ml-[12px] android:ml-[18px] mobile:ml-[87px] ' />
          }
        </div>
        {isOpen && (
        <div className='w-[250px] pt-[10px] laptop:w-[210px] tablet:w-[168px] android:w-[160px] rounded-md' >
        <ul className='font-dms text-[16px] text-TextColor'>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <div className='items-center flex'>
          <input type="color" className='inline-block rounded-full appearance-none w-3 h-3 bg-black border-2 border-black'/>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Color 1'} />
          </Link>
          </div>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <div className='items-center flex'>
          <input type="color" className='inline-block rounded-full appearance-none w-3 h-3 bg-pink-500 border-2 border-pink-500'/>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Color 2'} />
          </Link>
          </div>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <div className='items-center flex'>
          <input type="color" className='inline-block rounded-full appearance-none w-3 h-3 bg-green-500 border-2 border-green-500'/>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Color 3'} />
          </Link>
          </div>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
            <div className='items-center flex'>
          <input type="color" className='inline-block rounded-full appearance-none w-3 h-3 bg-gray-400 border-2 border-gray-400'/>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Color 4'} />
          </Link>
          </div>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
            <div className='items-center flex'>
          <input type="color" className='inline-block rounded-full appearance-none w-3 h-3 bg-teal-400 border-2 border-teal-400'/>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Color 5'} />
          </Link>
          </div>
          </li>
        </ul>
        </div>
        )}
        {/* Shop by Color Part End */}
            
        {/* Shop by Brand Part Start */}
        <div onClick={toggleNavbar2}>
              <Heading as={'h5'} className={'font-dms font-bold text-TextHColor inline-block text-[20px] tablet:text-[19px]  android:text-[15px] pt-10'} text={'Shop by Brand'} />
              {isOpen2 ? <TiArrowSortedUp className='inline-block ml-14 tablet:ml-[12px] android:ml-[14px] mobile:ml-[82px] ' /> : <TiArrowSortedDown className='inline-block ml-14 tablet:ml-[12px] android:ml-[14px] mobile:ml-[82px] ' />
              }
        </div>
        {isOpen2 && (
        <div className='w-[250px] pt-[10px] laptop:w-[210px] tablet:w-[168px] android:w-[160px] rounded-md' >
        <ul className='font-dms text-[16px] text-TextColor'>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Brand 1'} />
          </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Brand 2'} />
          </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Brand 3'} />
          </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Brand 4'} />
          </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Brand 5'} />
          </Link>
          </li>
        </ul>
        </div>
        )}
        {/* Shop by Category Part End */}
        
        {/* Shop by Price Part Start */}
        <Heading as={'h5'} className={'font-dms font-bold text-TextHColor text-[20px] tablet:text-[19px] android:text-[15px] pt-10'} text={'Shop by Price'}/>
        <div className='w-[250px] pt-[10px] laptop:w-[210px] tablet:w-[168px] android:w-[160px] rounded-md' >
        <ul className='font-dms text-[16px] text-TextColor'>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'$0.00 - $9.99'} />
          </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'$10.00 - $19.99'} />
          </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'$20.00 - $29.99'} />
          </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'$30.00 - $39.99'} />
          </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'$40.00 - $69.99'} />
          </Link>
          </li>
        </ul>
        </div>
        </div>
        {/* Shop by Price Part End */}
          
          {/* Pagination Part Start */}
          <div className='w-9/12 mobile:w-full pt-[100px] mobile:pt-[80px]'>
          <Flex className={'items-center android:flex-wrap mobile:flex-wrap'}>
              <MdWindow className='bg-TextHColor text-white text-[20px] android:text-[40px] border-4 tablet:ml-[15px] android:ml-[50px] border-TextHColor mobile:text-[30px]' />
              <TfiMenuAlt className='border p-[5px] android:text-[40px] text-[25px] mobile:text-[33px] mobile:ml-[10px] ml-3' />
              <Flex className={"items-center pl-[380px] laptop:pl-[200px] tablet:pl-[95px] android:pl-[25px] mobile:pl-[54px] mobile:ml-[0px]"}>
            <Heading as={"h6"} text={"Sort by:"} className={"font-dms text-[16px] mobile:text-[12px] text-TextColor"} />
            <Flex className='border my-[20px] ml-[10px] items-center'>
              <Text className={'py-[5px] px-5 tablet:px-3 text-TextColor'} text={"Featured"} />
              <TiArrowSortedDown className='ml-[55px] tablet:ml-[15px] mobile:ml-0 tablet:mx-1 text-TextColor'/>
            </Flex>
              </Flex>
              
              <Flex className={"items-center pl-[30px] android:pl-[225px] mobile:pl-[159px]"}>
            <Heading as={"h6"} text={"Show:"} className={"font-dms text-[16px] text-TextColor"} />
            <Flex className='border my-[20px] ml-[10px] items-center'>
              <Text className={'py-[5px] px-5 tablet:px-3 text-TextColor'} text={"36"} />
              <TiArrowSortedDown className='ml-[55px] tablet:ml-[10px] mobile:ml-3 tablet:mx-2 text-TextColor'/>
            </Flex>
              </Flex>
              
            </Flex>
            <div className='tablet:pl-[15px]'>
            <Pagination itemsPerPage={12} />
            </div>
          </div>
        {/* Pagination Part End */}
        </Flex>
      </Container>
    </div>
  )
}

export default Shop