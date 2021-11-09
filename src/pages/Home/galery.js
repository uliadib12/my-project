import React, {useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

export function Galery(props) {
    const [monthState, setmonthState] = useState(null)
    const [photoIndex, setphotoIndex] = useState(0)
    const [isOpen, setisOpen] = useState(false)
    let img = []
    for (let i = 1; i <= props.value; i++) {
        img.push({src:`https://picsum.photos/id/${i}/400/300`,alt:`image${i}`,id:`${i}`})
    }

    const HandlerImage=(id)=>{
        setisOpen(true)
        setphotoIndex(id)
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
                    {isOpen && (
                    <Lightbox
                        mainSrc={img[photoIndex].src}
                        nextSrc={img[(photoIndex + 1) % img.length].src}
                        prevSrc={img[(photoIndex + img.length - 1) % img.length].src}
                        onCloseRequest={() => setisOpen(false)}
                        onMovePrevRequest={() =>setphotoIndex(photoIndex=>(photoIndex + img.length - 1) % img.length)}
                        onMoveNextRequest={() =>setphotoIndex(photoIndex=>(photoIndex + 1) % img.length)}
                    />
                    )}
                    {img.map(image=>{
                        return <LazyLoadImage onClick={()=>HandlerImage((image.id)-1)} effect="blur" src={image.src} alt={image.alt} key={image.id}/>
                    })}
                </div>
            </div>
        </>
    )
}
