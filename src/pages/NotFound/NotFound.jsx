import './NotFound.css'
import error404Logo from '../../img/error-404-logo.png'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

const NotFound = () => {
  return (
    <div className='not-found-page-container'>
      <img className='not-found-logo' src={error404Logo} alt='404-logo'/>
      <h1 className='not-found-title'>Not Found</h1>
      <Link to='/'>
        <Button className='button-404'>GO TO HOMEPAGE</Button>
      </Link>
    </div>
  )
}

export default NotFound