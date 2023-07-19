import "./Main.css"
import Home from "./Home/Home"
import Shop from "./Shop/Shop"
import About from "./About/About"
import Contact from "./Contact/Contact"
import { ABOUT, HOME, SHOP } from "../header/constans"

function Main({active,state,activeSeter,searchInputValue,stateUpdater,removeCartItem,addCartItem,cart,shopAcitve,shopAcitveHandle}){
    return(<div className="main">
        {active === HOME.activeName ? 
            <Home activeSeter={activeSeter}/> : 
        active === SHOP.activeName ?
            <Shop shopAcitveHandle={shopAcitveHandle} shopAcitve={shopAcitve} state={state} cart={cart} searchInputValue={searchInputValue} stateUpdater={stateUpdater} addCartItem={addCartItem} removeCartItem={removeCartItem}/> : 
        active === ABOUT.activeName ? 
            <About/> : 
        <Contact/>
        }
    </div>) 
}
export default Main