import './ProductCard.css'

const ProductCard = ({productDetails = {}, className}) => {
  const {title, image, category, price} = productDetails
  return (
    <div className={`product-card-container ${className}`}>
      <img className='product-image' src={image} alt="product">
      </img>
      <h4 className='product-title'>{title}</h4>
      <span className='product-category'>{category}</span>
      <h2 className='product-price'>${price}</h2>
    </div>
  )
}

export default ProductCard