import { BsCreditCard2Back } from 'react-icons/bs';
import classes from './LandingPage.module.css';
import BoxComponent from '../../Components/BoxComponent/BoxComponent';
import {validateSessionToken} from '../../Api/SessionTokenApi';

const validateSessionTokenHelper = async() => {
  const isTheSessionTokenValid = await validateSessionToken();
  console.log(isTheSessionTokenValid);
}

const LandingPage = () => {
  validateSessionTokenHelper();

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
