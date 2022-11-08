import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../redux/actions/productActions'
import { getAllProducts } from '../../services/products'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Home.css'

const Home = () => {
  const {products} = useSelector(state => state.allProducts)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({showError: false, message: 'There was an error, please try again later!'})
  
  useEffect(()=> {
    /*Using feching service and dispatching setProducts actions*/ 
    setIsLoading(true)
    getAllProducts()
      .then(response => {
        if(response.status !== 200) throw new Error(response.error)  
        dispatch(setProducts(response.data))
      })
      .catch(() => setError((current)=>({...current, showError: true})))
      .finally(()=> setIsLoading(false))
    
  }, [dispatch])

  if (isLoading){
    return <h1>Loading component</h1>
  }
  if (error.showError) {
    return <h1>{error.message}</h1>
  }
  return (
    <div className='home-container'>
      <div className='products-container'>
      { 
        products.map(product => 
          <ProductCard className={'product'} key={product.id} productDetails={product}/>
        )
      }
      </div>

    </div>
  )
}

export default Home