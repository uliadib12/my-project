import React, { useEffect, useRef, useState } from 'react';
import '../body.css';
import Sidebar from '../comp/SideBar';
import { Topbar } from '../comp/Topbar';
import {BsTwitter} from 'react-icons/bs';
import {FaCamera} from 'react-icons/fa';
import avatar from '../assets/image/avatar-placeholder.png'
import useStorage from '../custom-hook/useStorage';
import Loadingbar from '../assets/svg/Spinner-1s-200px.svg'
import { doc, getDoc } from "firebase/firestore"
import { firestore } from "../config-firebase"
import { getAuth } from "firebase/auth";



export function Users(props) {
  const [file, setfile] = useState(null)
  const [firebaseAvatar, setfirebaseAvatar] = useState(false)
  const [imgurl, setimgurl] = useState("")
  const [Error, setError] = useState({state:false, payload:""})
  const hiddenFileInput = useRef()
  const {progress, error} = useStorage(file)
  const [loading, setloading] = useState(false)

  const types= ["image/png", "image/jpeg"]

  const handleClick = ()=>{
      setError({state: false, payload:""})
      hiddenFileInput.current.click();
  }

  useEffect(()=>{
    const auth = getAuth();
    const user = auth.currentUser;
    const docRef = doc(firestore, `${user.uid}`, "avatar");
    getDoc(docRef).then((docSnap)=>{
      if (docSnap.exists()) {
        console.log("getSnap",docSnap.data().url)
        setimgurl(`${docSnap.data().url}`)
        setfirebaseAvatar(true)
      }
    })
  },[])
  
  useEffect(()=>{
    if(progress){
      setloading(false)
    }
    if(error){
      setloading(false)
    }

  },[progress, error])

  const handleChange = event=>{
    const Inputfile = event.target.files[0]
    if(Inputfile && types.includes(Inputfile.type)){
      setfile(Inputfile)
      setloading(true)
    }
    else{
      setfile(null)
      setError({state: true, payload:"please select image"})
    }
  }

    return (
        <>
          <Sidebar/>
          <Topbar/>
          <div className="bg-gray-100 pb-10 min-h-screen">
            <div className="body">
                  <h2 className="relative font-bold text-lg mt-7 ml-7">
                      User Info
                  </h2>
                  <div style={{minHeight: "500px"}} className="bg-white border-2 mt-4 ml-7 p-3">
                    <div className="flex min-w-full justify-between items-center">
                      <div className="ml-5 mt-5 font-medium text-2xl">
                        Adib Ulinuha El Majid
                        <div className="text-sm text-md font-medium text-gray-400">Edit your name,avatar,ect.</div>
                      </div>
                      <div className="group mr-6 border-2 hover:border-blue-400 rounded-md px-4 py-3 cursor-pointer">
                        <div className="flex items-center text-gray-400 group-hover:text-blue-400"><BsTwitter className="mr-2 text-blue-600"/>Connect To Twitter</div>
                      </div>
                    </div>
                    <div className="gridTamplate gap-1 mt-5 ml-5">
                      <div>
                        <div className="py-8 flex flex-col justify-center">
                          <img className={`w-56 mx-auto rounded-md ${firebaseAvatar === true ? "" : "animate-pulse"}`} src={firebaseAvatar === true ? imgurl : avatar} alt="avatar"/>
                          <div className="flex justify-center mt-8">
                            <form>
                              <div onClick={handleClick} className="group hover:border-blue-500 cursor-pointer border-2 border-gray-300 rounded-md py-3 px-14">
                                  <div for="upload-file"  className="flex items-center text-lg font-semibold group-hover:text-blue-500"><FaCamera className="mr-2"/>
                                    Upload
                                  </div>
                                  <input type="file" className="hidden" onChange={handleChange} ref={hiddenFileInput} />
                              </div>
                              <div className="flex justify-center mt-2">
                                {loading && <object type="image/svg+xml" width={"60px"} data={Loadingbar}>svg-animation</object>}
                              </div>
                            </form>
                          </div>
                            {Error.state && <div className="flex justify-center">{Error.payload}</div>}
                        </div>
                      </div>
                      <div>Test2</div>
                      <div>Test3</div>
                    </div>
                  </div>
              </div> 
          </div>
        </>
    )
}
