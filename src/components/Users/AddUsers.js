import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUsers.module.css';

const AddUsers = (props) => {
 const [enteredUsername, setEnteredUsername] = useState('')
 const [enteredAge, setEnteredAge] = useState('')
 const [error, setError] = useState();
    const addUserHandler = event => {
     event.preventDefault();

if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    setError({
        title: 'Invalid input',
        message: 'Please enter a. valid name and age (non-empty valuse).'
    });
    return;
}
if (+enteredAge < 1) {
    setError({
        title: 'Invalid input',
        message: 'Please enter a. valid age (> 0).'
    });
    return;
}

     props.onAddUser(enteredUsername,enteredAge);
      setEnteredUsername('');
      setEnteredAge('')
    };

    const userHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageHandler = event => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };
   
    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
    <label htmlFor="">Username</label>
<input type="text" value={enteredUsername} name="" htmlFor="username" 
onChange={userHandler}/>
<label htmlFor="">Age (Years)</label>
<input type="text" value={enteredAge} name="" htmlFor="age" 
onChange={ageHandler}/>
<Button type='submit'>Add User</Button>
    </form>
    </Card>
    </div>
    );
};

export default AddUsers;