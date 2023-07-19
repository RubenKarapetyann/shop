import SingleDescription from "./Components/SingleDescription"
import SingleImg from "./Components/SingleImg"
import MoreItems from "./Components/MoreItems"
import MoreSingleImgs from "./Components/MoreSingleImgs"
import "./Single.css"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useTheme } from "../../../context/ThemeProvider"
import { themeMap } from "../../../header/constans"


function Single({item,shopAcitveHandle,getMoreItems,addCartItem,cart,removeCartItem}){
    const {theme} = useTheme()
    const [globalImg,setGlobalImg] = useState(item.url)
    const [more,setMore] = useState([])
    const globalImgHandle = useCallback((i)=> setGlobalImg(item.moreImgs[i]),[item])
    useEffect(()=>{
        setMore([])
        getMoreItems().then((res)=>{
            setMore(res)
        })
        setGlobalImg(item.url)
    },[item.id])
    let thisItem = useMemo(()=>cart.find(val=>item.id===val.id),[item.id,cart.length])
    const addCartItemHandle = useCallback(()=>{
        if(thisItem === undefined){
            addCartItem(item)
        }else{
            removeCartItem(item)
        }
    },[item.id,cart.length])
    return(
        <div className="singleContainer" style={{
            background : themeMap[theme].search
        }}>
            <div className="singleContainerInner">
                <SingleImg imgUrl={globalImg}/>
                <SingleDescription inCart={thisItem} addCartItemHandle={addCartItemHandle} name={item.name} description={item.description} rate={item.rate} price={item.price} size={item.size}/>
                <MoreSingleImgs moreImgs={item.moreImgs} globalImgHandle={globalImgHandle}/>
                <MoreItems more={more} shopAcitveHandle={shopAcitveHandle}/>
            </div>
        </div>
    )
}

export default Single