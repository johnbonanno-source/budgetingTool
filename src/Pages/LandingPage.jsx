import { BsCreditCard2Back } from 'react-icons/bs';
import LCC from '../Assets/LCC.jpg';
import Wrapper from '../Components/Wrapper/Wrapper';
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
      <Wrapper>
        <img src={LCC} alt='pic' />
        <h1 className={classes.logo}>
          BudgetHero <BsCreditCard2Back />
        </h1>
      </Wrapper>
    </>
  );
};

export default LandingPage;
