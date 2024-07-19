import React from 'react';
import { useLocation } from 'react-router-dom';
import SignInBox from '../Containers/SignInBox';
import SignUpBox from '../Containers/SignUpBox';

function UserAuth() {
    const location = useLocation();
    const isLogin = location.pathname.startsWith("/signin");
    const isRegister = location.pathname.startsWith("/signup");

    return (
        <>
            <div className="container-fluid authbox">
                <div className="row siniin">
                    {
                        isLogin ? <SignInBox data="sign in" /> :
                            isRegister ? <SignUpBox data="sign up" /> :
                                <h2>wrong</h2>
                    }
                </div>
            </div>





        </>
    )
}

export default UserAuth;



// const location = useLocation();
// const isPublicRoute = !location.pathname.startsWith("/admin/");