import React, { useState } from 'react'


import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (

    <nav className='w-[100vw]'>

      <div className='container-fluid '>

        <div className="lg:h-fit p-0 row navbar navbar-expand-lg d-flex bg-light ">
          <div className="container-fluid ">
            <span className='navbar-brand flex items-center'>

            <img src="/logo_main.svg" alt="Logo" className="navbar-brand rounded-full object-fill w-[50px] lg:w-[80px]" />


              <div className=' flex-col justify-center hidden lg:flex'>
                <span className='font-bold '>Apex English School</span>
                <span className='small text-gray-500'>Beed Districts</span>
              </div>
              <span className='lg:hidden block text-sm'>Apex English School</span>
            </span>


            <div className="flex " id="navbarNav">
              <ul className="navbar-nav hidden lg:flex align-items-center ">
                <Link to="/" className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">HOME</a>
                </Link >
                <Link to='/aboutus' className="nav-item me-3">
                  <a className="nav-link" href="#">ABOUT US</a>
                </Link>
                <Link to="/faculty" className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">FACULTY</a>
                </Link >
                <Link to="/students" className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">STUDENTS</a>
                </Link >
                <Link to="/curriculum" className="nav-item me-3">
                  <a className="nav-link" > ACADEMICS</a>
                </Link>
                <Link to="/campus" className="nav-item me-3">
                  <a className="nav-link" href="#">GALLERY</a>
                </Link>
                
           
                <li className="nav-item  me-3">
                  <button className='btn  shadow btn-primary'>
                    <Link to="/contact" className="text-light text-decoration-none">
                      <span>Contact</span>
                    </Link>
                  </button>
                </li>

              </ul>
              <div className='d-lg-none d-block'>
                <Menu className='fw-bold fs-1 cursor-pointer ' onClick={()=>setIsOpen(true)}/>
              </div>
              <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white p-4 w-64 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="cursor-pointer text-2xl" onClick={toggleMenu}>
          &times;
        </div>
        <ul className="mt-8 space-y-4 flex flex-col gap-3">
          <Link to="/">
            <a href="#" className="text-white">
              HOME
            </a>
          </Link>
          <Link to="/aboutus">
            <a href="#" className="text-white">
            ABOUT US
            </a>
          </Link>
          <Link to="/faculty">
            <a href="#" className="text-white">
              FACULTY
            </a>
          </Link>
          <Link to="/students">
            <a href="#" className="text-white">
              STUDENTS
            </a>
          </Link>
         
          <Link to="/curriculum" >
            <a href="#" className="text-white">
            
            ACADEMICS
            </a>
          </Link>
       
          <Link to="/campus">
            <a href="#" className="text-white">
              GLIMPSE
            </a>
          </Link>
        
        
          <li>
            <button className="btn bg-blue-500 text-white">
              <Link to="/contact" className="text-white">
                <span>CONTACT US</span>
              </Link>
            </button>
          </li>
        </ul>
      </div>

            </div>
          </div>


        </div>


      </div>
    </nav>

  )
}

export default Navbar
