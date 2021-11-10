import React, {useRef, useState } from 'react';
import {FaCamera} from 'react-icons/fa';
// import avatar from '../assets/image/avatar-placeholder.png'
import ProfilePicture from "@dsalvagni/react-profile-picture"
import "@dsalvagni/react-profile-picture/dist/ProfilePicture.css"
import useStorage from '../custom-hook/useStorage';

function ProfilePic() {
    const profilePictureRef = useRef()
    const [file, setfile] = useState(null)
    const {url, progress} = useStorage(file)
    console.log(progress,url)

const HandleUpload=() => {
    const PP = profilePictureRef.current;
    const imageData = PP.state;
    const files = imageData.file;
    const getUrl = PP.getImageAsDataUrl()
    if(files){
        setfile(files)
    }
    else{
        setfile(null)
    }
  }

    return (
    <>
    <ProfilePicture
      ref={profilePictureRef}
      useHelper={true}
      debug={false}
      frameFormat={"circle"}
    />

     <div className="flex justify-center mt-8">
        <div onClick={HandleUpload} className="group hover:border-blue-500 cursor-pointer border-2 border-gray-300 rounded-md py-3 px-14">
            <div className="flex items-center text-lg font-semibold group-hover:text-blue-500"><FaCamera className="mr-2"/>Upload</div>
        </div>
    </div>
    </>
  )
}


export default ProfilePic