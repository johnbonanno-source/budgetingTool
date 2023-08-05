import classes from './ProfileModal.module.css'
import ProfileInfo from './ProfileInfo'

function Modal({onClose }) {
    return (

    <>
    <div className={classes.backdrop} onClick={onClose}></div>
    <dialog open className={classes.modal}>
   <ProfileInfo></ProfileInfo>
    </dialog>
    </>
    );
}

export default Modal;   