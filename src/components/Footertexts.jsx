import React from 'react'
import Heading from './Heading';

const Footertexts = ({Fhead, Pone, Ptwo, Pthree, Pfour, Pfive, Psix}) => {
  return (
    <>
    <Heading as={'h4'} text={Fhead} className={'android:text-[22px] mobile:text-[27px] mobile:pt-[50px] font-dms font-bold text-[16px] text-TextHColor pb-[15px] mobile:pb-[5px]'} />
    <Heading as={'p'} text={Pone} className={'android:text-[20px] mobile:text-[22px] font-dms text-[14px] text-InformationColor py-[5px]'} />
    <Heading as={'p'} text={Ptwo} className={'android:text-[20px] mobile:text-[22px] font-dms text-[14px] text-InformationColor py-[5px]'} />
    <Heading as={'p'} text={Pthree} className={'android:text-[20px] mobile:text-[22px] font-dms text-[14px] text-InformationColor py-[5px]'} />
    <Heading as={'p'} text={Pfour} className={'android:text-[20px] mobile:text-[22px] font-dms text-[14px] text-InformationColor py-[5px]'} />
    <Heading as={'p'} text={Pfive} className={'android:text-[20px] mobile:text-[22px] font-dms text-[14px] text-InformationColor py-[5px]'} />
    <Heading as={'p'} text={Psix} className={'android:text-[18px] mobile:text-[18px] font-dms text-[14px] text-InformationColor'} />
      
    </>
  )
}

export default Footertexts