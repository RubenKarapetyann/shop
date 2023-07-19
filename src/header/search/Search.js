import Manu from "./searchdetails/Menu"
import SearchInput from "./searchdetails/searchInput"
import Lang from "./searchdetails/Lang"
import Cart from "./searchdetails/Cart"
import { SHOP, themeMap } from "../constans"
import { memo } from "react"
import { useTheme } from "../../context/ThemeProvider"

export default memo(function({searchInputValueSeter,active,manuActiveSeter,cart,shopModeActiveSeter}){
    const {theme} = useTheme()
    return(<div className="search" style={{
        background : themeMap[theme].search
    }}>
        <Manu manuActiveSeter={manuActiveSeter}/>
        {active === SHOP.activeName ? <SearchInput searchInputValueSeter={searchInputValueSeter} shopModeActiveSeter={shopModeActiveSeter}/> : null}
        <div style={{
            display : "flex",
            width : "20%",
            height : "90%",
            justifyContent : "center"
        }}>
            <Lang/>
            <Cart cart={cart}/>
        </div>
    </div>)
})