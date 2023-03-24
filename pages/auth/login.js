import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    // Sign in with google

    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            route.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user) {
            route.push("/");
        } else {
            console.log("login");
        }
    }, [user]);

    return (
        <div>
            <button onClick = {GoogleLogin} className = "text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
                <FcGoogle className = "text-2xl" />
                Sign in with Google
            </button>
        </div>
    );
}