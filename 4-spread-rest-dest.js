//                    Assignment
// Consider the following product object
let product1 = {
    id: 101,
    title: "Sony LED 40 inch 101",
    quantity: 5,
    price: 50000,
    status: true
};

// 1- Copy all the properties of product1 into product2 and change the price & status. 

let product2  = {...product1,price: 6000, status: false }

console.log(product2);



// 2- Destucture title & price of product1 and the remaining properties in others object.

let { title, price, ...others } = product2;

console.log(title, price, others);


// 3- Add some two properties in product1 dynamically.

let add = {...product1,color: "black", rating: 5}

console.log(add);

// 4- increase all number type properties of product1 by 10% using map.

