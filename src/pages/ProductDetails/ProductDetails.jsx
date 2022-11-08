import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/products'
import { selectedProduct } from '../../redux/actions/productActions'
import './ProductDetails.css'

const ProductDetails = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({showError: false, message: 'There was an error, please try again later!'})
  const dispatch = useDispatch()
  const product = useSelector(state => state.allProducts.selectedProduct)
  const {image, title, price, description, category} = product

  useEffect(()=> {
    /*Using feching service and dispatching selectedProduct action*/ 
    setIsLoading(true)
    getProductById(id)
      .then(response => {
        if (response.status !== 200) throw new Error(response.error)
        dispatch(selectedProduct(response.data))
      })
      .catch(() => setError(current => ({...current, showError: true})))
      .finally(() => setIsLoading(false))
      
  }, [id, dispatch])

  if(isLoading) {
    return(
      <h1>Loading Component</h1>
    )
  }
  if (error.showError){
    return(
      <h1>{error.message}</h1>
    )
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