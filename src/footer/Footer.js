import { memo } from "react"
import "./Footer.css"
import { FaInstagram,FaFacebook,FaTwitter,FaHome,FaEnvelope,FaPhone } from "react-icons/fa" 
function Footer(){
    return(<div className="footer">
        <div className="top">
            <div className="column">
                <h3>COMPANY NAME</h3>
                <br/>
                <hr/>
                <br/>
                <p>This is a random company, that sells different products, we are not Amazon, but we stole their logo.</p>
            </div>
            <div className="column procon">
                <h3>SOCIAL MEDIA</h3>
                <br/>
                <hr/>
                <br/>
                <p><FaInstagram/> kaaraapetiaan</p>
                <p><FaFacebook/> Ruben Karapetyan</p>
                <p><FaTwitter/> Karapetyan</p>
            </div>
            <div className="column procon">
                <h3>CONTACT</h3>
                <br/>
                <hr/>
                <br/>
                <p><FaHome/> Yerevan, N1002, US</p>
                <p><FaEnvelope/> ruben_karapetyan@mail.ru</p>
                <p><FaPhone/> +374 99 152 815</p>
            </div>
        </div>
        <div className="bottom">
            © created by Ruben 2023
        </div>
    </div>)
}

export default memo(Footer)