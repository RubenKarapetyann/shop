import { TABSARR } from "../../../header/constans"
import Chip from "../Chip"

export default function({manuOfferActiveSetter}){
    return(
        <div className="manuTabs">
            {TABSARR.map(tab=>{
                const manuOfferActiveSetterHandle = ()=>manuOfferActiveSetter(tab.activeName)
                return <Chip name={tab.displayName} icon={tab.icon} chipFunction={manuOfferActiveSetterHandle} key={tab.id}/>
            })}
        </div>
    )
}