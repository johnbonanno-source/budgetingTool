import { MdPostAdd, MdMessage, MdAccountCircle } from 'react-icons/md';
import App from '../App';
import classes from './MainHeader.module.css';

function MainHeader({ onCreatePost, OnOpenProfile }) {
  return (
    <header className={classes.header}>
      <button className={classes.viewProfile} onClick={ onOpenProfile }><MdAccountCircle/>Profile</button>
      <h1 className={classes.logo}>
      
        Tickled Pickle Inc.
      </h1>
      <p>
        <button className={classes.button} onClick={ onCreatePost }>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;