
//                    Assignment
// We suppose marks array as  
let marks = [90, 80, 65, 40, 75, 30, 25, 15];

// 1- Print all the numbers greater then 40 in asc order using map

let arr = []

marks.map(m =>{
    if(m > 40){
        arr.push(m)
    }

    return m
})

let ans = arr.sort((a,b) => a-b)

console.log(ans);

// 2- Find all the students having number equal to 70. 

let find = marks.filter(f => f === 70 || f > 70)

console.log(find);


// 3- Find all the numbers less then 40 using filter function.

let lessNum = marks.filter(less => less < 40).sort((a,b) => a-b)

console.log(lessNum);

// 4- Using forEach function display only fail students.

let arr2 = []

marks.forEach(a =>  {

    if(a < 40){
        arr2.push(a);
    }
});

console.log(arr2);