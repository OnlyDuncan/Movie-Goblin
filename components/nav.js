import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { slide as Menu } from "react-burger-menu";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default nav => {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    const reroute = async () => {
        if (loading) return;
        if (!user) return route.push("/");
    };

    useEffect(() => {
        reroute();
    }, [user, loading]);

    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            route.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Menu right noOverlay>
            {!user && (
                <a className="menu-item" onClick={GoogleLogin}>
                    Login
                </a>
            )}
            {user && (
                <div styles={{ display: "flex", flexDirection: "column" }}>
                    <ul>
                        <li>
                            <a className="menu-item" href="/homepage">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="menu-item" href="/favoritespage">
                                Favorites
                            </a>
                        </li>
                        <li>
                            <a className="menu-item" onClick={() => auth.signOut()}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </Menu>
    );
};