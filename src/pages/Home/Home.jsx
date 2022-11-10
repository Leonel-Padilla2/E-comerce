import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/actions/productActions'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Home.css'
import Loading from '../../components/Loading/Loading'

const Home = () => {
  const {status} = useSelector(state => state.allProducts)
  const {products} = useSelector(state => state.allProducts.allProducts)
  const dispatch = useDispatch()
  
  useEffect(()=> {
    dispatch(fetchProducts())
  }, [dispatch])

  if (status.loading === 'pending'){
    return <Loading/>
  }
  if (status.loading === 'rejected') {
    return <h1>{status.error}</h1>
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