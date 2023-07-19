import { FaHome,FaShoppingBasket,FaInfoCircle,FaPhone,FaHeart } from "react-icons/fa"
import {US} from "country-flag-icons/react/3x2"
import {RU} from "country-flag-icons/react/3x2"
import {AM} from "country-flag-icons/react/3x2"
export const HOME = {
    displayName : "HOME",
    activeName : "HOME",
    id : 1,
    icon : <FaHome/>
}
export const SHOP = {
    displayName : "SHOP",
    activeName : "SHOP",
    id : 2,
    icon : <FaShoppingBasket/>
}
export const ABOUT = {
    displayName : "ABOUT",
    activeName : "ABOUT",
    id : 3,
    icon : <FaInfoCircle/>
}
export const CONTACT = {
    displayName : "CONTACT",
    activeName : "CONTACT",
    id : 4,
    icon : <FaPhone/>
}
export const FAVORITES = {
    displayName : "FAVORITES",
    activeName : "FAVORITES",
    id : 5,
    icon : <FaHeart/>
}

export const MANY = {
    displayName : "MANY",
    activeName : "MANY",
    id : 6,
}

export const TABSARR = [
    HOME,SHOP,ABOUT,CONTACT
]
export const TABSMAP = {
    HOME,
    SHOP,
    ABOUT,
    CONTACT
}

export const LangMap = {
    "eng" : <US className="searchFlag"/>,
    "rus" : <RU className="searchFlag"/>,
    "am" : <AM className="searchFlag"/>
}


export const themeMap = {
    light : {
        header : "var(--background)",
        search : "var(--background2)",
        card : "white",
        text : "black",
        mainBackground : "var(--mainBackground)"
    },
    dark : {
        header : "var(--backgroundDark)",
        search : "var(--background2Dark)",
        card : "var(--cardbackgroundDark)",
        text : "white",
        mainBackground : "var(--mainBackgroundDark)"
    }
}