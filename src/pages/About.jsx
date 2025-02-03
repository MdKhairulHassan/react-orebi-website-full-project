import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import Aboutimg1 from '../assets/productimg1.jpg'
import Aboutimg2 from '../assets/productimg6.png'
import Anchor from '../components/Anchor';
import { useSelector } from 'react-redux';

const About = () => {
  
  let data2 = useSelector(state => (state.breadCrumb.dayBeforeYesterday))
  let data=useSelector(state=>(state.breadCrumb.previousValue))

  return (
    <>
      <Container className={'max-w-headerContainer py-[120px]'}>
        
        {/* About Header Part Start */}
        <div>
          <Heading as={'h3'} className={'text-TextHColor text-[49px] font-dms font-bold mobile:text-center'} text={'About'} />
          <Flex className={'items-center gap-x-2 mobile:justify-center'}>
            <Link to={data2=="home"?"/":`/${data2}`}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={`${data2}`} />
            </Link>
            <RiArrowRightSLine className={'text-TextColor text-[15px]'} />
            <Link to={data=="home"?"/":`/${data}`}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={`${data}`} />
            </Link>
            <RiArrowRightSLine className={'text-TextColor text-[15px]'} />
            <Link to={'/about'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'About'} />
            </Link>
          </Flex>
        </div>
        {/* About Header Part End */}

        {/* About Image Part Start */}
        <Flex className='pt-[100px] android:flex-wrap mobile:flex-wrap'>
          <div className='w-1/2 android:w-full mobile:w-full relative'>
            <Image imgSrc={Aboutimg1} imgAlt={Aboutimg1} className={'w-[95%] android:w-full mobile:w-full '} />
            <Anchor href={'#'}>
              <Heading as={'p'} className={'text-white bg-black text-[14px] font-dms font-bold absolute top-[85%] left-[45%] translate-x-[-40%] py-4 tablet:py-2 px-14 android:py-5 android:px-[80px] android:top-[82%] mobile:px-[43px] mobile:top-[82%] mobile:py-2 android:left-[46%]'} text={'Our Brands'} />
            </Anchor>
          </div>
          <div className='w-1/2 android:w-full android:mt-10 mobile:w-full mobile:mt-10 relative'>
            <Image imgSrc={Aboutimg2} imgAlt={Aboutimg2} className={'w-[95%] android:w-full mobile:w-full '} />
            <Anchor href={'#'}>
              <Heading as={'p'} className={'text-white bg-black text-[14px] font-dms font-bold absolute top-[85%] left-[45%] translate-x-[-40%] py-4 tablet:py-2 px-14 android:py-5 android:px-[80px] android:top-[82%] android:left-[46%] mobile:px-[43px] mobile:top-[82%] mobile:py-2'} text={'Our Stores'} />
            </Anchor>
          </div>
        </Flex>
        {/* About Image Part End */}

        {/* About Head Text Part Start */}
        <div className='w-full pt-[100px]'>
          <Heading as={'p'} className={'font-dms text-[29px] android:text-center mobile:text-center text-TextHColor'} text={"Orebi is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."} />
        </div>
        {/* About Head Text Part End */}
        
        {/* About Description Text Part Start */}
        <Flex className={'pt-[130px] android:flex-wrap mobile:flex-wrap'}>
        <div className='w-1/3 android:w-full android:text-center mobile:w-full mobile:text-center'>
          <Heading as={'h6'} className={'font-dms font-bold text-[25px] text-TextHColor'} text={"Our Vision"} />
          <Heading as={'p'} className={'font-dms text-[16px] text-TextColor pt-5 android:pt-1 mobile:pt-1 pr-5'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."} />
        </div>
        <div className='w-1/3 android:pt-[50px] android:w-full android:text-center mobile:w-full mobile:text-center mobile:pt-[50px]'>
          <Heading as={'h6'} className={'font-dms font-bold text-[25px] text-TextHColor'} text={"Our Story"} />
          <Heading as={'p'} className={'font-dms text-[16px] text-TextColor pt-5 android:pt-1 mobile:pt-1 pr-5'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."} />
        </div>
        <div className='w-1/3 android:pt-[50px] android:w-full android:text-center mobile:w-full mobile:text-center mobile:pt-[50px]'>
          <Heading as={'h6'} className={'font-dms font-bold text-[25px] text-TextHColor'} text={"Our Brands"} />
          <Heading as={'p'} className={'font-dms text-[16px] text-TextColor pt-5 android:pt-1 mobile:pt-1 pr-5'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."} />
        </div>
        </Flex>
        {/* About Description Text Part End */}

      </Container>
    </>
  )
}

export default About