import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import { Routes, Route ,Link } from 'react-router-dom'
// import Categories from '../components/Categories'

import Cart from '../pages/Cart'
import CategoryPage from '../pages/CategoryPage'
import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'

const Navbar = () => {
    const style = 'text-[14px] cursor-pointer ml-[25px] mobile:ml-[10px]'
  return (
    <div className='navbar h-[60px] shadow-md relative z-10'>
        <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] 
            flex justify-between items-center mobile:pl-0 mobile:pr-0"
        >
        {/* left div */}
            <div className='left flex flex-1 items-center'>
                <div className='language cursor-pointer text-[16px] mobile:hidden'>
                    En
                </div>
                <div className="searchInput flex border-[2px] border-solid 
                    border-lighgrey rounded-md items-center ml-[10px] p-[5px] 
                    focus-within:border-[#279deb] transition-all"
                >
                    <input className='input outline-none mobile:w-[50px]
                    ' type="text" />
                    <Search className='' style={{fontSize: '16px'}}/>
                </div>
            </div>
            {/* Logo */}
            <div className='center flex-1 text-center '>
                <Link to="/" className='logo font-bold text-lg mobile:text-sm'>Summer Kings</Link>
            </div>
            {/* Right div */}
            <div className='right flex flex-1 items-center justify-end mobile:flex-[1.5] mobile:justify-center'>
                <Link to="/register" className={style}>Register</Link>
                <Link to="/login" className={style}>Sign in</Link>
                <div className={style}>
                <Badge badgeContent={2} color='primary'>
                    <ShoppingCartOutlined/>
                </Badge>
                </div>
            </div>
            
        </div>    
    </div>
    
  )
}

export default Navbar
