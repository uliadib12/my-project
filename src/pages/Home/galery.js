import React, {useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export function Galery(props) {
    const [monthState, setmonthState] = useState(null)
    let img = []
    for (let i = 1; i <= props.value; i++) {
        img.push({src:`https://picsum.photos/id/${i}/400/300`,alt:`image${i}`,id:`${i}`})
    }
    return (
        <>
        <div className="flex justify-center">
            <AwesomeButton ripple={true} onPress={()=>{monthState === 3 ? setmonthState(null) : setmonthState(3)}} style={{height: "2rem", marginRight: "1.3rem"}} type={monthState === 3 ? "primary" : "secondary"}>3 Months</AwesomeButton>
            <AwesomeButton ripple={true} onPress={()=>{monthState === 6 ? setmonthState(null) : setmonthState(6)}} style={{height: "2rem", marginRight: "1.3rem" }} type={monthState === 6 ? "primary" : "secondary"}>6 Months</AwesomeButton>
            <AwesomeButton ripple={true} onPress={()=>{monthState === 9 ? setmonthState(null) : setmonthState(9)}} style={{height: "2rem", marginRight: "1.3rem" }} type={monthState === 9 ? "primary" : "secondary"}>9 Months</AwesomeButton>
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
