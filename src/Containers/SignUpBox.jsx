import React from 'react'
import { Link } from 'react-router-dom'

function SignUpBox(props) {
    return (
        <>
            <form className="signupbox">
                <input type='email' className='form-control' placeholder='john@gmail.com' />
                <input type='text' className='form-control' placeholder='john123' />
                <input type='password' className='form-control' placeholder='*********' />
                <input type='password' className='form-control' placeholder='*********' />
                <button type='button' className='btn btn-outline-light'>{props.data}</button>
                <span className='link-signup'>Already Sign up! Back to <Link to="/signin" className='signuplink'><u>Sign in</u></Link> </span>
            </form>
        </>
    )
}

export default SignUpBox