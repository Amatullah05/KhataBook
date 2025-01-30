import React from 'react'

const Navbar = ({changeTheme , theme}) => {
  return (
    <>
    <nav className="navbar bg-primary shadow-lg">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 text-white h1">KhataBook</span>
      <button className='btn btn-secondary btn-sm' onClick={()=>changeTheme()}>Change Theme</button>
    </div>
    </nav>
  </>
  )
}

export default Navbar;