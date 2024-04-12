import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function CategoryList({categoryList}) {
  return (
    <div className='mt-10'>
        <h2 className='text-orange-600 font-bold text-2xl'>Shop by Category</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4
         md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2'>
                <Link href={'/products-category/ron'} className='flex flex-col 
                items-center bg-orange-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-orange-600
                
                '>
                    <Image src='/rones.png'
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className='text-orange-800 group-hover:text-white'>Rones</h2>
                </Link>
                <Link href={'/products-category/ron'} className='flex flex-col 
                items-center bg-orange-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-orange-600
                
                '>
                    <Image src='/rones.png'
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className='text-orange-800 group-hover:text-white'>Rones</h2>
                </Link>
                <Link href={'/products-category/ron'} className='flex flex-col 
                items-center bg-orange-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-orange-600
                
                '>
                    <Image src='/rones.png'
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className='text-orange-800 group-hover:text-white'>Rones</h2>
                </Link>
                <Link href={'/products-category/ron'} className='flex flex-col 
                items-center bg-orange-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-orange-600
                
                '>
                    <Image src='/rones.png'
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className='text-orange-800 group-hover:text-white'>Rones</h2>
                </Link>
                <Link href={'/products-category/ron'} className='flex flex-col 
                items-center bg-orange-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-orange-600
                
                '>
                    <Image src='/rones.png'
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className='text-orange-800 group-hover:text-white'>Rones</h2>
                </Link>
                <Link href={'/products-category/ron'} className='flex flex-col 
                items-center bg-orange-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-orange-600
                
                '>
                    <Image src='/rones.png'
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className='text-orange-800 group-hover:text-white'>Rones</h2>
                </Link>
                <Link href={'/products-category/ron'} className='flex flex-col 
                items-center bg-orange-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-orange-600
                
                '>
                    <Image src='/rones.png'
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className='text-orange-800 group-hover:text-white'>Rones</h2>
                </Link>
                
        </div>
    </div>
  )
}

export default CategoryList