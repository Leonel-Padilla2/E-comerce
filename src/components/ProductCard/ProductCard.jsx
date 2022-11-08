import { useNavigate } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({productDetails = {}, className}) => {
  const navigate = useNavigate()
  const {id, title, image, category, price} = productDetails
  
  const handleOnClick = () => {
    navigate(`/product/${id}`)
  }

  return (
    <div onClick={handleOnClick} className={`product-card-container ${className}`}>
      <img className='product-image' src={image} alt="product"/>
      <h4 className='product-title'>{title}</h4>
      <span className='product-category'>{category}</span>
      <h2 className='product-price'>${price}</h2>
    </div>
  )
}

export default ProductCard