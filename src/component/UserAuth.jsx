import React from 'react';
import { useLocation } from 'react-router-dom';

function UserAuth() {
    const location = useLocation();
    const isLogin = location.pathname.startsWith("/signin");
    const isRegister = location.pathname.startsWith("/signup");

    return (
        <>
            {
                isLogin ? <h2>Sign In</h2> :
                    isRegister ? <h2>Sign Up</h2> :
                        <h2>wrong</h2>
            }

        </>
    )
}

export default UserAuth;



// const location = useLocation();
// const isPublicRoute = !location.pathname.startsWith("/admin/");