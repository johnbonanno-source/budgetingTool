import { BsCreditCard2Back } from 'react-icons/bs';
import LCC from '../../Assets/LCC.jpg';
import classes from './LandingPage.module.css';
import BoxComponent from '../../Components/BoxComponent/BoxComponent';
const LandingPage = () => {
  return (
    <>
      <BoxComponent minHeight='0vh'>
        <img src={LCC} alt='pic' />
        <div>

        <h1 className={classes.logo} style={{ flexShrink: 2, paddingTop: 0 }}>
          BudgetHero <BsCreditCard2Back />
        </h1>
        <h1 className={classes.logo}>Let's Get that budget, balanced.</h1>
        </div>
      </BoxComponent>
    </>
  );
};

export default LandingPage;
