import React from 'react'
import Container from '../components/Container'
import Anchor from '../components/Anchor'

const Adspart2 = ({ className, href, target}) => {
  return (
    <>
    {/* Ads Part 2 Banner Start */}
      <div className='py-[70px] android:py-[10px] mobile:py-[10px]'>
        <Container className={'max-w-headerContainer'}>
          <Anchor href={href} target={target}>
          <div className={`bg-center bg-cover bg-no-repeat py-[140px] laptop:py-[115px] tablet:py-[90px] android:py-[70px] mobile:py-[35px] ${className}`}></div>
          </Anchor>
        </Container>
      </div>
      {/* Ads Part 2 Banner End */}
    </>
  )
}

export default Adspart2