import { shoes } from "./data"

function fakeFetch(at,to,searchedValue){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(searchedValue !== undefined && searchedValue !== ""){
                const newArr = []
                let done = 0
                for(let i = 0;i<shoes.length;i++){
                    if(new RegExp(searchedValue).test(shoes[i].name)){
                        done++
                        if(done <= at){
                            continue
                        }
                        newArr.push(shoes[i])
                        if(to-at <= newArr.length){
                            break
                        }
                    }
                }
                res(newArr)
            }else{
                res(shoes.slice(at,to))
            }
        },2000)
    })
}

export default fakeFetch