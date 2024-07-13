import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignin, setIssignin] = useState(true);

    const handleSignin = ()=>{
        setIssignin(!isSignin);
    }
    return(
        <>
            <Header />

            <div className="login-container">

                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
                alt="logo" />

                <form className="login-form">
                    <h1>{ isSignin ? 'Sign In' : 'Sign up'}</h1>
                    <input type="text" placeholder="Email or Mobile Number" />

                    { !isSignin && (
                        <input type="text" placeholder="First Name"/>
                    )}
                    <input type="password" placeholder="Password" />
                    <button>{ isSignin ? 'Sign In' : 'Sign up'}</button>

                    { !isSignin ? (
                        <p onClick={ handleSignin }>Already registered ? <a>Sign In now</a></p>
                    ) : <p onClick={ handleSignin }>New to Netflix ? <a>Sign up now</a></p>
                    }
                    
                    <button>Forgot password</button>
                </form>
            </div>
        </>
    )
}

export default Login;