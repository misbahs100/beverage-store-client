import React, { useContext } from 'react';
import './Login.css';
import googlePic from '../../images/google-2.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignInWithGoogle = () => {
        const googelProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googelProvider)
            .then((result) => {
                var user = result.user;
                console.log(user);
                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    userImage: user.photoURL
                }
                setLoggedInUser(newUser)
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="container ">

            <button className="btn login align-items-center" onClick={handleSignInWithGoogle}>
                <div><img src={googlePic} alt="" /></div>
                <div><h3>Login with Google</h3></div>
            </button>
        </div>
    );
};

export default Login;