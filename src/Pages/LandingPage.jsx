import { BsCreditCard2Back } from "react-icons/bs";
import LCC from "../Assets/LCC.jpg";
import Wrapper from "../Components/Wrapper/Wrapper";
import classes from "./LandingPage.module.css"

const LandingPage = () => {
  return (
    <>
      <Wrapper>
        <img src={LCC} alt="pic" />
        <h1 className={classes.logo}>
        <Wrapper>

          BudgetHero <BsCreditCard2Back />
          </Wrapper>

        </h1>
      </Wrapper>
    </>
  );
};

export default LandingPage;
