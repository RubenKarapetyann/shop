import { memo } from "react"
import { getRateStars } from "../../helper/helper"
import { useTheme } from "../../context/ThemeProvider"
import { themeMap } from "../../header/constans"


function Card({name,imgUrl,id,rate,description,price,singleItemHandle}){
    const {theme} = useTheme()
    const singleItemHandleInner = ()=>singleItemHandle(id)
    const starsArr = getRateStars(rate)
    return(<div className="card" style={{
        background : themeMap[theme].card
    }}>
        <div className="cardImg">
            <img src={imgUrl} alt={"shoes"}/>
        </div>
        <div className="cardDescription" style={{
            color : themeMap[theme].text
        }}>
            <p>{name}</p>
            <p style={{
                fontSize : "10px",
                color : "gray",
                textAlign : "center"
            }}>{description}</p>
            <p>{starsArr.map((val,i)=><span key={i}>{val}</span>)}</p>
            <p style={{
                fontSize : "22px",
                color : "green",
                fontWeight : "bold"
            }}>{`${price}$`}</p>
        </div>
        <div className="cardBtn">
            <button onClick={singleItemHandleInner}>Read More</button>
        </div>
    </div>)
}
export default memo(Card)