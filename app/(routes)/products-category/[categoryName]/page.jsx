import React from 'react'
import TopCategoryList from '../_components/TopCategoryList';
import ProductList from '@/app/_components/ProductList';

async function ProductCategory({params}) {
  return (
    <div>
        <h2 className='p-4 bg-primary text-white font-bold
        text-3xl text-center mb-5'>Ron</h2>
        <TopCategoryList
        />
        <div className='p-5 md:p-10'>
            <ProductList/>
        </div>
    
    </div>
  )
}

export default ProductCategory