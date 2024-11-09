import React from 'react'
import './Cart.css'
import { IMAGES } from '../../assets/Assets'
import ProductLike from '../ProductLike/ProductLike'

 const Card = () => {
  return (
    <div className='card-cart'>
    <div className='card-image-cont'>
      <img src={IMAGES.blue_chair} alt='chair' className='card-image-cart' />
    </div>
    <div className='card-details'>
      <p className='title'>Poise Study Chair with Net Black</p>
      <p className='delivery'> Delivered by 28-01-2024</p>
      <div className='price-details'>
        <p className='price1'>₹414</p>
        <p className='price2'>₹1,249</p>
        <p className='offer'>66% off</p>            
      </div>

      <p className='quantity'>Quantity</p>
      <div className='quantity-box'>
        <button className='quantity-b1'>-</button>
        <p className='number'>1</p>           
        <button className='quantity-b2'>+</button>
      </div>
      <div></div>
      <div className='buy-remove'>
        <button className='buy-now'>Buy Now</button>
        <button className='remove'>Remove</button>
      </div>
    </div>

    
  </div>
  )
}

export default Card