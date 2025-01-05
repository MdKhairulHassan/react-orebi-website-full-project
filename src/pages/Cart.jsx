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
       <Heading as={'h3'} className={'text-TextHColor text-[49px] font-dms font-bold mobile:text-center'} text={'Cart'} />
       <Flex className={'items-center gap-x-2 mobile:justify-center'}>
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
        
        {/* Resposiver Part For Mobile Screen Start */}
        <div className='hidden mobile:block pt-11'>
          <table class="border w-full ">
            <thead>
              <tr>
                <th className='text-start border p-[10px]'>Product</th>
                <td className='border p-[10px] flex items-center justify-between'>
                  <Image className={'mobile:pl-[1px] mobile:w-[60px] mobile:h-[60px] mobile:my-10'} imgSrc={cartproduct1} imgAlt={cartproduct1} />
                  <Heading as={"h5"} text={"Product name"} className={"font-bold font-dms mobile:text-[8px]"} />
                  <ImCross className='mobile:text-[7px]' />
                </td>
              </tr>
              <tr>
                <th className='text-start border p-[10px]'>Price</th>
                <td className='border p-[10px] flex items-center justify-between'><Heading as={"h5"} text={"$44.00"} className={"font-bold font-dms mobile:text-[15px]"} /></td>
              </tr>
              <tr>
                <th className='text-start border p-[10px]'>Quantity</th>
                <td className='border p-[10px]'>
            <Flex className='mobile:ml-[0px]'>
              <Text className={'py-[5px]'} text={"-"} />
              <Text className={'py-[5px] px-5'} text={"1"} />
              <Text className={'py-[5px]'} text={"+"} />
            </Flex>
                </td>
              </tr>
              <tr>
                <th className='text-start border p-[10px]'>Total</th>
                <td className='border p-[10px]'>
                  <Heading as={"h5"} text={"$44.00"} className={"font-bold font-dms mobile:text-[15px]"} />
                </td>
              </tr>
              
              <tr>
                <th className='border p-[10px]'>
                <Flex className='border m-[20px] items-center'>
                <Text className={'py-[3px] px-3 text-TextColor'} text={"SIZE"} />
                <TiArrowSortedDown className='ml-[100px] mobile:ml-[10px] text-TextColor'/>
                </Flex>
                </th>
                <td className='border p-[10px]'>
                 <Flex className='border items-center'>
                 <Heading as={"h5"} text={"Apply coupon"} className={"font-bold font-dms text-[8px]"} />
                 <Heading as={"h5"} text={"Update cart"} className={"font-bold font-dms text-[8px] pl-5 "} />
                 </Flex>
                </td>
              </tr>
            </thead>
          </table>
          
           <Heading as={"h5"} text={"Cart totals"} className={"font-bold font-dms text-[20px] text-end mt-[40px]"} />
          <table class="border w-full mt-1 ">
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

          <Flex className={'justify-center'}>
          <Link to={'/checkout'}>
          <button className={'font-dms font-bold text-[14px] text-white bg-black inline-block py-4 px-[77px] mt-8'} type='button'>Proceed to Checkout</button>
          </Link>
          </Flex>
        </div>
        {/* Resposiver Part For Mobile Screen End */}
        
     {/* Cart Product Part Start */}
      <div className='mobile:hidden'>
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
          <Flex className='border items-center pl-5 android:pl-2'>
            <ImCross className='text-[10px] tablet:text-[8px] android:text-[7px]' />
            <Image className={'w-[100px] h-[80px] pl-5 laptop:pl-[10px] tablet:w-[70px] tablet:h-[60px] tablet:pl-[10px] android:pl-[10px] android:w-[70px] android:h-[60px] my-10'} imgSrc={cartproduct1} imgAlt={cartproduct1} />
            <Heading as={"h5"} text={"Product name"} className={"font-bold font-dms text-[14px] pl-[20px] laptop:pl-[10px] tablet:pl-[5px] tablet:text-[12px] android:text-[8px] android:pl-[5px]"} />
            <Heading as={"h5"} text={"$44.00"} className={"font-bold font-dms text-[16px] pl-[27px] laptop:pl-[40px] tablet:pl-[25px] android:pl-[18px] android:text-[15px]"} />
            <Flex className='border ml-[170px] tablet:ml-[90px] laptop:ml-[133px] android:ml-[50px]'>
              <Text className={'py-[5px] px-5'} text={"-"} />
              <Text className={'py-[5px]'} text={"1"} />
              <Text className={'py-[5px] px-5'} text={"+"} />
            </Flex>
            <Heading as={"h5"} text={"$44.00"} className={"font-bold font-dms text-[20px] pl-[250px] laptop:pl-[180px] tablet:pl-[110px] android:pl-[60px]"} />
          </Flex>
          <Flex className='border items-center pl-5 android:pl-1'>
            
            <Flex className='border m-[20px] items-center'>
              <Text className={'py-[5px] px-5 text-TextColor'} text={"SIZE"} />
              <TiArrowSortedDown className='ml-[100px] tablet:ml-[50px] text-TextColor'/>
            </Flex>
            <Heading as={"h5"} text={"Apply coupon"} className={"font-bold font-dms text-[14px] pl-[20px]"} />
            <Heading as={"h5"} text={"Update cart"} className={"font-bold font-dms text-[14px] pl-[730px] tablet:pl-[300px] laptop:pl-[480px] android:pl-[100px] "} />
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
          <button className={'font-dms font-bold text-[14px] text-white bg-black inline-block py-4 px-[70px]       tablet:py-2 tablet:px-[50px] android:px-[18px] mt-8'} type='button'>Proceed to Checkout</button>
        </Link>
          </Flex>
      </div>   
     {/* Cart Product Part End */}
    </Container>
    </>
  )
}

export default Cart