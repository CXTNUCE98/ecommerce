import { Close } from '@mui/icons-material'
import React, { useState } from 'react'

const Announce = () => {
    const [announceStyle, setAnnounceStyle] = useState('bg-blue-600 font-bold text-white items-center justify-center flex')
    const handleClose = () =>{
        setAnnounceStyle(announceStyle + " hidden")
    }
  return (
    <div className={announceStyle}>
      <h2>Hurry up it's 40% off now!</h2>
      <Close className='cursor-pointer' onClick={handleClose}/>
      
    </div>
  )
}

export default Announce
