import React, { useContext } from 'react';
import { useState } from 'react';
import logo from '../../figures/logo2.png'
import './Login.css'
import firebase from "firebase/app"
import "firebase/auth"
import { LoginContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import ReplayIcon from '@material-ui/icons/Replay';
import CachedIcon from '@material-ui/icons/Cached';
import { Button } from '@material-ui/core';
const firebaseConfig = {
    apiKey: "AIzaSyAPurJsWBs4Pahs4erO0mjRz3gECYZuKPo",
    authDomain: "red-onion-bbfe4.firebaseapp.com",
    projectId: "red-onion-bbfe4",
    storageBucket: "red-onion-bbfe4.appspot.com",
    messagingSenderId: "451958480048",
    appId: "1:451958480048:web:8f31838820836fc15e2f75"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
const Login = () => {
    const [loggedInUser , setLoggedInUser] = useContext(LoginContext);
    const [round , setRound] = useState(false)
    const [newUser , setnewUser] = useState(true);
    const [user , setUser] = useState({
        name: "",
        email: "",
        password: "",
        isLogin: false
    })
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleBlur = (e) => {
            let isFormValid = true;
            if(e.target.name === 'email'){
                isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
            }
            if(e.target.name === 'password'){
                const isLenghtTrue = e.target.value.length > 6;
                const hasNumber = /\d{1}/.test(e.target.value) ;
                isFormValid = isLenghtTrue && hasNumber;
                
            }
            if(isFormValid){
                const newUserInfo = {...user}
                newUserInfo[e.target.name] = e.target.value;
                setUser(newUserInfo);
            }
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const loginUser = result.user;
            setLoggedInUser(loginUser);
            history.replace(from);
            console.log(loginUser);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    const updateUserName = name =>{
        const user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name
        }).then(function() {
          console.log('user name updated successfully')
        }).catch(function(error) {
          console.log(error)
        });
    }
    const handleSubmit = (e) => {
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                updateUserName(user.name);
                history.replace(from);
            })
            .catch( error => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch(function(error) {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }
        setRound(true)
        e.preventDefault();
    }
    return (
        <div className="login-form text-center">
            <img src={logo} className="figure-img img-fluid my-4"  width="180px" alt="logo"/>
            <form action="" onSubmit={handleSubmit}>
                {
                    newUser ? <input onBlur={handleBlur} type="text" placeholder="Name"/> : ""
                }
                <input onBlur={handleBlur} name="email" type="email" placeholder="Email"/>
                <input onBlur={handleBlur} name="password" type="password" placeholder="Password"/>
                <input type="submit" value={
                    newUser ? `Sign Up to contineu` : `Login to contineu`
                } onClick={handleSubmit}/>
                
            </form>

            
            <p style={{cursor: "pointer"}} onClick={() => setnewUser(!newUser)} className="text-primary">Have an account ? sign in</p>
            <Button onClick={handleGoogleSignIn} variant="contained" className="m-0 mt-3 w-100" style={{background: "orange" , color: "white"}}>Sign in with google</Button>
            {
                round && <CachedIcon className="reload"/>
            }
        </div>
    );
};

export default Login;