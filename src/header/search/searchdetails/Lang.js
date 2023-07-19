
import { memo, useState } from "react"
import { LangMap } from "../../constans"
export default memo(function(){
    const [lang,setLang] = useState("eng")
    const langChangeHandle = (evt)=>{
        setLang(evt.target.value)
    }
    return(<div style={{
        width : "50%",
        gap : 10
    }}
    className="searchBox">
        {LangMap[lang]}
        <select className="searchSelect" onChange={langChangeHandle}>
            <option value={"eng"}>eng</option>
            <option value={"rus"}>rus</option>
            <option value={"am"}>am</option>
        </select>
    </div>)
})