let  myArray = ['first', 'second', 'third', 'fourth']
let totalArray = [1, 2, 3, 4, 5, 6, 7, 8]
let numArray = [4, 25, 333, 42, 3]
let a = "50"

function compare(params) {
    if (params >= 50) {
     console.log(`${params} elliden büyük`)
    }
}
compare(a)

for (let i = 0; i < numArray.length; i++) {
    const element = numArray[i];
    console.log(element)
}

function calculate(params) {
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
       console.log(element)
    }
}
calculate(totalArray)
calculate(numArray)
calculate(myArray)


function calcul(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] > 5) {
         return   
        }
        const element = params[i];
       console.log(element)
    }
}

calcul(totalArray)
calcul(numArray)

let sum = 0;

if (totalArray.length > 0) {
    for (let i = 0; i < totalArray.length; i++) {
        sum += totalArray[i]
        const element = totalArray[i];
    }
}
console.log(sum)

function calSum(params) {
    let sum = 0;
 if(params.length > 0) {
    for (let i = 0; i < params.length; i++) {
        sum += params[i]
    }
}
return sum;
}
console.log(calSum(totalArray))
console.log(calSum(numArray))
console.log(calSum([]) )
console.log(calSum(myArray))

let result = calSum(numArray)
console.log(result)

let newFunc = calSum;
console.log(newFunc(totalArray));


function highOrder(params) {
    return params*2;
}
console.log(highOrder(5))

let n = 5;
console.log(n)

console.log(highOrder(n))

function nFive(params) {
    return params+7;
}
console.log(nFive(n))

let n2 = nFive(6);

console.log(highOrder(nFive(n)))


let newArray = [5, 6, 9, 6];

function find6(params) {
    for (let i = 0; i < params.length; i++) {
        if(params[i] === 6) {
            return params[i];
        } else {
            return "6 yok"
        }
        
    }
}
console.log(find6(newArray))

const filteredArray = newArray.filter(
    function name(params) {
        return params===6;
    }
)
newArray.filter(item=>item===6);
console.log(filteredArray);


let filtering = ["ahmet", "ayşe", "45", "sevgi", 60]
console.log(filtering.includes("ayşe"));

const newfil = filtering.filter(item => typeof item === "string");
console.log(newfil);

const newfil3 = filtering.find(item => typeof item === "string");
console.log(newfil3);

const newArrayim = filtering.map(item => item);
console.log(newArrayim);

let myAr = ['first', 'repeat', 40, 'second', NaN]


const mapp = myAr.map(item => {
  if(typeof item === "string"){
  let firstChar = item.charAt(0).toUpperCase();
  let lastChars = item.substring(1)
  let result = firstChar+ lastChars
  return result;
  } else {
      return item;
  }
})
console.log(mapp)


for (let i = 0; i < mapp.length; i++) {
    console.log(mapp[i]);  
}

mapp.forEach(element => {
    console.log(element);
});