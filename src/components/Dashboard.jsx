import React from 'react'
import Text from './Text'

const Dashboard = () => {
  return (
    <>
      <div className={'w-2/3 py-[120px] mt-[210px]'}>
        <div>
          <Text className={"font-dms text-[16px] text-TextColor"} text={"Hello admin (not admin? Log out)"} />
          <Text className={"font-dms text-[16px] text-TextColor pt-5"} text={"From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."} />
        </div>
      </div>
    </>
  )
}

export default Dashboard