import Logo from "./Logo"
import Nav from "./Nav"
import "./Header.css"
import Search from "./search/Search"
import { HOME, themeMap } from "./constans";
import { memo } from "react";
import { useTheme } from "../context/ThemeProvider";

function Header({activeSeter,active,searchInputValueSeter,manuActiveSeter,cart,shopModeActiveSeter}){
    const {theme} = useTheme()
    return(<div className="headerContainer">
        <div className="header" style={{
            background : themeMap[theme].header
        }}>
            <Logo activeSeter={activeSeter}/>
            <Nav activeSeter={activeSeter}/>
        </div>
        {active !== HOME.activeName ? <div className="search">
            <Search shopModeActiveSeter={shopModeActiveSeter} searchInputValueSeter={searchInputValueSeter} active={active} cart={cart} manuActiveSeter={manuActiveSeter}/>
        </div> : null}
    </div>)
}

export default memo(Header)