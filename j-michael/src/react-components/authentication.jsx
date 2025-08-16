import { authentication, googleProvider } from "../config/firebase.jsx";
import {signInWithPopup, signOut} from  "firebase/auth";

export const Authentication = () => {
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(authentication, googleProvider);
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        try {
            await signOut(authentication);
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className = "authentication-main">
        <div className = "authentication-buttons">
            <button onClick={signInWithGoogle}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    </div>
  );
};