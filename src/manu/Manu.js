import "./Manu.css"
import MainManu from "./mainPart/MainManu"
import RightManu from "./rightPart/RightManu"


function Manu({manuActiveSeter,manuOfferActiveSetter}){
    return(
        <div className="manu">
            <MainManu manuOfferActiveSetter={manuOfferActiveSetter}/>
            <RightManu manuActiveSeter={manuActiveSeter}/>
        </div>
    )
}
export default Manu