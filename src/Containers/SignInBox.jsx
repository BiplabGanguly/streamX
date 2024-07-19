import React from 'react'
import { Link } from 'react-router-dom'

function SignInBox(props) {
    return (
        <>
            <form className="sigininbox">
                <input type='text' className='form-control' placeholder='john123' />
                <input type='password' className='form-control' placeholder='*********' />
                <div className="checkbox">
                    <input type="checkbox" /> <span>Remember me!</span>
                </div>
                <button type='button' className='btn btn-outline-light'>{props.data}</button>
                <span className='link-signup'>Don't have Account! <Link to="/signup" className='signuplink'><u>Sign up</u></Link>  now</span>
            </form>
        </>
    )
}

export default SignInBox