import React from 'react';
import '../body.css';
import Sidebar from '../comp/SideBar';
import { Topbar } from '../comp/Topbar';
import {BsTwitter} from 'react-icons/bs';
import ProfilePic from '../comp/profilePicture';


export function Users(props) {

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
                    <div className="mt-5 ml-5 grid grid-cols-3 gap-3">
                      <div>
                        <div className="py-8 flex flex-col justify-center">
                          <ProfilePic/>
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
