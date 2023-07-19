import { useTheme } from "../../context/ThemeProvider"
import { themeMap } from "../../header/constans"
import "./Contact.css"
import Form from "./Form"
function Contact(){
    const {theme} = useTheme()
    return(<div className="contact" style={{
        background : themeMap[theme].mainBackground
    }}>
        <div className="container">
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0643563017975!2d44.515019057680966!3d40.18538120124357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce247a83a2f%3A0xa205a36bb2b7f589!2z0J_Qu9C-0YnQsNC00Ywg0KHQstC-0LHQvtC00Ys!5e0!3m2!1sru!2sam!4v1685740309779!5m2!1sru!2sam" width="600" height="450" style={{border : "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Form/>
        </div>
    </div>)
}

export default Contact