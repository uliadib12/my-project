import { useEffect, useState } from "react"
import { storage, firestore } from "../config-firebase"
import { doc, setDoc } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router";

export const useStorage = (file) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const [progress, setprogress] = useState(false)
    const [error, seterror] = useState({state:false, payload:""})
    const [url, seturl] = useState("")
    const history = useHistory()

    useEffect(()=>{
        setprogress(false)
        if(file){
            const storageRef = ref(storage, `avatar/${user.uid}/PICT`)
            uploadBytes(storageRef, file).then((snapshot) => {
                getDownloadURL(storageRef)
                .then((urls) => {
                    if(urls){
                        seturl(urls)
                        console.log("geturl: ",url)
                    }
                }).catch(error=>{console.log("geturlerr:",error)})
                .then(()=>{
                    setDoc(doc(firestore,`${user.uid}`,"avatar"),{url: `${url}`})
                    setprogress(true)
                    history.go(0)
                }).catch(err=>{console.log(error)})
                }).catch(()=>{
                seterror({state: true, payload:"Error Upload"})
            })
        }
        
    },[file])
    
    return {progress,error}
}

export default useStorage