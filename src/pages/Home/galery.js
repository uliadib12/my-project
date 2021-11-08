import React, {useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function Galery(props) {
    const [monthState, setmonthState] = useState(null)
    let img = []
    for (let i = 1; i <= props.value; i++) {
        img.push({src:`https://picsum.photos/id/${i}/400/300`,alt:`image${i}`,id:`${i}`})
    }
    return (
        <>
        <div className="flex justify-center">
            <div style={monthState === 3 ? {backgroundColor: 'rgba(96, 165, 250, 1)',  color: 'rgba(255, 255, 255, 1)'} : {} } onClick={()=>{monthState === 3 ? setmonthState(prev => prev = null) : setmonthState(3)}} className={`select-none mr-5 text-md text-gray-600 font-medium p-1 rounded-md active:bg-blue-500 hover:bg-blue-400 cursor-pointer hover:text-white`}>3 Months</div>
            <div style={monthState === 6 ? {backgroundColor: 'rgba(96, 165, 250, 1)',  color: 'rgba(255, 255, 255, 1)'} : {} } onClick={()=>{monthState === 6 ? setmonthState(prev => prev = null) : setmonthState(6)}} className={`select-none mr-5 text-md text-gray-600 font-medium p-1 rounded-md active:bg-blue-500 hover:bg-blue-400 cursor-pointer hover:text-white`}>6 Months</div>
            <div style={monthState === 9 ? {backgroundColor: 'rgba(96, 165, 250, 1)',  color: 'rgba(255, 255, 255, 1)'} : {} } onClick={()=>{monthState === 9 ? setmonthState(prev => prev = null) : setmonthState(9)}} className={`select-none mr-5 text-md text-gray-600 font-medium p-1 rounded-md active:bg-blue-500 hover:bg-blue-400 cursor-pointer hover:text-white`}>9 Months</div>
            </div>
            <div className="p-7 pt-2">
                <div className="container grid grid-cols-3 gap-5 mx-auto mt-2">
                    {img.map(image=>{
                        return <LazyLoadImage effect="blur" src={image.src} alt={image.alt} key={image.id}/>
                    })}
                </div>
            </div>
        </>
    )
}
