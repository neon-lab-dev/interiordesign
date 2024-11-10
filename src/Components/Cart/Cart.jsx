import React from 'react'
import './Cart.css'
import Card from './Card'
import BestSellers from '../BestSellers/BestSellers'
import ProductLike from '../ProductLike/ProductLike'

 const Cart = () => {
  return (
    <div>
      <div className='cart-container'>
      <p className='items'>Your Cart :- 2 items</p>

      <Card />
      <Card />
      
    </div>
    <ProductLike />
    </div>
    
  )
}
export default Cart;
