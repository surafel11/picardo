import app from './firebase-config';
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// import * as firebase from 'firebase';
// import { useNavigate } from "react-router-dom";

class Utils{
    async createUserAccount(email, password, onChange) {
        const authentication = getAuth();
        createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
            sessionStorage.setItem('picardo_token', response._tokenResponse.refreshToken);
            toast.success('Signed Up');
            onChange();
        })
        .catch((error) => {
            console.log(error.code);
            if (error.code === 'auth/wrong-password') {
                toast.error('Please check the Password');
            }
            if (error.code === 'auth/user-not-found') {
                toast.error('Please check the Email');
            }
            if (error.code === 'auth/email-already-in-use'){
                toast.error('Email already in use');
            }
        });
    }

    async signInUser(email, password, onChange){
        const authentication = getAuth();
        signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
            sessionStorage.setItem('picardo_token', response._tokenResponse.refreshToken);
            toast.success('Signed In');
            onChange();
        })
        .catch((error) => {
            console.log(error.code);
            if (error.code === 'auth/wrong-password') {
                toast.error('Please check the Password');
            }
            if (error.code === 'auth/user-not-found') {
                toast.error('Please check the Email');
            }else{
                toast.error('Other Error');
            }
        });
    }

    async signInWithGoogle(){
        const auth = getAuth();
        const provider = new app.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        auth.signInWithPopup(provider);
    }

    async getStoredToken(){
        let authToken = sessionStorage.getItem('picardo_token');
        return authToken;
    }

    async removeStoredToken(){
        console.log(sessionStorage.getItem('picardo_token'));
        sessionStorage.removeItem('picardo_token');
        console.log(sessionStorage.getItem('picardo_token'));
    }

}

export default Utils;