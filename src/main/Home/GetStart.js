import { SHOP } from "../../header/constans"

function GetStart({activeSeter}){
    return(<div className="getStart">
        <button className="getStartBtn" onClick={()=>activeSeter(SHOP.activeName)}>START</button>
    </div>)
}
export default GetStart