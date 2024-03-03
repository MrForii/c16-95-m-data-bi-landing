import React from 'react'
import LogoComponent from './UI/logo'
import { primaryColor } from '../constants/colors'
import ButtonPrimary from './UI/button-primary'

const NavBar = () => {
  return (
    <div className='navbar flex justify-between items-center lg:py-5 lg:px-40 md:px-24 sm:px-12 sm:py-3 xs:px-6 xs:py-2 sticky top-0 shadow-md'
      style={{
        backgroundColor: primaryColor
      }}
    >
        <LogoComponent />
        <ButtonPrimary link='https://github.com/No-Country/c16-95-m-data-bi' />
    </div>
  )
}

export default NavBar

