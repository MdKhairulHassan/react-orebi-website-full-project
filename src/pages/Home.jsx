import React from 'react'
import ad_1 from '../assets/Ad_1.jpg'
import ad_2 from '../assets/Ad_2.png'
import ad_3 from '../assets/Ad_3.jpg'
import productimg1 from '../assets/productimg1.jpg'
import productimg2 from '../assets/productimg2.png'
import productimg3 from '../assets/productimg3.png'
import productimg4 from '../assets/productimg4.png'
import productBimgone from '../assets/productBimgone.png'
import productBimgtwo from '../assets/productBimgtwo.png'
import productBimgthree from '../assets/productBimgthree.png'
import productBimgfour from '../assets/productBimgfour.png'
import productSimgone from '../assets/productSimgone.png'
import productSimgtwo from '../assets/productSimgtwo.png'
import productSimgthree from '../assets/productSimgthree.png'
import productSimgfour from '../assets/productSimgfour.png'
import PrevArrow from '../components/PrevArrow'
import NextArrow from '../components/NextArrow'
import Banner from '../parts/Banner';
import Information from '../parts/Information';
import Adspart from '../parts/Adspart';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Product from '../components/Product';
import Flex from '../components/Flex';
import Adspart2 from '../parts/Adspart2';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';

const Home = () => {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow/>,
    // arrows: true,
  };


  return (
    
    <>
      
      {/* Banner Part Start */}
      <Banner
        href={'#'}
        target={'_blank'}
        className={"bg-banner"}
      />
      {/* Banner Part End */}

      
      {/* Information Part Start */}
      <Information
        paraOne={'Two years warranty'}
        paraTwo={'Free shipping'}
        paraThree={'Return policy in 30 days'}
      />
      {/* Information Part End */}

      
      {/* Ads Part Start */}
      <Adspart
      imgSrc1={ad_1}
      imgSrc2={ad_2}
      imgSrc3={ad_3}
      />
      {/* Ads Part End */}

      
      {/* Product Slider Part Start */}
      <div className='py-[70px]'>
        <Container className={'max-w-headerContainer'}>
          <Heading as={'h3'} className={'font-bold font-dms text-TextHColor text-[39px] pb-[58px] pl-2'} text={'New Arrivals'} />
          <Slider {...settings}>
            <div className='w-[24%] bg-white relative group px-2'>
              <Product
                imgSrc={productimg1}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group px-2'>
              <Product
                imgSrc={productimg2}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group px-2'>
              <Product
                imgSrc={productimg3}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group px-2'>
              <Product
                imgSrc={productimg4}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
         </Slider>
        </Container>
      </div>
      {/* Product Slider Part End */}

      
      {/* Product Bestsellers Part Start */}
      <div className='py-[70px]'>
        <Container className={'max-w-headerContainer'}>
          <Heading as={'h3'} className={'font-bold font-dms text-TextHColor text-[39px] pb-[58px] pl-2'} text={'Our Bestsellers'} />
       <Flex className={'justify-between'}>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productBimgone}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productBimgtwo}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productBimgthree}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productBimgfour}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
         </Flex>
      </Container>
      </div>
      {/* Product Bestsellers Part End */}

      
      {/* Ads Part 2 Banner Start */}
      <Adspart2
        href={'#'}
        target={'_blank'}
        className={'bg-Adspart2'}
      />
      {/* Ads Part 2 Banner End */}

      
       {/* Product Special Offers Part Start */}
      <div className='pt-[70px] pb-[140px]'>
        <Container className={'max-w-headerContainer'}>
          <Heading as={'h3'} className={'font-bold font-dms text-TextHColor text-[39px] pb-[58px] pl-2'} text={'Special Offers'} />
       <Flex className={'justify-between'}>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productSimgone}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productSimgtwo}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productSimgthree}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
            <div className='w-[24%] bg-white relative group'>
              <Product
                imgSrc={productSimgfour}
                badge='New'
                para={'Add to Wish List'}
                para2={'Compare'}
                para3={'Add to Cart'}
                para4={'Basic Crew Neck Tee'}
                para5={'$44.00'}
                para6={'Black'}
              />
            </div>
         </Flex>
      </Container>
      </div>
      {/* Product Special Offers Part End */}
      
    </>
  )
}

export default Home