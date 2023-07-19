import { memo } from "react"

export default memo(function({imgUrl}){
    return(
        <div className="SingleImg">
            <img src={imgUrl} alt="single"/>
        </div>
    )
})