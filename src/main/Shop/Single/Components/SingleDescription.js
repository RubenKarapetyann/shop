import { memo } from "react"
import { getRateStars } from "../../../../helper/helper"
import SingleDescriptionBtn from "./singleDescriptionBtn"
import { useTheme } from "../../../../context/ThemeProvider"
import { themeMap } from "../../../../header/constans"


export default memo(function({name,description,rate,price,size,addCartItemHandle,inCart}){
    const {theme} = useTheme()
    const starsArr = getRateStars(rate)
    return(
        <div className="SingleDescription">
            <SingleDescriptionBtn addCartItemHandle={addCartItemHandle} inCart={inCart}>
                <h1 style={{
                    color : themeMap[theme].text
                }}>{name}</h1>
                <p style={{
                    fontSize : "15px",
                    color : "gray"
                }}>{description}</p>
                <p style={{
                    color : themeMap[theme].text
                }}>{rate}{"  "}{starsArr.map((val,i)=><span key={i}>{val}</span>)}</p>
                <p style={{
                    color : themeMap[theme].text
                }}>sizes : {size}</p>
                <p style={{
                    fontSize : "24px",
                    color : "green",
                    fontWeight : "bold"
                }}>{price}$</p>
            </SingleDescriptionBtn>
        </div>
    )
})
