import './Header.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import CartLogo from '../CartLogo/CartLogo'


const Header = () => {
  return (
    <div className='header-container'>
      <Link to={'/'}>
        <img className='header-logo' src={logo} alt={'logo'} />
      </Link>
      <h3>E-commerce</h3>
      <CartLogo/>
    </div>
  )
}

export default Header