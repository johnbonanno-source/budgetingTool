import classes from "./PageFooter.module.css";

function PageFooter() {
  return (
    <footer className={classes.pageFooter}>
      <div className={classes.footerContainer}>
        <div className={classes.footerList}>
          <p>Employment</p>
          <p>Contact</p>
          <p>Drug Abuse</p>
          <p>Womanizer</p>
        </div>
        <div className={classes.footerList}>
          <p>Employment</p>
          <p>Contact</p>
          <p>Drug Abuse</p>
          <p>Womanizer</p>
        </div>
      </div>
    </footer>
  );
}

export default PageFooter;
