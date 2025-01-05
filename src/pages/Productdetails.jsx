import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import Image from '../components/Image'
import Productimg1 from '../assets/productimg6.png'
import Productimg2 from '../assets/productSimgfour.png'
import Productimg3 from '../assets/productSimgthree.png'
import Productimg4 from '../assets/productSimgtwo.png'
import { IoStar } from "react-icons/io5";
import { TiArrowSortedDown } from 'react-icons/ti'
import Text from '../components/Text'
import Anchor from '../components/Anchor'
import { FaPlus } from 'react-icons/fa'

const Productdetails = () => {
  return (
    <>
    <Container className={'max-w-headerContainer py-[120px]'}>
      {/* Productdetails Header Part Start */}
      <div>
        <Heading as={'h3'} className={'text-TextHColor text-[49px] font-dms font-bold'} text={'Product details'} />
        <Flex className={'items-center gap-x-2'}>
          <Link to={'/'}>
          <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Home'} />
          </Link>
          <RiArrowRightSLine className={'text-TextColor text-[15px]'} />
          <Link to={'/productdetails'}>
          <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Product details'} />
          </Link>
        </Flex>
      </div>
      {/* Productdetails Header Part End */}
      
      {/* Productdetails Image Part Start */}
      <Flex className='pt-[100px] flex-wrap'>
        <div className='w-1/2 relative'>
          <Image imgSrc={Productimg1} imgAlt={Productimg1} className={'w-[95%]'} />
        </div>
        <div className='w-1/2 relative'>
          <Image imgSrc={Productimg2} imgAlt={Productimg2} className={'w-[95%]'} />
        </div>
        <div className='w-1/2 relative mt-5'>
          <Image imgSrc={Productimg3} imgAlt={Productimg3} className={'w-[95%]'} />
        </div>
        <div className='w-1/2 relative mt-5'>
          <Image imgSrc={Productimg4} imgAlt={Productimg4} className={'w-[95%]'} />
        </div>
      </Flex>
        {/* Productdetails Image Part End */}
        
        {/* Productdetails Text Part Start */}
        <div className='pt-[40px] w-1/2'>
          
          <Heading as={"h3"} text={"Product"} className={"font-dms font-bold text-[39px] text-TextHColor"} />
          <Flex className={"text-StarColor pt-2"}>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStar />
           <Heading as={"h6"} text={"1 Review"} className={"font-dms text-[14px] text-TextColor pl-6"} />
          </Flex>

          <Flex className={'items-center border-b py-3'}>
          <Heading as={"strike"} text={"$88.00"} className={"font-dms text-[14px] text-TextColor"} />
          <Heading as={"h6"} text={"$44.00"} className={"font-dms text-[20px] font-bold text-TextHColor pl-5"} />
          </Flex>

          <Flex className={"pt-4 items-center"}>
            <Heading as={"h6"} text={"COLOR:"} className={"font-dms text-[16px] font-bold text-TextHColor"} />
            <input type="checkbox" className='inline-block rounded-full appearance-none w-5 h-5 bg-gray-400 border-2 border-gray-400 checked:w-7 checked:h-7 ml-10'/>
            <input type="checkbox" className='inline-block rounded-full appearance-none w-5 h-5 bg-pink-300 border-2 border-pink-300 checked:w-7 checked:h-7 ml-3'/>
            <input type="checkbox" className='inline-block rounded-full appearance-none w-5 h-5 bg-green-300 border-2 border-green-300 checked:w-7 checked:h-7 ml-3'/>
            <input type="checkbox" className='inline-block rounded-full appearance-none w-5 h-5 bg-gray-200 border-2 border-gray-200 checked:w-7 checked:h-7 ml-3'/>
            <input type="checkbox" className='inline-block rounded-full appearance-none w-5 h-5 bg-green-100 border-2 border-green-100 checked:w-7 checked:h-7 ml-3'/>
          </Flex>

          <Flex className={"pt-4 items-center"}>
            <Heading as={"h6"} text={"SIZE:"} className={"font-dms text-[16px] font-bold text-TextHColor"} />
            <Flex className='border my-[20px] ml-[78px] items-center'>
              <Text className={'py-[5px] px-5 text-TextColor'} text={"S"} />
              <TiArrowSortedDown className='ml-[55px] text-TextColor'/>
            </Flex>
          </Flex>

          <Flex className={"pt-4 pb-8 border-b items-center"}>
            <Heading as={"h6"} text={"QUANTITY:"} className={"font-dms text-[16px] font-bold text-TextHColor"} />
            <Flex className='border ml-[30px]'>
              <Text className={'py-[5px] px-5'} text={"-"} />
              <Text className={'py-[5px] px-2'} text={"1"} />
              <Text className={'py-[5px] px-5'} text={"+"} />
            </Flex>
          </Flex>

          <Flex className={"pt-4 pb-4 border-b items-center"}>
            <Heading as={"h6"} text={"STATUS:"} className={"font-dms text-[16px] font-bold text-TextHColor"} />
            <Heading as={"h6"} text={"In stock"} className={"font-dms text-[16px] text-TextColor pl-6"} />
          </Flex>

          <Flex>
          <Anchor href={'#'}>
            <button className={'font-dms font-bold text-[14px] laptop:text-[10px] text-black border-2 border-black bg-white inline-block py-4 px-[70px] mt-8'} type='button'>Add to Wish List</button>
            </Anchor>
            <Anchor href={'#'}>
              <button className={'font-dms font-bold text-[14px] laptop:text-[10px] border-2 border-black text-white bg-black inline-block py-4 px-[70px] mt-8 ml-5'} type='button'>Add to Cart</button>
            </Anchor>
          </Flex>

          <div className='bottom-BorderInfoColor mt-10 border-y'>
            <Flex className={'justify-between items-center'}>
            <Text className={'py-5 font-dms text-[16px] font-bold text-TextHColor'} text={'FEATURES & DETAILS'} /><FaPlus/>
            </Flex>
          </div>

          <div className='bottom-BorderInfoColor border-b'>
            <Flex className={'justify-between items-center'}>
            <Text className={'py-5 font-dms text-[16px] font-bold text-TextHColor'} text={'SHIPPING & RETURNS'} /><FaPlus/>
            </Flex>
          </div>

        <div className='pt-[30px]'>
          <Text className={'font-dms text-TextColor text-[16px] pb-10'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
        </div>
          
          <Flex className='pt-[50px] gap-x-10'>
            <Heading as={"h6"} text={"Description"} className={"font-dms text-[20px] text-TextColor"} />
            <Heading as={"h6"} text={"Reviews (1)"} className={"font-dms text-[20px] font-bold text-TextHColor"} />
          </Flex>
        </div>
        <div>
          <Heading as={"h6"} text={"1 review for Product"} className={"font-dms text-[14px] pt-8 pb-5 text-TextColor border-b"} />
          <Flex className={"justify-between"}>
          <Flex className={'items-center'}>
            <Heading as={"h6"} text={"John Ford"} className={"font-dms text-[16px] pt-8 pb-5 text-TextHColor"} />
          <Flex className={"text-StarColor pl-10 pt-3"}>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          </Flex>
            </Flex>
            <Heading as={"h6"} text={"6 months ago"} className={"font-dms text-[16px] pt-8 text-TextColor"} />
          </Flex>
            <Heading as={"p"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} className={"font-dms text-[16px] pb-5 text-TextColor border-b"} />
        </div>
        {/* Productdetails Text Part End */}

        {/* Productdetails Form Part Start */}
        <div className='pt-[50px] w-1/2'>
          <Heading as={'h3'} className={'text-TextHColor text-[20px] font-dms font-bold'} text={'Add a Review'} />

          <div className='pt-[45px]'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Name</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='Your name here'/>
          </div>
          <div className='pt-[25px]'>
          <label for="email" className="text-TextHColor text-[16px] font-dms font-bold">Email</label>
          <input className='w-full pb-4 pt-3 border-b' type="email" placeholder='Your email here'/>
          </div>
          <div className='pt-[25px]'>
          <label for="message" className="text-TextHColor text-[16px] font-dms font-bold">Review</label>
          <input className='w-full pb-20 pt-3 border-b' type="text" placeholder='Your review here'/>
          </div>
          <Anchor href={'#'}>
            <button className={'font-dms font-bold text-[14px] text-white bg-black inline-block py-4 px-24 mt-8'} type='submit'>Post</button>
        </Anchor>
        </div>
        {/* Productdetails Form Part End */}
        
    </Container>
    </>
  )
}

export default Productdetails