import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import { auth } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // objervee user state->>>>

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenrUser) => {
      setUser(currenrUser);
      setLoading(false);
      console.log(currenrUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    registerUser,
    signUser,
    signInGoogle,
    user,
    loading,
    logOut,
    updateUserProfile,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
