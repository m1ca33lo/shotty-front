import Image from 'next/image'
import React from 'react'

function MyOrderItem({orderItem}) {
  return (
    <div className='w-[60%]'>
    
    <div className='grid grid-cols-5  mt-3 items-center'>
        <Image src='/pack cartavio black web.png'
        width={80}
        height={80}
        alt='image'
        className='bg-gray-100 p-5 rounded-md border'
        />
        <div className='col-span-2'>
            <h2>Pack Cartavio Black</h2>
            <h2>Item Price: S/.49.00</h2>
        </div>
        <h2 className=''>Quantity:1</h2>
        <h2>Price: S/. 49.00</h2>
       

    </div>
    <hr className='mt-3'></hr>
    </div>
  )
}

export default MyOrderItem