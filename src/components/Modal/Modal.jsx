import './Modal.css'
import closeModalLogo from '../../img/close-modal-logo.png'

const Modal = ({ title, message, visible, onClose}) => { 
  return (
    <div className={`overlay ${visible && 'active'}`}>

      <div className='modal-container'>
        <div className='modal-header'>
          <h1>{title}</h1>
          <img className='close-modal-button' onClick={onClose} 
            src={closeModalLogo} alt="close-modal" 
          />
        </div>
        
        <h2 className='modal-message'>{message}</h2>
      </div>
      
    </div>
  )
}

export default Modal