import Slider from "../../../slider/Slider"
import Card from "../Card"

function Favorites({cart,shopAcitveHandle}){
    return(
        <div className="shop">
            <Slider style={{zIndex : "-1"}}/>
            <div className="innerContainer">
                {cart.map((shoes)=>{
                    const singleItemHandle = ()=>shopAcitveHandle(shoes)
                    return <Card 
                    name={shoes.name} 
                    key={shoes.id}
                    imgUrl={shoes.url} 
                    rate={shoes.rate} 
                    id={shoes.id}
                    description={shoes.description}
                    price={shoes.price}
                    singleItemHandle={singleItemHandle}
                    />
                })} 
        </div>
        </div>
    )
}
export default Favorites