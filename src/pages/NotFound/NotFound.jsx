import './NotFound.css'
import error404Logo from '../../img/error-404-logo.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found-page-container'>
      <img className='not-found-logo' src={error404Logo} alt='404-logo'/>
      <h1 className='not-found-title'>Not Found</h1>
      <Link to='/'>
        <button className='button-404'>Go To Homepage</button>
      </Link>
    </div>
  )
}

export default NotFound