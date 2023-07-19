import { memo } from "react";
import { HOME } from "./constans"
import logolight from "./imgs/logolight.png"
import logodark from "./imgs/logodark.png"
import { useTheme } from "../context/ThemeProvider";
const logos = {
    logolight,logodark
}

export default memo(function({activeSeter}){
    const {theme} = useTheme()
    const activeSeterHandle = ()=>activeSeter(HOME.activeName)
    return(<div className="logo">
        <div className="logoContainer" onClick={activeSeterHandle}>
            <img src={logos["logo"+theme]}/>
        </div>
    </div>)
})