import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { email_validate, password_validate, username_validate } from '../component/Validate';

function SignUpBox(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submit_signup_form = (e) => {
        e.preventDefault();
        if (!email_validate(email)) {
            alert("Please! enter a valid email address.")
        }
        else if (!username_validate(username)) {
            alert("Please! enter a valid username.")
        }
        else if (!password_validate(password)) {
            alert("password is not in format.")
        }
        else if (password != confirmPassword) {
            alert("passwords are not matched.")
        }
        else {
            const formData = {
                email: email,
                username: username,
                password: password
            }
            console.log(formData)
            fetch(`http://127.0.0.1:5000/stream/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    // Check if response status is OK (status code 200-299)
                    if (!response.ok) {
                        alert(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json(); // Parse JSON response
                })
                .then(data => {
                    // Handle the parsed data here
                    console.log('Response:', data);
                    if (data.message == "add sucess") {
                        alert("Signup successfully!")
                    }
                    else {
                        alert("An error occured!")
                    }

                })
                .catch(error => {
                    // Handle errors here
                    alert(error)
                });
        }
        console.log(email, username, password, confirmPassword)
    }
    return (
        <>
            <form className="signupbox" onSubmit={submit_signup_form}>
                <input type='email' className='form-control' placeholder='john@gmail.com' onChange={(e) => setEmail(e.target.value)} required />
                <input type='text' className='form-control' placeholder='john123' onChange={(e) => setUsername(e.target.value)} required />
                <p>*Username must contain only letters and numbers.</p>
                <input type='password' className='form-control' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                <p>*Password must be between 8 and 20 characters long.</p>
                <p>*Password must include at least one uppercase letter.</p>
                <p>*Password must include at least one lowercase letter.</p>
                <p>*Password must contain at least one digit.</p>
                <p>*Password must have at least one special character.</p>
                <input type='password' className='form-control' placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type='submit' className='btn btn-outline-light'>{props.data}</button>
                <span className='link-signup'>Already Sign up! Back to <Link to="/signin" className='signuplink'><u>Sign in</u></Link> </span>
            </form>
        </>
    )
}

export default SignUpBox