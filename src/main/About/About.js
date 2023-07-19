import { useTheme } from "../../context/ThemeProvider"
import { themeMap } from "../../header/constans"
import "./About.css"
import aboutUs from "./imgs/aboutUs.png"

function About(){
    const {theme} = useTheme()
    return(<div className="about" style={{
        background : themeMap[theme].mainBackground
    }}>
        <div className="container">
            <div className="description">
                <h1 style={{
                    fontSize : "50px",
                    color : themeMap[theme].text
                }}>About Us</h1>
                <p style={{
                    color : "gray",
                    width : "70%"
                }}>Follow Amazon employees on a tour of some of the unique spaces and features inside Merlin, the first building to open its doors at our second headquarters.</p>
                <a href="https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer" className="getStartBtn abousUsBtn">Read More</a>
            </div>
            <div className="image">
                <img src={aboutUs} alt="shoes"/>
            </div>
        </div>
    </div>)
}
export default About