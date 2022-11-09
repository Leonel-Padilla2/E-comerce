import './Header.css'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <div className='header-container'>
      <a href="/">
        <img className='header-logo' src={logo} alt={'logo'} />
      </a>
      <h3>E-commerce</h3>
    </div>
  )
}

export default Header