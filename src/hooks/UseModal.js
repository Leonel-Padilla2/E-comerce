import { useState } from "react"

export const useModal = (initialValue) => {
  const [visible, setVisible] = useState(initialValue | false)
  const [modalData, setModalData] = useState({title: '', message: ''})

  const handleOnClose = () => {
    setVisible(false)
  }

  const showModal = (title, message) => {
    setVisible(true)
    setModalData(current => ({...current, title, message}))
  } 

  return {
    visible,
    handleOnClose,
    showModal,
    modalData
  }
}