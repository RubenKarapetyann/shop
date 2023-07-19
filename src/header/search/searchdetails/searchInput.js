import { memo, useRef, useState } from "react"
import { FaSearch } from "react-icons/fa"


export default memo(function({searchInputValueSeter,shopModeActiveSeter}){
    const [value,setValue] = useState("")
    const searchInputValueSeterHandle = ()=> {
        searchInputValueSeter(value)
        shopModeActiveSeter()
    }
    return(<div style={{
        width : "70%"
    }}
    className="searchBox">
        <input type="text" placeholder="search..." className="searchInput" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button className="searchBtn" onClick={searchInputValueSeterHandle}><FaSearch/></button>
    </div>)
})