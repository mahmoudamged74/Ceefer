import React, { useEffect, useState } from 'react'
import style from './NotFound.module.css'
import found from '../../assets/images/error.svg'


export default function NotFound() {
    const [first, setfirst] = useState(0);
    
    useEffect(()=>{

    },[]);

  return <>
    <div className='py-5 d-flex align-items-center justify-content-center'>

<img src={found} alt="steve jobs" className='w-75 '  />

</div>
  </>
}
