import React, { useRef } from 'react'
import { useState } from 'react'
import * as EmailValidator from 'email-validator'
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { app } from '../config-firebase';

export function Login(props) {
    const auth = getAuth(app);
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const formRef = useRef()

    const emailvalidator = EmailValidator.validate

    const register = (e) => {
        e.preventDefault()
        if(!(emailvalidator(email))){
            return 0
        }
        else{
            signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                console.log("BERHASIL")
                formRef.current[0].value = ""
                formRef.current[1].value = ""
                const user = userCredential.user;
                console.log(user)
                setemail("")
                setpass("")
                // ...
              })
              .catch((error) => {
                console.log("GAGAL")
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                // ..
              });
        }
    }

    return (
        <>
            <div className="flex justify-center py-10 flex-grow bg-gradient-to-r from-blue-400 to-blue-800 max-h-screen overflow-y-hidden h-screen">
                <div className="box-border bg-blue-50 w-96 rounded-3xl py-11 px-12 relative overflow-hidden shadow-2xl">
                    <div className="text-3xl font-bold text-blue-500 mb-5 flex justify-center">{props.Nama}</div>
                    <div className="flex items-center justify-center text-3xl mb-6 font-bold text-blue-400">Login</div>
                    <form ref={formRef}>
                        <label className ="font-medium text-lg">
                        Email:
                        <input onChange={event => setemail(event.target.value)} type="email" className="w-full shadow-sm bg-gray-50 border-gray-200 px-2 py-1 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-7"/>
                        </label>
                        <label className ="font-medium text-lg">
                        Password:
                        <input onChange={event => setpass(event.target.value)} required="required" type="password" className="w-full shadow-sm bg-gray-50 border-gray-200 px-2 py-1 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <div className="relative">
                        </div>
                        </label>
                        <div className="mt-28 w-full flex justify-center">
                            <button onClick={register} className="cursor-pointer w-full bg-blue-600 px-10 py-2 rounded-tr-2xl rounded-bl-2xl font-semibold text-gray-50 block sm:inline-block mb-2 hover:bg-blue-50 hover:text-blue-600 shadow-md">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
