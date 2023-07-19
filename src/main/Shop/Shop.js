import "./Shop.css"
import Many from "./Many/Many"
import Single from "./Single/Single"
import fakeFetch from "../../fetch/fetch"
import { FAVORITES, MANY, themeMap } from "../../header/constans"
import Favorites from "./Favorites/Favorites"
import { useTheme } from "../../context/ThemeProvider"

function Shop({state,searchInputValue,stateUpdater,addCartItem,cart,shopAcitve,shopAcitveHandle,removeCartItem}){
    const {theme} = useTheme()
    if(state === null){
        return <p>Loading...</p>
    }
    const getMoreItems = ()=>{
        let count = Math.floor(Math.random()*10)
        return new Promise((res,rej)=>{
            fakeFetch(count,count+3).then(result=>{
                res(result)
            })
        })
    }


    return(<div className="shop" style={{
        background : themeMap[theme].mainBackground
    }}> 
        {shopAcitve === MANY.activeName ? 
            <Many state={state} searchInputValue={searchInputValue} stateUpdater={stateUpdater} shopAcitveHandle={shopAcitveHandle}/> : 
            shopAcitve === FAVORITES.activeName ? <Favorites cart={cart} shopAcitveHandle={shopAcitveHandle}/> : 
            <Single cart={cart} addCartItem={addCartItem} removeCartItem={removeCartItem} item={shopAcitve} getMoreItems={getMoreItems} shopAcitveHandle={shopAcitveHandle}/>
        }
    </div>)
}

export default Shop