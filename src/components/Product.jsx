import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'

function Product({item}) {

    const [hoverEffect, setHoverEffect] = useState('opacity-0')
    const handleHoverEnter = () =>{
        setHoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    }
    const handleHoverExit = () =>{
        setHoverEffect(' opacity-0')
    }
    const iconStyle = `h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#279deb] 
    hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer`
    return (
        <div 
            className='flex items-center justify-center min-2-[250px] min-h-[350px] 
            rounded-md shadow-lg m-2 relative' 
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverExit}
        >
            <img src={item.src} alt="product_image" />
            <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100
            ` + hoverEffect}>
                {/* icons */}
                <div className={iconStyle}>
                    <ShoppingCartOutlined/>
                </div>
                <div className={iconStyle}>
                    <FavoriteBorderOutlined/>
                </div>
                <div className={iconStyle}>
                    <SearchOutlined/>
                </div>
            </div>
        </div>
    )
    }

export default Product
