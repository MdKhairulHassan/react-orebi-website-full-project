import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'
import Heading from '../components/Heading'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import { FaPlus } from "react-icons/fa";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useState} from 'react'
import Text from '../components/Text'
import OutsideClickHandler from 'react-outside-click-handler'
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

const Shop = () => {

  const [hidden, setHidden] = useState(false);
  const [hidden2, setHidden2] = useState(false);

  return (
    <div className=' pt-[100px] pb-[40px]'>
      <Container className={'max-w-headerContainer'}>

        {/* Shop Header Part Start */}
        <div>
          <Heading as={'h3'} className={'text-TextHColor text-[49px] font-dms font-bold'} text={'Products'} />
          <Flex className={'items-center gap-x-2'}>
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

        <Flex>

        {/* Shop by Category Part Start */}
        <div className='w-3/12 pt-[100px]'>
        <Heading as={'h5'} className={'font-dms font-bold text-TextHColor text-[20px]'} text={'Shop by Category'} />
        <div className='w-[250px] pt-[10px] rounded-md' >
        <ul className='font-dms text-[16px] text-TextColor'>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
            <Link to={"#"}>
            <Text className={'py-3 inline-block'} text={'Category 1'} /><FaPlus className='ml-[145px] pl-[7px] inline-block'/>
            </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
            <Link to={"#"}>
            <Text className={'py-3'} text={'Category 2'} />
            </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor border-b'>
          <Link to={"#"}>
            <Text className={'py-3 inline-block'} text={'Category 3'} /><FaPlus className='ml-[140px] pl-[7px] inline-block'/>
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
        {/* Shop Category Part End */}
            
        {/* Shop by Color Part Start */}
        <OutsideClickHandler onOutsideClick={() => { setHidden(false); }}>
        <div onClick={() => setHidden(!hidden)}>
        <Heading as={'h5'} className={'font-dms font-bold text-TextHColor inline-block text-[20px] pt-10'} text={'Shop by Color'}/><TiArrowSortedUp className='inline-block ml-14'/>
        </div>
        {hidden && (
        <div className='w-[250px] pt-[10px] rounded-md' >
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
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
            <div className='items-center flex'>
          <input type="color" className='inline-block rounded-full appearance-none w-3 h-3 bg-gray-400 border-2 border-gray-400'/>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Color 4'} />
          </Link>
          </div>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
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
        </OutsideClickHandler>
        {/* Shop by Color Part End */}
            
        {/* Shop by Brand Part Start */}
        <OutsideClickHandler onOutsideClick={() => { setHidden2(false); }}>
        <div onClick={() => setHidden2(!hidden2)}>
        <Heading as={'h5'} className={'font-dms font-bold text-TextHColor inline-block text-[20px] pt-10'} text={'Shop by Brand'}/><TiArrowSortedUp className='inline-block ml-14'/>
        </div>
        {hidden2 && (
        <div className='w-[250px] pt-[10px] rounded-md' >
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
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Brand 4'} />
          </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'Brand 5'} />
          </Link>
          </li>
        </ul>
        </div>
        )}
        </OutsideClickHandler>
        {/* Shop by Category Part End */}
        
        {/* Shop by Price Part Start */}
        <Heading as={'h5'} className={'font-dms font-bold text-TextHColor text-[20px] pt-10'} text={'Shop by Price'}/>
        <div className='w-[250px] pt-[10px] rounded-md' >
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
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'$30.00 - $39.99'} />
          </Link>
          </li>
          <li className='bottom-BorderInfoColor hover:font-bold hover:text-TextHColor'>
          <Link>
          <Text className={'py-3 pl-2 inline-block'} text={'$40.00 - $69.99'} />
          </Link>
          </li>
        </ul>
        </div>
        </div>
        {/* Shop by Price Part End */}
          
          {/* Pagination Part Start */}
          <div className='w-9/12 pt-[100px]'>
          <Flex className={'items-center'}>
              <MdWindow className='bg-TextHColor text-white text-[20px] border-4 border-TextHColor' />
              <TfiMenuAlt className='border p-[5px] text-[25px] ml-3' />

              <Flex className={"items-center pl-[380px]"}>
            <Heading as={"h6"} text={"Sort by:"} className={"font-dms text-[16px] text-TextColor"} />
            <Flex className='border my-[20px] ml-[10px] items-center'>
              <Text className={'py-[5px] px-5 text-TextColor'} text={"Featured"} />
              <TiArrowSortedDown className='ml-[55px] text-TextColor'/>
            </Flex>
              </Flex>
              
              <Flex className={"items-center pl-[30px]"}>
            <Heading as={"h6"} text={"Show:"} className={"font-dms text-[16px] text-TextColor"} />
            <Flex className='border my-[20px] ml-[10px] items-center'>
              <Text className={'py-[5px] px-5 text-TextColor'} text={"36"} />
              <TiArrowSortedDown className='ml-[55px] text-TextColor'/>
            </Flex>
              </Flex>
              
          </Flex>
            <Pagination itemsPerPage={12} />
          </div>
        {/* Pagination Part End */}
        </Flex>
      </Container>
    </div>
  )
}

export default Shop