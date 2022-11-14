import ProductOptions from '../ProductOptions/ProductOptions'
import './CartProductCard.css'


const CartProductCard = ({product, className}) => {
  const {image, title, price, quantity, id} = product
  return (
    <div className={`cart-product-card-container ${className}`}>
      <img className='cart-product-image' src={image} alt="product" />
      <h3 className='cart-product-title'>{title}</h3>
      <ProductOptions quantity={quantity} productId={id}/>
      <h2 className='cart-product-price'>${price}</h2>
    </div>
  )
}

export default CartProductCard