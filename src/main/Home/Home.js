import "./Home.css"
import Background from "./Background"
import GetStart from "./GetStart"
import { useTheme } from "../../context/ThemeProvider"
import { themeMap } from "../../header/constans"

function Home({activeSeter}){
    const {theme} = useTheme()
    return(<div className="home" style={{
        background : themeMap[theme].mainBackground
    }}>
        <GetStart activeSeter={activeSeter}/>
        <Background/>
    </div>)
}

export default Home