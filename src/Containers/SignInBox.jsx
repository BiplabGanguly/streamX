import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function SignInBox(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const formData = {
        username: username,
        password: password
    }
    const navigate = useNavigate();
    const signin_submit = (e) => {
        e.preventDefault();

        fetch(`http://127.0.0.1:5000/stream/signin`, {
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
                if (data.email != undefined) {
                    sessionStorage.setItem("user_email", data.email);
                    sessionStorage.setItem("token", data.token);
                    navigate('/')
                    window.location.reload()
                }
                else {
                    alert("Validation error..")
                }

            })
            .catch(error => {
                // Handle errors here
                alert(error)
            });
    }


    return (
        <>
            <form className="sigininbox" onSubmit={signin_submit}>
                <input type='text' className='form-control' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} name='username' />
                <input type='password' className='form-control' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} name='password' />
                <div className="checkbox">
                    <input type="checkbox" /> <span>Remember me!</span>
                </div>
                <button type='submit' className='btn btn-outline-light'>{props.data}</button>
                <span className='link-signup'>Don't have Account! <Link to="/signup" className='signuplink'><u>Sign up</u></Link>  now</span>
            </form>
        </>
    )
}

export default SignInBox;