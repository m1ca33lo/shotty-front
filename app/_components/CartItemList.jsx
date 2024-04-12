import { Button } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function CartItemList({cartItemList,onDeleteItem}) {

    
  return (
    <div>
        <div className='h-[500px] overflow-auto'>
                <div className='flex justify-between items-center p-2 mb-5'>
                    <div className='flex gap-6 items-center'>
                    <Image src='/pack cartavio black web.png' 
                    width={90} height={90} 
                    alt='tienda'
                    className='border p-2'
                    />
                    <div>
                        <h2 className='font-bold'>Pak Cartavio Black</h2>
                        <h2 className=''>Quantity: 3</h2>
                        <h2 className='text-lg font-bold'>S/. 147.00</h2>
                    </div>
                   
                    </div>
                    <TrashIcon 
                    className='cursor-pointer'
                    onClick={()=>onDeleteItem(cart.id)} />
                </div>
        </div>
        
    </div>
  )
}

export default CartItemList