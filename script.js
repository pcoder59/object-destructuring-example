const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

/*const a = alphabet[0]
const b = alphabet[1]*/
const [a,, c, ...rest] = alphabet

const newArray = alphabet.concat(numbers)

function sumAndMultiply(a, b) {
    return [a+b, a*b]
}

const [sum, multiply, division = "No Division"] = sumAndMultiply(2,3)

const personOne = {
    name: "Kyle",
    age: 24
}

const personTwo = {
    name: "Sally",
    age: 32,
    favoriteFood: "Watermelon",
    address: {
        city: "Somewhere Else",
        state: "Another one of them"
    }
}

const { name: firstName, address: { city } } = personTwo

const personThree = {...personOne, ...personTwo}

function printUser({ name, age, favoriteFood = "Rice" }) {
    console.log(`Name is: ${name}. Age is ${age}. Favorite Food is ${favoriteFood}`)
}

printUser(personTwo)