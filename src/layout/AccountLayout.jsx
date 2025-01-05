import React from 'react'
import Account from '../pages/Account'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container'

const AccountLayout = () => {
  return (
    <Container className={'max-w-headerContainer flex mobile:flex-wrap'}>
      <Account />
      <Outlet />
    </Container>
  )
}

export default AccountLayout