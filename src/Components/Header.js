import { useDispatch } from "react-redux";
import { removeUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser } from "../Utils/userSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store)=>store.user)

    // Check If User is Login or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            console.log(user)
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
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
                alt="logo"/>
            </div>
            
            { user && 
                (
                    <div className="profile-section">
                        <img src= { user.photoURL === null ? 'https://occ-0-3662-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQy8F5qqqz7Ze4-qQ7KqH_sJoSEAoJAKbZy7Ze5SVjd2GpUhvcP_IG8_MVLzbICQJb0dH0j6LC6te93SQpKs1lDcXd-yxPw.png?r=d0a'  : user.photoURL } 
                        alt="logo"/>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                )
            }
        </div>
    )
}

export default Header;