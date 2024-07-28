import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { validateLoginForm } from "../Utils/validateLoginForm";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { NETFLIX_BACKGROUND_IMAGE, USER_AVATAR } from "../Utils/constants";

const Login = () => {

    const [isSignin, setIssignin] = useState(true);
    const [errorMessage, setErrormessage] = useState(null);
    const email = useRef("");
    const password = useRef("");
    const fullName = useRef("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignin = ()=>{
        setIssignin(!isSignin);
    }

    const handleSubmit = ()=>{
        const message = validateLoginForm(email.current.value, password.current.value, fullName?.current?.value)
        setErrormessage(message)

        // Sign In and Register Logic
        if(message === null){
            
            if(isSignin){

                // Signed in Logic
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrormessage("Username or Password is incorrect.")
                });
            }
            else{

                // Sign up Logic
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    
                    // update User info
                    updateProfile(user, {
                        displayName: fullName.current.value, 
                        photoURL: USER_AVATAR
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(addUser({ 
                                uid: uid, 
                                email:email, 
                                displayName: displayName,
                                photoURL: photoURL
                            }))
                            navigate("/browse")
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setErrormessage(errorCode + " - " + errorMessage)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrormessage(errorCode + " - " + errorMessage)
                });
            }
        }
    }

    return(
        <>
            <Header />

            <div className="login-container">
                <img src={ NETFLIX_BACKGROUND_IMAGE }
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