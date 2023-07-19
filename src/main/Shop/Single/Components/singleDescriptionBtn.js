export default function({children,addCartItemHandle,inCart}){
    return (
        <>
        {children}
        <button className="addToCard getStartBtn" onClick={addCartItemHandle}>{inCart ? "Remove From Cart" : "Add To Cart"}</button>
        </>
    )
}