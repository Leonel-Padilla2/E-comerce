import './ProductCard.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({productDetails = {}, className}) => {
  const navigate = useNavigate()
  const {id, title, image, category, price} = productDetails
  
  const handleOnClick = () => {
    navigate(`/product/${id}`)
  }

  return (
    <div onClick={handleOnClick} className={`product-card-container ${className}`}>
      <LazyLoadImage effect='blur' width={'100%'} height={'60%'} className='product-image' src={image} alt={title}/>
      <h4 className='product-title'>{title}</h4>
      <span className='product-category'>{category}</span>
      <h2 className='product-price'>${price}</h2>
    </div>
  )
}

export default ProductCard