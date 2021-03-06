import React, { useEffect, useRef, useState } from 'react';
import '../body.css';
import Sidebar from '../comp/SideBar';
import { Topbar } from '../comp/Topbar';
import {BsTwitter} from 'react-icons/bs';
import {FaCamera} from 'react-icons/fa';
import {BsGenderFemale} from 'react-icons/bs';
import {BsGenderMale} from 'react-icons/bs';
import avatar from '../assets/image/avatar-placeholder.png'
import useStorage from '../custom-hook/useStorage';
import Loadingbar from '../assets/svg/Spinner-1s-200px.svg'
import { doc, getDoc } from "firebase/firestore"
import { firestore } from "../config-firebase"
import { getAuth } from "firebase/auth";
import { setDoc } from "firebase/firestore"; 
import { useHistory } from 'react-router';



export function Users(props) {
  const [file, setfile] = useState(null)
  const [firebaseAvatar, setfirebaseAvatar] = useState(false)
  const [imgurl, setimgurl] = useState("")
  const [Error, setError] = useState({state:false, payload:""})
  const hiddenFileInput = useRef()
  const {progress, error} = useStorage(file)
  const [loading, setloading] = useState(false)
  const [loadingName, setloadingName] = useState(false)
  const [name, setname] = useState("")
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [selected, setselected] = useState("Male")
  const [loadingProfileUpdate, setloadingProfileUpdate] = useState(false)
  const [firstName2, setfirstName2] = useState("")
  const [lastName2, setlastName2] = useState("")
  const [gender, setgender] = useState("")
  const selectRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const auth = getAuth();
  const user = auth.currentUser;
  const history = useHistory()

  const types= ["image/png", "image/jpeg"]

  const handleClick = ()=>{
      setError({state: false, payload:""})
      hiddenFileInput.current.click();
  }

  useEffect(()=>{
    const docRef = doc(firestore, `${user.uid}`, "avatar");
    getDoc(docRef).then((docSnap)=>{
      if (docSnap.exists()) {
        const data = docSnap.data()
        if(data.firstname && data.lastname){
          setname(`${data.firstname} ${data.lastname}`)
          setfirstName2(data.firstname)
          setlastName2(data.lastname)
          setgender(data.gender)
          setloadingName(true)
        }
      }
    }).catch(err=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
    const docRef = doc(firestore, `${user.uid}`, "avatar");
    getDoc(docRef).then((docSnap)=>{
      if (docSnap.exists()) {
        setimgurl(`${docSnap.data().url}`)
        setfirebaseAvatar(true)
        setloadingName(true)
      }
    }).catch(err=>{
      console.log(err)
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

  const HandleClickProfile = (e)=>{
    e.preventDefault();
    setloadingProfileUpdate(true)
    let FirstNameRef = firstNameRef.current.value
    let LastNameRef = lastNameRef.current.value
    let select = selectRef.current.options.selectedIndex
    if (select === 1) {
      select = "Male"
    }
    else if (select === 2){
      select = "Female"
    }
    else if (select === 0){
      select = gender
    }
    setDoc(doc(firestore,`${user.uid}`,`avatar`),{
      firstname: `${FirstNameRef}`,
      lastname: `${LastNameRef}`,
      gender: `${select}`
    },{ merge: true })
    .then(()=>{
      let FirstName = firstNameRef.current.value
      let LastName = lastNameRef.current.value
      setloadingProfileUpdate(false)
      FirstName = ""
      LastName = ""
    })
    .then(()=>{
      history.go(0)
    })
  }


  const HandleChangeFirstName= ()=>{
    const FirstName = firstNameRef.current.value
    setfirstName(FirstName)
  }

  const HandleChangeLastName= ()=>{
    const LastName = lastNameRef.current.value
    setlastName(LastName)
  }

  const HandleChangeSelect = ()=>{
    const select = selectRef.current.options.selectedIndex
    if (select === 0) {
      setselected("Male")
    }
    else{
      setselected("Female")
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
                  <div style={{minHeight: "500px"}} className="bg-white border-2 mt-4 ml-7 p-3 py-10">
                    <div className="flex min-w-full justify-between items-center">
                      <div className="ml-5 mt-5 font-medium text-2xl">
                        <div className="flex items-center">
                          {loadingName && <div className="mr-2">{name}</div>}
                          {loadingName && gender === "Male" ? <BsGenderMale color={"blue"} size={"30"}/> : gender === "Female" ? <BsGenderFemale color={"pink"} size={"30"}/> : <div></div>}
                        </div>
                        <div className="text-sm text-md font-medium text-gray-400">Edit your name,avatar,ect.</div>
                      </div>
                      <div className="group mr-6 border-2 hover:border-blue-400 rounded-md px-4 py-3 cursor-pointer">
                        <div className="flex items-center text-gray-400 group-hover:text-blue-400"><BsTwitter className="mr-2 text-blue-600"/>Connect To Twitter</div>
                      </div>
                    </div>
                    <div className="gridTamplate gap-1 mt-5 ml-5">
                      <div>
                        <div className="py-2 flex flex-col justify-center relative">
                                {loading && <object className="absolute top-40 left-64" type="image/svg+xml" width={"60px"} data={Loadingbar}>svg-animation</object>}
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
                              </div>
                            </form>
                          </div>
                            {Error.state && <div className="flex justify-center">{Error.payload}</div>}
                        </div>
                      </div>
                      <div className="mr-72">
                        <form className="mt-10">
                        <label>
                          <div className="text-gray-700 text-md font-bold">First Name:</div>
                          <input defaultValue={firstName2} ref={firstNameRef} onChange={HandleChangeFirstName} className="w-full shadow-sm bg-gray-50 border-gray-200 px-2 py-1 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-7" type="text" name="name"/>
                        </label>
                        <label>
                          <div className="text-gray-700 text-md font-bold">Last Name:</div>
                          <input defaultValue={lastName2} ref={lastNameRef} onChange={HandleChangeLastName} className="w-full shadow-sm bg-gray-50 border-gray-200 px-2 py-1 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-7" type="text" name="name" />
                        </label>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                          Gender
                        </label>
                        <div class="relative">
                          <select onChange={HandleChangeSelect} ref={selectRef} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                          <option value="default" selected disabled hidden>
                            {gender}
                          </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                        <br/>
                        <button onClick={HandleClickProfile} className="hover:border-blue-500 hover:text-blue-500 cursor-pointer border-2 border-gray-300 rounded-md mt-10 py-2 px-3 font-semibold">Submit</button>
                        {loadingProfileUpdate && <object className="inline-block ml-2" type="image/svg+xml" width={"60px"} data={Loadingbar}>svg-animation</object>}
                        </form>
                      </div>
                    </div>
                  </div>
              </div> 
          </div>
        </>
    )
}
