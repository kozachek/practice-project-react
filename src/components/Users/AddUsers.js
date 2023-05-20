import React, {useState, useRef} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUsers.module.css';

const AddUsers = (props) => {
const nameInputRef = useRef();
const ageInputRef = useRef();

 
 const [error, setError] = useState();
    
 const addUserHandler = event => {
     event.preventDefault();
  const enteredName  = nameInputRef.current.value;
  const enteredUserAge  = nameInputRef.current.value;

if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
    setError({
        title: 'Invalid input',
        message: 'Please enter a. valid name and age (non-empty valuse).'
    });
    return;
}
if (+enteredUserAge < 1) {
    setError({
        title: 'Invalid input',
        message: 'Please enter a. valid age (> 0).'
    });
    return;
}

     props.onAddUser(enteredName,enteredUserAge);
     nameInputRef.current.value = '';
     ageInputRef.current.value = '';
    };


    const errorHandler = () => {
        setError(null);
    };
   
    return (
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
    <label htmlFor="">Username</label>
<input 
type="text"
 htmlFor="username" 
ref={nameInputRef}
/>
<label htmlFor="">Age (Years)</label>
<input 
type="text" 
htmlFor="age" 
ref={ageInputRef}
/>
<Button type='submit'>Add User</Button>
    </form>
    </Card>
    </Wrapper>
    );
};

export default AddUsers;