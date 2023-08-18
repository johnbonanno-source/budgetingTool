import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={classes.container}>
      <footer className={classes.pageFooter}>
        <div className={classes.footerContainer}>
          <div className={classes.footerList}>
            <p><Link>Employment</Link></p>
            <p>Contact</p>
            <p>rug Abuse</p>
            <p>Womanizer</p>
          </div>
          <div className={classes.footerList}>
            <p>Employment</p>
            <p>Contact</p>
            <p>rug Abuse</p>
            <p>Womanizer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
