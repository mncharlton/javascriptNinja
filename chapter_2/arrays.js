let ninjas = ['billy', 'hughie', 'annie']
console.log(ninjas)
console.log(ninjas[0])
ninjas[1] = 'frenchie'
console.log(ninjas[1])

let ages = [10,15,25,41,50]
console.log(ages[2])

let random = ['matt', 2, 'otherStuff', 76, 12]
console.log(random[2])

console.log(ninjas.length)


//methods

let joinedNinjas = ninjas.join(',')
console.log(joinedNinjas)

let indexNinjas = ninjas.indexOf('annie')
console.log(indexNinjas)

let concatNinja = ninjas.concat(['homelander', 'a-team'])
console.log(concatNinja)

let pushNinja = ninjas.push('translucent')
console.log(pushNinja) //returns new array length
console.log(ninjas)


let popNinja = ninjas.pop('translucent')
console.log(popNinja) //returns popped value
console.log(ninjas)
