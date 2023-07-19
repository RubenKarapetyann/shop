import { memo } from "react";
import { FaBars } from "react-icons/fa"
import { useTheme } from "../../../context/ThemeProvider";
import { themeMap } from "../../constans";
export default memo(function({manuActiveSeter}){
    const {theme} = useTheme()
    return(<div style={{
            width : "10%",
            cursor : "pointer",
            color : themeMap[theme].text
    }}
    className="searchBox" 
    onClick={manuActiveSeter}
    >
        <FaBars/>
        <p><strong>Menu</strong></p>
    </div>)
})