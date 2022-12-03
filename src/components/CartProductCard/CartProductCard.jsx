import './CartProductCard.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ProductOptions from '../ProductOptions/ProductOptions'



const CartProductCard = ({product, className}) => {
  const {image, title, price, quantity, id} = product
  return (
    <div className={`cart-product-card-container ${className}`}>
      <LazyLoadImage className='cart-product-image' src={image} alt="product" effect='blur'/>
      <h3 className='cart-product-title'>{title}</h3>
      <ProductOptions quantity={quantity} productId={id}/>
      <h2 className='cart-product-price'>${price}</h2>
    </div>
  )
}

export default CartProductCard