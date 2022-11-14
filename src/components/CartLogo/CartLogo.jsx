import './CartLogo.css'
import { useSelector } from 'react-redux'
import cartLogo from '../../img/cart-logo.png'
import { Link } from 'react-router-dom'

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
    <Link to='/cart' className='cart-logo-container'>
      {
        quantity > 0 &&
        <span className='quantity-bubble'>{quantity > 9 ? '9+' : quantity}</span>
      }
      <img className='cart-logo' src={cartLogo} alt="cart"/>
    </Link>
  )
}

export default CartLogo