import React from 'react'
import Ads from './Ads.jsx'
import Product from './Product.jsx'

const Home = () => {
  return (
    <div className='px-1 py-[90px]  w-full h-full overflow-y-scroll object-contain'>
      <Ads />
      <Product title="Trending Products" rowsCount={1} slidesPerView={3} />
    </div>
  )
}

export default Home
