import { BsCreditCard2Back } from 'react-icons/bs';
import classes from './LandingPage.module.css';
import BoxComponent from '../../Components/BoxComponent/BoxComponent';

const LandingPage = () => {
  return (
    <>
      <BoxComponent minHeight='100vh'>
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
