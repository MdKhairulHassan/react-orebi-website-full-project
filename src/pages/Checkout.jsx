import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import { TiArrowSortedUp } from "react-icons/ti";
import Text from '../components/Text'
import Anchor from '../components/Anchor'

const Checkout = () => {
  return (
    <>
    <Container className={'max-w-headerContainer py-[120px]'}>
        {/* Checkout Header Part Start */}
        <div>
          <Heading as={'h3'} className={'text-TextHColor text-[49px] font-dms font-bold'} text={'Checkout'} />
          <Flex className={'items-center gap-x-2'}>
            <Link to={'/'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Home'} />
            </Link>
            <RiArrowRightSLine className={'text-TextColor text-[15px]'} />
            <Link to={'/checkout'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Checkout'} />
            </Link>
          </Flex>
        </div>
        {/* Checkout Header Part End */}

        {/* Checkout coupon Text Part Start */}
        <div className='pt-[100px]'>
          <Text className={'font-dms text-TextColor text-[16px] pr-[545px] pb-[50px]'} text={"Have a coupon? Click here to enter your code"} />
        </div>
        {/* Checkout coupon Text Part End */}

        {/* Checkout Billing Details Form Part Start */}
        <div>
          <Text className={'font-dms font-bold text-TextHColor text-[39px]'} text={"Billing Details"} />
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
          <div className='w-2/3'>
          <div className='pt-[25px]'>
          <label for="name" className="text-TextHColor text-[16px] font-dms font-bold">Companye Name (optional)</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='Company Name'/>
          </div>
          <div className='pt-[25px]'>
          <label for="name" className="text-TextHColor text-[16px] font-dms font-bold">Country *</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='Please select'/>
          </div>
          <div className='pt-[25px]'>
          <label for="name" className="text-TextHColor text-[16px] font-dms font-bold">Street Address *</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='House number and street name'/>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='Apartment, suite, unit etc. (optional)'/>
          </div>
          <div className='pt-[25px]'>
          <label for="name" className="text-TextHColor text-[16px] font-dms font-bold">Town/City *</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='Town/City'/>
          </div>
          <div className='pt-[25px]'>
          <label for="name" className="text-TextHColor text-[16px] font-dms font-bold">County (optional)</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='County (optional)'/>
          </div>
          <div className='pt-[25px]'>
          <label for="name" className="text-TextHColor text-[16px] font-dms font-bold">Post Code *</label>
          <input className='w-full pb-4 pt-3 border-b' type="number" placeholder='Post Code'/>
          </div>
          <div className='pt-[25px]'>
          <label for="name" className="text-TextHColor text-[16px] font-dms font-bold">Phone *</label>
          <input className='w-full pb-4 pt-3 border-b' type="number" placeholder='Phone'/>
          </div>
          <div className='pt-[25px]'>
          <label for="name" className="text-TextHColor text-[16px] font-dms font-bold">Email Address *</label>
          <input className='w-full pb-4 pt-3 border-b' type="email" placeholder='Email'/>
          </div>
          </div>
        </div>
        {/* Checkout Billing Details Form Part End */}

        {/* Checkout Additional Information Part Start */}
        <div className='pt-[100px] w-2/3'>
          <Text className={'font-dms font-bold text-TextHColor text-[39px]'} text={"Additional Information"} />
          <div className='pt-[25px]'>
          <label for="name" className="text-TextHColor text-[16px] font-dms font-bold">Other Notes (optional)</label>
          <input className='w-full pb-[80px] pt-3 border-b' type="text" placeholder="Notes about your order, e.g. special notes for delivery."/>
          </div>
        </div>
        {/* Checkout Additional Information Part End */}

        {/* Checkout Your Order Part Start */}
        <div className='pt-[100px]'>
          <Text className={'font-dms font-bold text-TextHColor text-[39px]'} text={"Your Order"} />
          <table class="border w-1/2 mt-[50px]">
            <thead className='border'>
              <tr>
                <th className='text-start border p-[10px]'>Product</th>
                <td className='text-start p-[10px]'>Total</td>
              </tr>
            </thead>
            <tbody className='border'>
              <tr className='border'>
                <th className='text-start border p-[10px]'>Product name x 1</th>
                <td className='p-[10px]'>389.99 $</td>
              </tr>
              <tr className='border'>
                <th className='text-start border p-[10px]'>Subtotal</th>
                <td className='p-[10px]'>389.99 $</td>
              </tr>
              <tr className='border'>
                <th className='text-start border p-[10px]'>Total</th>
                <td className='p-[10px]'>389.99 $</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Checkout Your Order Part End */}

        {/* Checkout Proceed to Bank Part Start */}
        <div className='w-2/3 border p-[30px] mt-[60px]'>
          <div>
          <input type="radio" name='bank' class="appearance-none w-3 h-3 bg-white border-2 border-white rounded-full outline checked:bg-black"></input>
          <label className="text-TextHColor text-[16px] font-dms font-bold pl-3">Bank</label>
          <div className='bg-bgcheckout p-4 relative mt-4'><Text className={"font-dms text-[14px] text-TextColor"} text={"Pay via Bank; you can pay with your credit card if you don't have a Bank account."} />
          <TiArrowSortedUp className='absolute top-[-23px] left-[30px] text-bgcheckout text-[38px]'/>
          </div>
          </div>

          <div className='pt-6'>
          <input type="radio" name='bank' class="appearance-none w-3 h-3 bg-white border-2 border-white rounded-full outline checked:bg-black"></input>
          <label className="text-TextHColor text-[16px] font-dms font-bold pl-3">Bank 2</label>
          <Text className={"font-dms text-[14px] text-TextColor pt-4"} text={"Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."} />
          </div>
          <Anchor href={'#'}>
            <button className={'font-dms font-bold text-[14px] text-white bg-black inline-block py-4 px-[70px] mt-8'} type='button'>Proceed to Bank</button>
        </Anchor>
        </div>
        {/* Checkout Proceed to Bank Part End */}
        
    </Container>
    </>
  )
}

export default Checkout