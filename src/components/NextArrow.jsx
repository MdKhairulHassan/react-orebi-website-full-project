import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const NextArrow = (props) => {
const { className, style, onClick } = props;
  return (
    <div
      className={`bg-BorderColor rounded-full inline-block p-3 text-xl text-white absolute top-[40%] right-2 ${className}`}
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    ><FaLongArrowAltRight /></div>
  )
}

export default NextArrow