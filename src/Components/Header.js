import { useDispatch } from "react-redux";
import { removeUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser } from "../Utils/userSlice";
import { NETFLIX_LOGO, USER_AVATAR } from "../Utils/constants";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store)=>store.user)

    // Check If User is Login or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ 
                    uid: uid, 
                    email:email, 
                    displayName: displayName,
                    photoURL: photoURL
                }))
                navigate("/browse")
            }
            else{
                navigate("/")
            }
        });
    }, []);

    //Sign out Logic
    const handleSignOut = ()=>{
        
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate("/")
        }).catch((error) => {
            console.log(error)
        });
    }
    
    return (
        <div className="header">
            <div className="img-sec">
                <img src= { NETFLIX_LOGO } 
                alt="logo"/>
            </div>
            
            { user && 
                (
                    <div className="profile-section">
                        <img src= { user.photoURL === null ? { USER_AVATAR }  : user.photoURL } 
                        alt="logo"/>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                )
            }
        </div>
    )
}

export default Header;