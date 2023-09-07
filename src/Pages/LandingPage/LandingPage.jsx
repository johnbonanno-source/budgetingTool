import { BsCreditCard2Back } from 'react-icons/bs';
import LCC from '../../Assets/LCC.jpg';
import classes from './LandingPage.module.css';
import axios from 'axios';
import { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    fetch('http://localhost:2001/getUsers', {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())  // Parse the response as JSON
      .then(data => {
        console.log('Data from API call:', data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
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
