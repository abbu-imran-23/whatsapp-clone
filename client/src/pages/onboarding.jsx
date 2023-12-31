import React, { useState } from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";
import Input from "@/components/common/Input";
import Avatar from "@/components/common/Avatar";

function onboarding() {

  const [{userInfo}] = useStateProvider();

  // const { displayName, email, photoImage } = userInfo;
  const [name, setName] = useState(userInfo?.displayName || "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.png");

  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image src="/whatsapp.gif" alt="Whatsapp" height={150} width={150}/>
        <span className="text-5xl ">Whatsapp</span>
      </div>
      <h2 className="text-3xl pt-3">Create your profile</h2>
      <div className="flex gap-6 ">
        <div className="flex flex-col items-center justify-center mt-5 gap-4">
           <Input name="Display Name" state={name} setState={setName} label={true}/>
           <Input name="About" state={about} setState={setAbout} label/>
        </div>
        <div>
          <Avatar type="xl" image={image} setImage={setImage}/>
        </div>
      </div>
    </div>
  )
}

export default onboarding;
