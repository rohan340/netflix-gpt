import { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginForm } from "../Utils/validateLoginForm";

const Login = () => {

    const [isSignin, setIssignin] = useState(true);
    const [errorMessage, setErrormessage] = useState(null);
    const email = useRef("");
    const password = useRef("");
    const fullName = useRef("");

    const handleSignin = ()=>{
        setIssignin(!isSignin);
    }

    const handleSubmit = ()=>{
        const message = validateLoginForm(email?.current?.value, password?.current?.value, fullName?.current?.value)
        setErrormessage(message)
    }
    return(
        <>
            <Header />

            <div className="login-container">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
                alt="logo" />

                <form onSubmit={e=>e.preventDefault()} className="login-form">
                    <h1>{ isSignin ? 'Sign In' : 'Sign up'}</h1>
                    <input ref={ email } type="text" placeholder="Email or Mobile Number" />

                    { !isSignin && (
                        <input ref={ fullName } type="text" placeholder="Full Name"/>
                    )}
                    <input ref={ password } type="password" placeholder="Password" />
                    <span className="login-error">{ errorMessage }</span>
                    
                    <button onClick={ handleSubmit }>{ isSignin ? 'Sign In' : 'Sign up'}</button>

                    { !isSignin ? (
                        <p onClick={ handleSignin }>Already registered ? <a>Sign In now</a></p>
                    ) : <p onClick={ handleSignin }>New to Netflix ? <a>Sign up now</a></p>
                    }
                </form>
            </div>
        </>
    )
}

export default Login;