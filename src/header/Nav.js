import { memo } from "react";
import {TABSARR} from "./constans"
import NavBarItem from "./NavItem";


export default memo(function({activeSeter}){
    return(<div className="navbar">
        <div className="navbarContainer">
            {TABSARR.map(item=>{
                return <NavBarItem key={item.id} name={item.displayName} activeSeter={activeSeter} activeName={item.activeName}/>
            })}
        </div>
    </div>)
})
