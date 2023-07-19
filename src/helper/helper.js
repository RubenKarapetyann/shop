import { FaStar,FaRegStar,FaStarHalfAlt } from "react-icons/fa"

function getRateStars(rate){
    const starsArr = []
    for(let i = 0;i < 5;i++){
        let rateHandle = rate-i
        if(rateHandle >= 1){
            starsArr.push(<FaStar/>)
        }else if(rateHandle <= 0){
            starsArr.push(<FaRegStar/>)
        }else{
            starsArr.push(<FaStarHalfAlt/>)
        }
    }
    return starsArr
}

 




export{
    getRateStars
}