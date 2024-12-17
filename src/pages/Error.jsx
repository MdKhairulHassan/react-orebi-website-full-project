import React from 'react'
import { FaSearch } from "react-icons/fa";
import Container from '../components/Container'
import Anchor from '../components/Anchor';
import Heading from '../components/Heading';

const Error = () => {
  return (
    <>
      <Container className={'max-w-headerContainer pb-[140px] pt-[70px]'}>
        <div>
          <Heading as={'h5'} className='font-dms font-bold text-TextHColor text-[200px]' text={'404'} />
          <Heading as={'p'} className='font-dms text-TextColor text-[16px] w-[55%]' text={"The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"} />
        </div>
        <div className='w-[53%] relative mt-10'>
         <input className='w-full p-4 border' type="text" placeholder='Type to search'/><FaSearch  className='absolute top-[50%] translate-y-[-50%] right-4'/>
        </div>
        <Anchor href={'/'}>
          <Heading as={'h5'} className={'font-dms font-bold text-[14px] text-white bg-black inline-block py-4 px-12 mt-8'} text={'Back to Home'} />
        </Anchor>
      </Container>
    </>
  )
}

export default Error

