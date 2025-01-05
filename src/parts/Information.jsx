import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaVanShuttle } from "react-icons/fa6";
import { FaUndoAlt } from "react-icons/fa";

const Information = ({paraOne, paraTwo, paraThree }) => {
  return (
    <>
      {/* Information Part Start */}
      <div className='py-[25px] mb-[70px] border-BorderInfoColor border-y'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={"justify-between android:flex-wrap mobile:gap-y-10 mobile:flex-wrap"}>
          <Flex className={'items-center android:w-full gap-2 android:justify-center mobile:w-full mobile:justify-center'}>
            <PiNumberTwoBold className='text-[25px] android:text-[50px] mobile:text-[30px]'/> <Heading as={'h5'} text={paraOne} className={'font-dms text-[16px] text-InformationColor android:text-[30px] mobile:text-[20px]'}/>
          </Flex>
          <Flex className={'items-center android:w-full gap-4 android:pt-10 android:justify-center mobile:w-full mobile:justify-center'}>
            <FaVanShuttle className='text-[25px] android:text-[50px] mobile:text-[30px]'/> <Heading as={'h5'} text={paraTwo} className={'font-dms text-[16px] text-InformationColor android:text-[30px] mobile:text-[20px]'}/>
          </Flex>
          <Flex className={'items-center android:w-full gap-4 android:pt-10 android:justify-center mobile:w-full mobile:justify-center'}>
            <FaUndoAlt className='text-[25px] android:text-[50px] mobile:text-[30px]'/> <Heading as={'h5'} text={paraThree} className={'font-dms text-[16px] text-InformationColor android:text-[30px] mobile:text-[20px]'}/>
          </Flex>
        </Flex>
        </Container>
      </div>
      {/* Information Part End */}
    </>
  )
}

export default Information