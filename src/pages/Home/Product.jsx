import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { IconButton, Rating } from '@mui/material';

const productArr = [
    {
        imageUrl: 'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg',
        price:'Rs. 100',
        productTitle:'Coke'
    },
    {
        imageUrl: 'https://i.insider.com/52af682cecad04527e6ee2dc?width=750&format=jpeg&auto=webp',
        price:'Rs. 200',
        productTitle:'Cream Soda'
    },
    {
        imageUrl: 'https://www.upmenu.com/wp-content/uploads/2023/10/food-advertisement-examples2.jpeg',
        price:'Rs. 300',
        productTitle:'EGB'
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
        <div style={
            {
                boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"
            }
        } className='w-full mt-4 relative z-0 p-2'>
            
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
        <div
            className='w-full mb-4'>
        
        <img src={imageUrl} className='w-full object-contain' alt={id} />
            <h3 className='text-sm font-semibold text-stone-900'>{productTitle}</h3>
            <Rating
                name='hover-feedback'
                value={3.3}
                precision={0.5}
                readOnly
            />
        <h3 className='text-sm font-semibold text-stone-900'>{ price }</h3>
        
        
        </div>  
        </IconButton>        
