import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

export function SignIn(){
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}