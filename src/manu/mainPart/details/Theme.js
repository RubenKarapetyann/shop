import { FaMoon,FaSun } from "react-icons/fa"
import { useTheme } from "../../../context/ThemeProvider"
import { themeMap } from "../../../header/constans"

export default function(){
    const {theme,setTheme} = useTheme()
    return(
        <div className="chip" style={{
            color : "black",
        }} onClick={()=>setTheme(prev=>prev==="light" ? "dark" : "light")}>
            <div style={{
                display : "flex",
                color : themeMap[theme].text
            }}>{theme === "light" ? <FaSun/> : <FaMoon/>}<p style={{
                fontWeight : "bold",
                fontSize : "17px",
                marginLeft : "5px"
            }}>Theme</p></div>
        </div>
        
    )
}