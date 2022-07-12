import { initializeApp as firebaseInit } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth as getAuthOfApp, initializeAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_APP_NAME } from "../constants/global.js";

// Firebase config needed to initialize Firebase app
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
};

// Initializing Firebase App
const FirebaseApp = firebaseInit(firebaseConfig, FIREBASE_APP_NAME)

/**************************/
/********* UTILS **********/
/**************************/

// SignUp with email and password util.
const SignUpWithEmailPassword = async (email, password) => {

    try {
        // TODO Response Management of `SignUpWithEmailPassword` Util
        const user = await createUserWithEmailAndPassword(getAuthOfApp(FirebaseApp), email, password)

        console.log('user', user)
    } catch (err) {
        console.log('code', err.code)
        console.log('message', err.message)
    }
}

// TODO Login With Email and Password
const LoginWithEmailPassword = async (email, password) => {
    
    try {
        // TODO Response Management of `LoginWithEmailPassword` Util
        const user = await signInWithEmailAndPassword(getAuthOfApp(FirebaseApp), email, password)

        console.log('user', user)
    } catch (err) {
        console.log('code', err.code)
        console.log('message', err.message)
    }
}

/**********************************/
/************* EXPORTS ************/
/**********************************/

export {
    FirebaseApp,
    SignUpWithEmailPassword,
    LoginWithEmailPassword
}


