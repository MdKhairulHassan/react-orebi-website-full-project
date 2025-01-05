import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Footertexts from '../components/Footertexts'
import Image from '../components/Image'
import Logo from '../assets/Logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (

    <div className='bg-CategoryBG py-[60px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={'justify-between android:flex-wrap mobile:flex-wrap mobile:text-center'}>
            <div className='w-[130px] android:w-[49%] mobile:w-full'>
              <Footertexts
                Fhead={'MENU'}
                Pone={'Home'}
                Ptwo={'Shop'}
                Pthree={'About'}
                Pfour={'Contact'}
                Pfive={'Journal'}
              />
            </div>
            <div className='w-[130px] android:w-[49%] mobile:w-full'>
              <Footertexts
                Fhead={'SHOP'}
                Pone={'Category 1'}
                Ptwo={'Category 2'}
                Pthree={'Category 3'}
                Pfour={'Category 4'}
                Pfive={'Category 5'}
              />
            </div>
            <div className='w-[130px] tablet:w-[100px] android:w-[49%] android:mt-[50px] mobile:w-full'>
             <Footertexts
                Fhead={'HELP'}
                Pone={'Privacy Policy'}
                Ptwo={'Terms & Conditions'}
                Pthree={'Special E-shop'}
                Pfour={'Shipping'}
                Pfive={'Secure Payments'}
              />
            </div>
            <div className='w-[260px] tablet:w-[200px] android:w-[49%] android:mt-[50px] mobile:w-full'>
              <Footertexts
                Fhead={'(052) 611-5711 company@domain.com'}
                Pone={'575 Crescent Ave. Quakertown, PA 18951'}
              />
            </div>
            <div className='w-[200px] tablet:w-[90px] android:w-[80px] android:mt-[50px] mobile:w-full mobile:pl-[42%]'>
              <Image imgSrc={Logo} imgAlt={Logo}/>
            </div>
          </Flex>
          <Flex className={'items-center justify-between pt-[70px] android:flex-wrap mobile:flex-wrap'}>
            <Flex className='w-[95px] justify-between pt-[70px] android:text-[30px] android:w-full android:justify-center android:gap-x-10 mobile:w-full mobile:justify-center mobile:gap-x-10 mobile:text-[30px]'>
              <FaFacebookF /> <FaLinkedinIn /> <FaInstagram />
            </Flex>
            <div className='w-[390px] android:w-full android:text-center mobile:w-full mobile:text-center'>
              <Footertexts
                Psix={'2020 Orebi Minimal eCommerce Figma Template by Adveits'}
              />
            </div>
          </Flex>
        </Container>
    </div>
    
  )
}

export default Footer