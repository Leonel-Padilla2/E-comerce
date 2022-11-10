import './ProductDetails.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSelectedProduct, removeSelectedProduct } from '../../redux/actions/productActions'
import Loading from '../../components/Loading/Loading'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const ProductDetails = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {status} = useSelector(state => state.allProducts)
  const {selectedProduct} = useSelector(state => state.allProducts.allProducts)
  const {image, title, price, description, category} = selectedProduct

  useEffect(()=> {
      dispatch(fetchSelectedProduct(id))

    return() => {
      dispatch(removeSelectedProduct())
    }
      
  }, [id, dispatch])

  if(status.loading === 'pending') {
    return <Loading/>
    
  }
  if (status.loading === 'rejected'){
    return <ErrorMessage message={status.error}/>
  }
  return (
    <div className='product-details-container'>
      <div className='details-container'>
        <img className='detail-image' src={image} alt="product" />
        <div className='detail-text'>
          <h2>{title}</h2>
          <h3>{category}</h3> 
          <p>{description}</p>
          <h2>$ {price}</h2>
          <button className='add-cart-button'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails