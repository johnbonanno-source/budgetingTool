import { MdPostAdd, MdMessage, MdAccountCircle } from 'react-icons/md';
import App from '../App';
import classes from './MainHeader.module.css';

function MainHeader({ onCreatePost, OnOpenProfile }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        BudgetHero
      </h1>

      <p>
        <button className={classes.viewProfile}>Home</button>
        <button className={classes.viewProfile}>Budget</button>
      </p>
    </header>
  );
}

export default MainHeader;