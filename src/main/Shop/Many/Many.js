import Card from "../Card"
import Slider from "../../../slider/Slider"
import { useEffect, useRef } from "react"
import fakeFetch from "../../../fetch/fetch"


function Many({state,searchInputValue,stateUpdater,shopAcitveHandle}){
    const level = useRef(1)
    const levelHandle = useRef(0)
    const moreStateHandle = (e)=>{
        if(window.scrollY >= window.innerHeight*level.current/2 && levelHandle.current!==level.current){
            levelHandle.current++
            fakeFetch(state.length,state.length+4,searchInputValue).then((moreState)=>{
                stateUpdater(moreState)
                level.current++
            })
        }
    } 
    useEffect(()=>{
        if(state !== null){
            window.addEventListener("scroll",moreStateHandle)
        }
        return ()=>{
            window.removeEventListener("scroll",moreStateHandle)
        }
    },[state])
    useEffect(()=>{
        level.current = 1
        levelHandle.current = 0
        window.scrollTo({top : 0})
    },[searchInputValue])    
    return(
        <>
        <Slider style={{zIndex : "-1"}}/>
        <div className="innerContainer">
            {state.map((shoes)=>{
                const singleItemHandle = ()=>shopAcitveHandle(shoes)
                return <Card 
                name={shoes.name} 
                key={shoes.id}
                imgUrl={shoes.url} 
                rate={shoes.rate} 
                id={shoes.id}
                description={shoes.description}
                price={shoes.price}
                singleItemHandle={singleItemHandle}
                />
            })} 
        </div>
        </>
    )
}
export default Many