import './CartLogo.css'
import { useSelector } from 'react-redux'
import cartLogo from '../../img/cart-logo.png'

const CartLogo = () => {
  const {products} = useSelector(state => state.cart)
  const {quantity} = (products.length < 1 ? 
    {quantity: 0} 
  :
    products.reduce((previous, current) => {
      return {...current, quantity: (previous.quantity + current.quantity)}
    })
  )

  return (
    <div className='cart-logo-container'>
      {
        quantity > 0 &&
        <span className='quantity-bubble'>{quantity > 9 ? '9+' : quantity}</span>
      }
      <img className='cart-logo' src={cartLogo} alt="cart"/>
    </div>
  )
}

export default CartLogo