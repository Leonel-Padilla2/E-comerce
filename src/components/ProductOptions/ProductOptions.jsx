import './ProductOptions.css'
import increaseLogo from '../../img/increase-logo.png'
import decreaseLogo from '../../img/decrease-logo.png'
import removeLogo from '../../img/remove-logo.png'
import { useDispatch } from 'react-redux'
import { decreaseQuantityProductCart, increaseQuantityProductCart, removeProductCart } from '../../redux/actions/cartActions'

const ProductOptions = ({className, quantity, productId}) => {
  const dispatch = useDispatch()

  const handleDecreaseOnClick = () => {
    if (quantity > 1) dispatch(decreaseQuantityProductCart(productId))
  }

  const handleIncreaseOnClick = () => {
    dispatch(increaseQuantityProductCart(productId))
  }

  const handleRemoveOnClick = () => {
    dispatch(removeProductCart(productId))
  }

  return (
    <div className={`product-option-container ${className}`}>
      <img 
        onClick={handleIncreaseOnClick}
        className='product-option' 
        src={increaseLogo} alt="increase-logo"
      />
      <img 
        className='product-option' 
        onClick={handleDecreaseOnClick}
        src={decreaseLogo} alt="decrease-logo"
      />
      <h3>{quantity}</h3>
      <img 
        className='product-option'
        onClick={handleRemoveOnClick}
        src={removeLogo} alt="remove-logo"
      />
    </div>
  )
}

export default ProductOptions