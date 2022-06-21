import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'

function Footer() {

    const SocialStyle= 'm-3 rounded-full cursor-pointer p-2 text-white'

    return (
        <div className='flex items-center justify-around p-2 mobile:flex-col'>
        <div className='flex-1 flex flex-col flex-wrap p-2 mobile:items-start'>
            {/* Store information */}
            <h1 className='text-[25px]'>Tao Cao</h1>
            <p>
                Luôn sẵn sàng giải đáp, tư vấn miễn phí khách hàng
            </p>
            <div className='flex items-center justify-center mt-3 self-start'>
                <div className={SocialStyle + ` bg-blue-700` }>
                    <Facebook/>
                </div>
                <div className={SocialStyle + ` bg-orange-500` }>
                    <Instagram/>
                </div>
                <div className={SocialStyle + ` bg-sky-400` }>
                    <Twitter/>
                </div>
                <div className={SocialStyle + ` bg-red-600` }>
                    <Pinterest/>
                </div>
            </div>
        </div>
        <div className='flex-1 flex flex-col p-2'>        
            <div className='flex m-3 '>
                <LocationOnOutlined/>
                <p className='pl-3'>State of VN</p>
            </div>
            <div className='flex m-3 '>
                <LocalPhoneOutlined/>
                <p className='pl-3'>+84 123456789</p>
            </div>
            <div className='flex m-3 '>
                <EmailOutlined/>
                <p className='pl-3'>taok37c1@gmail.com</p>
            </div>
        </div>
        </div>
    )
}

export default Footer
