import { useTheme } from "../context/ThemeProvider"
import { themeMap } from "./constans"

function NavBarItem({name,activeSeter,activeName}){
    const {theme} = useTheme()
    const activeSeterHandle = ()=>activeSeter(activeName)
    return(<div className="navBarItem" onClick={activeSeterHandle}>
        <p style={{
            color : themeMap[theme].text
        }}>{name}</p>
    </div>)
}

export default NavBarItem