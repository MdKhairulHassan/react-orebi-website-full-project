import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import Anchor from '../components/Anchor'
import { useSelector } from 'react-redux'

const Contacts = () => {

  let data2 = useSelector(state => (state.breadCrumb.dayBeforeYesterday))
  let data=useSelector(state=>(state.breadCrumb.previousValue))

  return (
    <>
      <Container className={'max-w-headerContainer py-[120px]'}>
      {/* Contact Header Part Start */}
        <div>
          <Heading as={'h3'} className={'text-TextHColor text-[49px] font-dms font-bold mobile:text-center'} text={'Contacts'} />
          <Flex className={'items-center gap-x-2 mobile:justify-center'}>
            <Link to={data2=="home"?"/":`/${data2}`}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={`${data2}`} />
            </Link>
            <RiArrowRightSLine className={'text-TextColor text-[15px]'} />
            <Link to={data=="home"?"/":`/${data}`}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={`${data}`} />
            </Link>
            <RiArrowRightSLine className={'text-TextColor text-[15px]'} />
            <Link to={'/contact'}>
            <Heading as={'h5'} className={'font-dms text-TextColor text-[12px]'} text={'Contacts'} />
            </Link>
          </Flex>
        </div>
        {/* Contact Header Part End */}

        {/* Contact Form Part Start */}
        <div className='pt-[100px] w-1/2'>
          <Heading as={'h3'} className={'text-TextHColor text-[39px] font-dms font-bold'} text={'Fill up a Form'} />

          <div className='pt-[45px]'>
          <label for="username" className="text-TextHColor text-[16px] font-dms font-bold">Name</label>
          <input className='w-full pb-4 pt-3 border-b' type="text" placeholder='Your name here'/>
          </div>
          <div className='pt-[25px]'>
          <label for="email" className="text-TextHColor text-[16px] font-dms font-bold">Email</label>
          <input className='w-full pb-4 pt-3 border-b' type="email" placeholder='Your email here'/>
          </div>
          <div className='pt-[25px]'>
          <label for="message" className="text-TextHColor text-[16px] font-dms font-bold">Message</label>
          <input className='w-full pb-20 pt-3 border-b' type="text" placeholder='Your message here'/>
          </div>
          <Anchor href={'#'}>
            <button className={'font-dms font-bold text-[14px] text-white bg-black inline-block py-4 px-24 mt-8 mobile:ml-[40px]'} type='submit'>Post</button>
        </Anchor>
        </div>
        {/* Contact Form Part End */}

        {/* Contact Google Map Part Start */}
        <div className='pt-[100px]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10329.405579260427!2d90.36716750340462!3d23.74750902224724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1734290075772!5m2!1sen!2sbd" className='w-full h-[350px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* Contact Google Map Part End */}
      </Container>
    </>
  )
}

export default Contacts