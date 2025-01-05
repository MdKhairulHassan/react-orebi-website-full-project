import React from 'react'
import Container from '../components/Container'
import Anchor from '../components/Anchor'

const Banner = ({className ,href, target}) => {
  return (
    <>
      {/* Banner Part Start */}
      <div className='bg-BannerBG'>
        <Container className={'max-w-headerContainer'}>
          <Anchor href={href} target={target}>
          <div className={`bg-center bg-cover bg-no-repeat py-[223px] laptop:py-[175px] tablet:py-[135px] android:py-[100px] mobile:py-[56px] ${className}`}></div>
          </Anchor>
        </Container>
      </div>
      {/* Banner Part End */}
    </>
  )
}

export default Banner