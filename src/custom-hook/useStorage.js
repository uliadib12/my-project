import { useEffect, useState } from "react"
import { storage } from "../config-firebase"
import { ref, uploadBytes } from "firebase/storage";
import { getAuth } from "firebase/auth";

export const useStorage = (file) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const [progress, setprogress] = useState(false)
    const [error, seterror] = useState({state:false, payload:""})

    useEffect(()=>{
        setprogress(false)
        if(file){
            const storageRef = ref(storage, `avatar/PICT-${user.uid}`)
            uploadBytes(storageRef, file).then((snapshot) => {
                setprogress(true)
              }).catch(()=>{
                seterror({state: true, payload:"Error Upload"})
              })
        }

    },[file])

    return {progress,error}
}

export default useStorage