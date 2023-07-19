import { FaChevronRight } from "react-icons/fa"
import { useTheme } from "../../context/ThemeProvider"
import { themeMap } from "../../header/constans"

export default function({name,icon,chipFunction}){
    const {theme} = useTheme()
    return(
        <div onClick={chipFunction} className="chip">
            <div style={{
                display : "flex",
                color : themeMap[theme].text
            }}>
                <p>{icon}</p>
                <p style={{
                    fontWeight : "bold",
                    fontSize : "17px",
                    marginLeft : "5px"
                }}>{name}</p>
            </div>
            <p style={{
                color : themeMap[theme].text
            }}><FaChevronRight/></p>
        </div>
    )
}