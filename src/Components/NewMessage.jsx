import classes from './NewMessage.module.css'


function NewMessage(props) {
    return (
        <form className={classes.form}>
            <p className={classes.contentOrder}>
                <label htmlFor='body'>Message</label>
                <textarea id="body" required rows ={5} onChange={props.onMessageChange}/>
            </p>

        <p className={classes.contentOrder}>
            <label htmlFor='name'>Your Name</label> 
            <input type='text' id='name' required onChange={props.onNameChange} />
        </p>
        <button className={classes.doneButton}>DONE</button>

        </form>
    )
}

export default NewMessage;