import { memo } from "react";
import { FaShoppingCart } from "react-icons/fa"
import { useTheme } from "../../../context/ThemeProvider";
import { themeMap } from "../../constans";
export default memo(function({cart}){
    const {theme} = useTheme()
    return(<div style={{
        width : "50%",
        color : themeMap[theme].text
    }}
    className="searchBox">
        <p><FaShoppingCart/>{cart}</p>
    </div>)
})