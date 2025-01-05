import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'

const Adspart = ({ imgSrc1, imgSrc2, imgSrc3 }) => {
  return (
    <>
      {/* Ads Part Start */}
      <div className='py-[70px] android:py-[20px] mobile:py-[10px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={'justify-between android:block mobile:block'}>
            <div className='w-[49%] android:w-full mobile:w-full'>
            <img src={imgSrc1} alt={'ad_1'} />
            </div>
            <div className='w-[49%] android:w-full mobile:w-full'>
              <img src={imgSrc2} alt={'ad_2'} className='android:mt-[20px] mobile:mt-[10px]'/>
              <img src={imgSrc3} alt={'ad_3'} className='mt-[31px] laptop:mt-[25px] tablet:mt-[20px] android:mt-[20px] mobile:mt-[10px]'/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Ads Part End */}
    </>
  )
}

export default Adspart