import React from 'react'
import { ApiTopProducts } from '../apifolder/TopProductsApi'
import Product from './Product'

function Products() {
  return (
    <div className='flex flex-1 flex-wrap p-5 items-center justify-center'>
      {
        ApiTopProducts.map((product, index)=>(
            <Product item={product} key={index} />
        ))
      }
    </div>
  )
}

export default Products
