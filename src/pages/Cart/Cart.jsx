import './Cart.css'
import { useSelector } from 'react-redux'
import CartProductCard from '../../components/CartProductCard/CartProductCard'
import emptyCartLogo from '../../img/empty-cart-logo.png'
import Modal from '../../components/Modal/Modal'
import { useModal } from '../../hooks/UseModal'

const Cart = () => {
  const {
    visible,
    handleOnClose,
    showModal,
    modalData
  } = useModal()
  const {products} = useSelector(state => state.cart)
  let totalPrice = 0
  
  products.forEach(product => {
    totalPrice += (product.price * product.quantity)
  });

  const handleOnClick = () => {
    showModal('Error', 'This feature is not available tight now!')
  }

  return (
    <div className='cart-container'>
      <Modal
        visible={visible} onClose={handleOnClose}
        title={modalData.title} message={modalData.message}
      />
      
      <div className='cart-products-container'>
        <h1 className='cart-title'>Your Cart</h1>
        <div className='cart-products'>
        {
          products.length > 0 ?
            products.map(product => <CartProductCard className='cart-product' key={product.id} product={product}/>)
          :
          <div className='no-products-error'>
            <img className='empty-cart-logo' src={emptyCartLogo} alt="empty-cart"/>

            <h2>There are no products yet!</h2>
          </div>
        }
        </div>
        <div className='cart-information'>
          <h1>Summary</h1>
          <div className='cart-price-info'>
            <span>Subtotal</span>
            <span className='price-number'>${totalPrice.toFixed(2)}</span>
          </div>

          <div className='cart-price-info'>
            <span>Estimated shipping</span>
            <span className='price-number'>FREE</span>
          </div>
          
          <div className='cart-price-info total-price'>
            <span>Total</span>
            <span className='price-number'>${totalPrice.toFixed(2)}</span>
          </div>

          <button onClick={handleOnClick} className='pay-button'>PAY</button>
        </div>
      </div>
    </div>
  )
}

export default Cart