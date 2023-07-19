import { memo, useRef } from "react"
import { FaChevronLeft,FaChevronRight } from "react-icons/fa"

export default memo(function({moreImgs,globalImgHandle}){
    const indexCount = useRef(0)
    const LeftArrowGlobalImgHandle = ()=>{
        indexCount.current = indexCount.current >= 1 ? indexCount.current-1 : indexCount.current
        globalImgHandle(indexCount.current)
    }
    const RightArrowGlobalImgHandle = ()=>{
        indexCount.current = indexCount.current <= moreImgs.length-2 ? indexCount.current+1 : indexCount.current
        globalImgHandle(indexCount.current)
    }
    return(
        <div className="MoreSingleImgs">
            <FaChevronLeft onClick={LeftArrowGlobalImgHandle}/>
            <div className="MoreSingleImgsItems">
                {moreImgs.map((val,i)=>{
                    return(
                        <div className="MoreSingleImgsItem" key={i} onClick={()=>{
                            globalImgHandle(i)
                            indexCount.current = i
                        }}>
                            <img src={val} alt={"more"}/>
                        </div>
                    )
                })}
            </div>
            <FaChevronRight onClick={RightArrowGlobalImgHandle}/>
        </div>
    )
})