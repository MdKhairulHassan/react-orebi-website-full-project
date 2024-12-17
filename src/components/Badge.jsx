import React from 'react'

const Badge = ({className ,text}) => {
  return (
    <div className={`font-bold font-dms text-[14px] py-3 px-8 bg-black text-white w-[90px] ${className}`}>{text}</div>
  )
}

export default Badge