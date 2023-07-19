import { useTheme } from "../../context/ThemeProvider";
import { FAVORITES, SHOP, themeMap } from "../../header/constans";
import Chip from "./Chip";
import Theme from "./details/Theme";
import ManuTabs from "./details/manuTabs";

export default function({manuOfferActiveSetter}){
    const {theme} = useTheme()
    return(
        <div className="mainManu" style={{
            background : themeMap[theme].header,
        }}>
            <p style={{
                width : "100%",
                height : "10vh",
                background : themeMap[theme].search,
                color : themeMap[theme].text,
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                fontSize : "25px"
            }}>AMAZON MANU</p>
            <ManuTabs manuOfferActiveSetter={manuOfferActiveSetter}/>
            <hr/>
            <Chip name={FAVORITES.displayName} icon={FAVORITES.icon} key={FAVORITES.id} chipFunction={()=>manuOfferActiveSetter(SHOP.activeName,"f")}/>
            <hr/>
            <Theme/>
        </div>
    )
}