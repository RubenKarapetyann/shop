import { memo, useEffect, useRef, useState } from "react"
import banner1 from "./imgs/banner1.jpg"
import banner2 from "./imgs/banner2.jpg"
import banner3 from "./imgs/banner3.jpg"
import banner4 from "./imgs/banner4.jpg"
import banner5 from "./imgs/banner5.jpg"
import banner6 from "./imgs/banner6.jpg"
import banner7 from "./imgs/banner7.jpg"
import "./Slider.css"

const BANNERS = [banner1,banner2,banner3,banner4,banner5,banner6,banner7]

const Slider = memo(()=>{
    let count = useRef(0)
    const [activeImg,setActiveImg] = useState([banner1,banner2])
    useEffect(()=>{
        let id = setInterval(()=>{
            if(count.current >= 14){
                count.current = 0
            }
            if(count.current%2===0){
                setActiveImg([BANNERS[Math.floor(count.current/2)],BANNERS[Math.floor(count.current/2)+1===7?0:Math.floor(count.current/2)+1]])
            }else{
                setActiveImg(prev=>{
                    return prev
                })
            }
            count.current++
        },2000)
        return ()=>{
            clearInterval(id)
        }
    },[])

    return(<div className="slider">
        <img src={activeImg[0]} style={{ 
            marginLeft : count.current%2===0 ? "0" : "-100%",
        }} key={activeImg[0]} alt="banner"/>
        <img src={activeImg[1]} style={{

        }} key={activeImg[1]} alt="banner"/>
    </div>)
},()=>true)

export default Slider