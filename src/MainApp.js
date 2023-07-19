import { useEffect, useState } from 'react';
import './MainApp.css';
import Header from "./header/Header"
import Main from "./main/Main"
import Footer from "./footer/Footer"
import { FAVORITES, HOME, MANY, SHOP } from './header/constans';
import fakeFetch from './fetch/fetch';
import Manu from './manu/Manu';


function MainApp() {
  const [active,setActive] = useState(HOME.activeName)
  const [state,setState] = useState(null)
  const [searchInputValue,setSearchInputValue] = useState("")
  const [manuActive,setManuActive] = useState(false)
  const [cart,setCart] = useState([])
  const [shopAcitve,setShopAcitve] = useState(MANY.activeName)



  useEffect(()=>{
    if(state === null && active === SHOP.activeName){
      fakeFetch(0,8).then((res)=>{
        setState(res)
      })
    }else if(active === SHOP.activeName){
      fakeFetch(0,8,searchInputValue).then((res)=>{
        setState(res)
      })
    }
  },[active,searchInputValue])

  const addCartItem = (item)=> setCart(prev=> [...prev,item])
  const removeCartItem = (item)=> setCart(prev=>prev.filter((val)=>val.id !== item.id))
  const shopModeActiveSeter = () =>setShopAcitve(MANY.activeName)
  const activeSeter = (act)=>{
    shopModeActiveSeter()
    setActive(act)
  }
  const searchInputValueSeter = (text)=> setSearchInputValue(text)
  const stateUpdater = (moreState)=>setState(prev=>[...prev,...moreState])
  const manuActiveSeter = ()=> setManuActive(prev=>!prev)
  const manuOfferActiveSetter = (act,mode)=>{
    activeSeter(act)
    manuActiveSeter()
    if(mode === "f"){
      setShopAcitve(FAVORITES.activeName)
    }
  }
  const shopAcitveHandle = (shoes)=>setShopAcitve(shoes)


  
  return (
    <div className="App">
      {manuActive && <Manu manuActiveSeter={manuActiveSeter} manuOfferActiveSetter={manuOfferActiveSetter}/>}
      <Header cart={cart.length} shopModeActiveSeter={shopModeActiveSeter} activeSeter={activeSeter} active={active} searchInputValueSeter={searchInputValueSeter} manuActiveSeter={manuActiveSeter}/>
      <Main removeCartItem={removeCartItem} shopAcitveHandle={shopAcitveHandle} shopAcitve={shopAcitve} cart={cart} addCartItem={addCartItem} active={active} state={state} activeSeter={activeSeter} searchInputValue={searchInputValue} stateUpdater={stateUpdater}/>
      <Footer/>
    </div>
  );
}

export default MainApp;
