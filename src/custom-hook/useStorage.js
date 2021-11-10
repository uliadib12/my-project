import { useEffect, useState } from "react"
import { storage } from "../config-firebase"
import { ref , uploadBytesResumable , getDownloadURL} from "firebase/storage"

export const useStorage = (file) => {
    const [progress, setprogress] = useState(0)
    const [error, seterror] = useState(null)
    const [url, seturl] = useState(null)

    useEffect(()=>{
        if(file){
            const storageRef = ref(storage, file.name)
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