import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import Flex from './Flex';
import Data from '../data'


function Items({ currentItems }) {

  return (
    <Flex className={'gap-x-10 flex-wrap laptop:gap-x-4'}>
      {currentItems &&
        currentItems.map((item) => (
          <div className='pt-16 android:ml-[100px] android:pt-[30px] mobile:pt-[20px] '>
            <div className='w-[273px] laptop:w-[225px] tablet:w-[231px] android:w-[260px] mobile:w-full bg-white relative group'>
              <Product
                imgSrc={item.image}
                badge={item.badge}
                para={item.addWishList}
                para2={item.compare}
                para3={item.addCart}
                para4={item.title}
                para5={item.price}
                para6={item.colorType}
              />
            </div>
          </div>
        ))}
    </Flex>
  );
}

function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='pt-[50px] tablet:text-[12px] tablet:items-center android:flex-wrap android:text-[12px] mobile:text-[12px] mobile:flex-wrap flex justify-between'>
        <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex gap-x-4"
        pageLinkClassName="bg-white text-TextColor p-3 tablet:p-2 android:p-[7px] mobile:p-[5px] border-2 border-BorderInfoColor"
      />
        <h2 className='tablet:pr-[29px] android:pl-4 android:pt-5 android:text-[16px] mobile:text-[15px] mobile:pl-[18px] mobile:pt-[20px] '>{`Products from ${itemOffset+1} to ${endOffset<Data.length?endOffset:Data.length} of ${Data.length}`}</h2>
      </div>
    </>
  );
}

export default Pagination
