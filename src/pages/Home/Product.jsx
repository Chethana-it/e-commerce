import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { IconButton } from '@mui/material';

const productArr = [
    {
        imageUrl: 'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg',
        price:'100',
        productTitle:'Coke'
    },
    {
        imageUrl: 'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg',
        price:'100',
        productTitle:'Coke'
    },
    {
        imageUrl: 'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg',
        price:'100',
        productTitle:'Coke'
    },
    {
        imageUrl: 'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg',
        price:'100',
        productTitle:'Coke'
    },
    {
        imageUrl: 'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg',
        price:'100',
        productTitle:'Coke'
    },
    {
        imageUrl: 'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg',
        price:'100',
        productTitle:'Coke'
    },
    {
        imageUrl: 'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg',
        price:'100',
        productTitle:'Coke'
    },
    {
        imageUrl: 'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg',
        price:'100',
        productTitle:'Coke'
    },
    {
        imageUrl: 'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg',
        price:'100',
        productTitle:'Coke'
    },
    {
        imageUrl: 'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg',
        price:'100',
        productTitle:'Coke'
    },
    
]

const Product = ({title, rowsCount,slidesPerView}) => {
    return (
        <div className='w-full mt-4 relative z-0'>
            
          <h2 className='text-lg font-bold mb-3'>{title}</h2>
      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
          >
              
              {productArr.map(({ imageUrl, price, productTitle }, index) =>
                  <SwiperSlide key={index}>
                      <ProductUnit imageUrl={imageUrl} price={price} productTitle={productTitle} id={index}/>
             </SwiperSlide>
    )}
      </Swiper>
    </div>
  )
}

export default Product

const ProductUnit = ({ imageUrl, price, productTitle, id }) =>
<IconButton>
    <div className='w-full mb-4'>
        
        <img src={imageUrl} className='w-full object-contain' alt={id} />
        <h3 className='text-sm font-semibold text-stone-900'>{productTitle}</h3>
        <h3 className='text-sm font-semibold text-stone-900'>{ price }</h3>
        
        
        </div>  
        </IconButton>        
