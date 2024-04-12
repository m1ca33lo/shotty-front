import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TopCategoryList({categoryList,selectedCategory}) {
  return (
    <div className='flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center'>
                <Link href={'/products-category/ron'} 
                className={`flex flex-col 
                items-center bg-orange-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-orange-600
                w-[150px] min-w-[100px]
                'bg-orange-300 text-white'}
                `}>
                    <Image src='/rones.png'
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className={`text-orange-800 group-hover:text-white
                    ' text-white'}
                    `}>Ron</h2>
                </Link>
                <Link href={'/products-category/ron'} 
                className={`flex flex-col 
                items-center bg-orange-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-orange-600
                w-[150px] min-w-[100px]
                'bg-orange-300 text-white'}
                `}>
                    <Image src='/rones.png'
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className={`text-orange-800 group-hover:text-white
                    ' text-white'}
                    `}>Ron</h2>
                </Link>
                <Link href={'/products-category/ron'} 
                className={`flex flex-col 
                items-center bg-orange-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-orange-600
                w-[150px] min-w-[100px]
                'bg-orange-300 text-white'}
                `}>
                    <Image src='/rones.png'
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className={`text-orange-800 group-hover:text-white
                    ' text-white'}
                    `}>Ron</h2>
                </Link>
        </div>
  )
}

export default TopCategoryList