import { useEffect, useState } from "react"
import { storage } from "../config-firebase"
import { ref , uploadBytesResumable , getDownloadURL} from "firebase/storage"
import { getAuth } from "firebase/auth";

export const useStorage = (file) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const [progress, setprogress] = useState(0)
    const [error, seterror] = useState(null)
    const [url, seturl] = useState(null)

    useEffect(()=>{
        setprogress(null)
        seturl(null)
        if(file){
            const storageRef = ref(storage, `PICT-${user.uid}`)
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',(snap)=>{
                let persen = (snap.bytesTransferred / snap.totalBytes) * 100
                setprogress(persen)
            },(error)=>{
                seterror(error)
            },() =>{
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    seturl(downloadURL)
                  });
                })
        }

    },[file])

    return {progress,error,url}
}

export default useStorage