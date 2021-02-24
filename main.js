const price1 = 15.678
const price2 = 123.9655
const price3 = 90.2345

console.log (Math.max(price1, price2, price3))
console.log (Math.min(price1, price2, price3))

let sum
sum = price1 + price2 + price3
console.log ('sum is:' ,sum)
console.log ('rounded sum is:',Math.floor(price1) + Math.floor(price2) + Math.floor(price3))
console.log ('rounded to hundrets is: ', Math.round(sum/100)*100)

let trueOrFalse
if (Math.floor(trueOrFalse) %2 == 1) {
    trueOrFalse = false
} else {
    trueOrFalse = true
}
console.log (trueOrFalse)

console.log ('rest is :', 500-sum)

const average = ((sum)/3).toFixed(2)
console.log (average)

discount = Math.random()*100
discountPrice = sum - ((sum*discount)/100)
console.log (discountPrice.toFixed(2))
console.log (sum/2 - (discountPrice))


