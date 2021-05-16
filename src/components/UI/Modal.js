import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>
}

const ModalOVerlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = ({ onClose, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOVerlay>{children}</ModalOVerlay>,
        portalElement
      )}
    </>
  )
}

export default Modal
