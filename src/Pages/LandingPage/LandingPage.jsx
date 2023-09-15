import { BsCreditCard2Back } from 'react-icons/bs';
import LCC from '../../Assets/LCC.jpg';
import classes from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <>
 
        <img src={LCC} alt='pic' />
        <h1 className={classes.logo}>
          BudgetHero <BsCreditCard2Back />
        </h1>
        <h1 className={classes.logo}>
          Let's Get that budget, balanced.
        </h1>
  
    </>
  );
};

export default LandingPage;
