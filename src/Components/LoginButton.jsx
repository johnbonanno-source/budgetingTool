import classes from './LoginButton.module.css';

function LoginButton({onClick,buttonText}){
return (
    <button className={classes.logOut} onClick={onClick}>{buttonText}</button>
)
}


export default LoginButton;