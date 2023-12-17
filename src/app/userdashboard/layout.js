import React from 'react'
import UserNav from '../components/UserNav'

const layout = ({ children }) => {
  return (
    <div>
        <UserNav/>
         {children}
    </div>
  )
}

export default layout
