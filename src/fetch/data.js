import { faker } from '@faker-js/faker';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const shoes = [

]

for(let i =0;i<50;i++){
    shoes.push({
        name : faker.commerce.productName(),
        size : `${getRandomInt(20,30)}-${getRandomInt(30,40)}`,
        rate : getRandomInt(0,5),
        description : faker.commerce.productDescription(),
        id : Math.random(),
        price : faker.commerce.price(),
        moreImgs : ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95b41b04-47b5-4721-a6dc-3bd9943a8aaa/air-jordan-5-retro-se-craft-mens-shoes-MGhD1k.png","https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/733d8d4c-a7df-4090-9ba5-ad8f75acd815/air-jordan-6-retro-big-kids-shoes-yATYM4KO.png"],
        url : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95b41b04-47b5-4721-a6dc-3bd9943a8aaa/air-jordan-5-retro-se-craft-mens-shoes-MGhD1k.png"
    })
}

export {
    shoes
}