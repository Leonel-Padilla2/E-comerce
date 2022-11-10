import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/actions/productActions'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Home.css'

const Home = () => {
  const {products} = useSelector(state => state.allProducts)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({showError: false, message: 'There was an error, please try again later!'})
  
  useEffect(()=> {
    dispatch(fetchProducts())
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