import React from 'react'

const Menu = ({className, children}) => {
  return (
    <ul className={`text-[14px] text-TextColor font-dms ${className}`}>{children}</ul>
  )
}

export default Menu