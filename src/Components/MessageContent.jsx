import classes from './MessageContent.module.css'


function Title(props) {
    return (
        <div className={classes.chat}>
            <img src="RyanProfile.jpg" alt="Profile"></img> 
        <h1 className={classes.name}> {props.name}</h1>
        <p className={classes.message}>{props.message}</p>
        </div>
    );
}

export default Title;