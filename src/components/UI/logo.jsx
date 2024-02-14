import Logo from '../../assets/imgs/Chef Hat.png'

const LogoComponent = () => {
    return (
        <div className='flex gap-1'>
        <img src={Logo} alt="Logo" className='w-10 h-10'/>
            <p className='flex gap-1 items-center text-xl xs:hidden lg:flex md:flex sm:flex'>
            <b>Data</b>Chef
            </p>
      </div>
    )
}

export default LogoComponent