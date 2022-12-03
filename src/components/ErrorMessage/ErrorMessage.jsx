import './ErrorMessage.css'
import erroIcon from '../../img/error-icon.png'

const ErrorMessage = ({message}) => {
  return (
    <div className='error-message-container'>
      <img className='error-icon' src={erroIcon} alt="error"/>
      <h1>{message}</h1>
    </div>
    
  )
}

export default ErrorMessage