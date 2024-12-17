import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import { ImCross } from "react-icons/im";
import { TiArrowSortedDown } from "react-icons/ti";
import Image from '../components/Image'
import cartproduct1 from '../assets/productSimgfour.png'
import Text from '../components/Text'

const Cart = () => {
  return (
    <>
    <Container className={'max-w-headerContainer py-[120px]'}>
     {/* Cart Header Part Start */}
     <div>
       <Heading as={'h3'} className={'text-TextHColor text-[49px] font-dms font-bold'} text={'Cart'} />
       <Flex className={'items-center gap-x-2'}>
         <Link to={'/'}>
         <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Home'} />
         </Link>
         <RiArrowRightSLine className={'text-TextColor text-[15px]'} />
         <Link to={'/cart'}>
         <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Cart'} />
         </Link>
       </Flex>
     </div>
     {/* Cart Header Part End */}
        
     {/* Cart Product Part Start */}
      <div>
      <table class="bg-CategoryBG w-full mt-[100px]">
            <thead className=''>
              <tr>
                <th className='text-start p-[20px]'>Product</th>
                <th className='text-start p-[20px]'>Price</th>
                <th className='text-start p-[20px]'>Quantity</th>
                <th className='text-start p-[20px]'>Total</th>
              </tr>
            </thead>
          </table>
          <Flex className='border items-center pl-5'>
            <ImCross className='text-[10px]' />
            <Image className={'w-[100px] h-[80px] pl-5 my-10'} imgSrc={cartproduct1} imgAlt={cartproduct1} />
            <Heading as={"h5"} text={"Product name"} className={"font-bold font-dms text-[16px] pl-[20px]"} />
            <Heading as={"h5"} text={"$44.00"} className={"font-bold font-dms text-[20px] pl-[90px]"} />
            <Flex className='border ml-[170px]'>
              <Text className={'py-[5px] px-5'} text={"-"} />
              <Text className={'py-[5px]'} text={"1"} />
              <Text className={'py-[5px] px-5'} text={"+"} />
            </Flex>
            <Heading as={"h5"} text={"$44.00"} className={"font-bold font-dms text-[20px] pl-[250px]"} />
          </Flex>
          <Flex className='border items-center pl-5'>
            
            <Flex className='border m-[20px] items-center'>
              <Text className={'py-[5px] px-5 text-TextColor'} text={"SIZE"} />
              <TiArrowSortedDown className='ml-[100px] text-TextColor'/>
            </Flex>
            <Heading as={"h5"} text={"Apply coupon"} className={"font-bold font-dms text-[14px] pl-[20px]"} />
            <Heading as={"h5"} text={"Update cart"} className={"font-bold font-dms text-[14px] pl-[730px]"} />
          </Flex>
          <Heading as={"h5"} text={"Cart totals"} className={"font-bold font-dms text-[20px] text-end mt-[40px]"} />
          <div className='flex justify-end mt-6'>
          <table class="border w-1/3 ">
            <thead>
              <tr>
                <th className='text-start border p-[10px]'>Subtotal</th>
                <td className='text-start border p-[10px]'>389.99 $</td>
              </tr>
              <tr>
                <th className='text-start border p-[10px]'>Total</th>
                <td className='text-start border p-[10px]'>389.99 $</td>
              </tr>
            </thead>
            </table>
          </div>
          <Flex className={'justify-end'}>
          <Link to={'/checkout'}>
          <button className={'font-dms font-bold text-[14px] text-white bg-black inline-block py-4 px-[70px] mt-8'} type='button'>Proceed to Checkout</button>
        </Link>
          </Flex>
      </div>   
     {/* Cart Product Part End */}
    </Container>
    </>
  )
}

export default Cart