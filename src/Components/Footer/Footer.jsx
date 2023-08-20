import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
      <footer className={classes.pageFooter}>
        <div className={classes.footerContainer}>
          <div className={classes.footerList}>
            <Link className={classes.linkStyle}>Employment</Link>
            <Link className={classes.linkStyle}>Contact</Link>
            <Link className={classes.linkStyle}>rug Abuse</Link>
            <Link className={classes.linkStyle}>Womanizer</Link>
          </div>
          
        </div>
      </footer>
    
  );
}

export default Footer;
