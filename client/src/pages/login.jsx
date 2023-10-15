import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { data } from "autoprefixer";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function login() {

  const router = useRouter();

  const [{}, dispatch] = useStateProvider();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { displayName, email, photoURL: profileImage } = user;
    try {
      if(email) {
        const data = await axios.post(CHECK_USER_ROUTE, { email }); 
      }
      if(!data.status) {
        dispatch({
          type: reducerCases.SET_NEW_USER,
          newUser: true
        })
        dispatch({
          type: reducerCases.SET_USER_INFO,
          userInfo: {
            displayName,
            email, 
            profileImage, 
            status: "",
          }
        })
        router.push("/onboarding");
      }
    } catch (error) {
      console.log(error);
    } 
  }

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-4 ">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/whatsapp.gif" alt="Whatsapp" height={160} width={160}/>
        <span className="text-5xl ">Whatsapp</span>
      </div>
      <button onClick={handleLogin} className="flex ml-8 items-center justify-center gap-3 bg-search-input-container-background p-3 rounded-lg">
        <FcGoogle className="text-4xl"/>
        <span className="text-white text-2xl pb-1">Login with Google</span>
      </button>
    </div>
  )
}

export default login;
