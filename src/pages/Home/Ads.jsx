import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const AdElement = [
  {
    imageUrl:'https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg'
  },
  {
    imageUrl:'https://www.upmenu.com/wp-content/uploads/2023/10/food-advertisement-examples2.jpeg'
  },
  {
    imageUrl:'https://i.insider.com/52af682cecad04527e6ee2dc?width=750&format=jpeg&auto=webp'
  },
  {
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnxxJaj2lPxOwgyCyH-sP3iUx32XLS2TNZUFV5z7zNQ&s'
  },
  {
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1Hj-aZaJo6SbMIpcoUvcGq0xv-BtQZrWKsX4hFO4Yg&s'
  }
]

const Ads = ()=> {
  return (
    <div className="relative z-0"> {/* Adjust margin top as needed */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper rounded-lg"
      >
        {AdElement.map((ad, index) => (
          <SwiperSlide key={index}>
            <AdUnit  imageUrl={ad.imageUrl} />
          </SwiperSlide> 
))}
      </Swiper>
    </div>
  );
};

export default Ads;

const AdUnit = ({ imageUrl}) => (    
    <img
      src={imageUrl}
      className='w-full object-contain'
      alt='' />
 
)