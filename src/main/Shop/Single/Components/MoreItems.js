import { memo } from "react";
import Card from "../../Card"

export default memo(function({more,shopAcitveHandle}){
    return(
        <div className="MoreItems">
            {more.map((shoes)=>{
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
    )
})