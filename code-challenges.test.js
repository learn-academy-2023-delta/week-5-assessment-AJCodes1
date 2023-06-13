// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    it("takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c" 
      expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
      
    })
  }) 

  const codedMessage = (str) => {                    //create a function called codedMessage that takes in a string 
    let newStr = ""                                  // define a new empty string 
    for(let i = 0; i < str.length; i++) {            // create a for loop checking length of string 
        if(str[i] === "a" || str[i] === "A") {          //if string is equal to "a" or "A" add the number 4 to newStr
            newStr += "4"
        }
        else if(str[i] === "e" || str[i] === "E") {     //else if str is equal to "e" or "E" add the number 3 to newStr
            newStr += "3"
        }
        else if(str[i] === "i" || str[i] === "I") {     //else if str is equal to "i" or "I" add the number 1 to newStr
            newStr += "1"
        }
        else if(str[i] === "o" || str[i] === "O") {     //else if str is equal to "o" or "O" add the number 0 to newStr
            newStr += "0"
        }
        else {
            newStr += str[i]                               //else store current value to the newStr
        }
    }
    return newStr

  }



// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("findWords", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        
        const filterLetterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const filterLetterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        
        expect(findWords(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(findWords(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
        
    })
}) 

const findWords = (words, letter) => {              // create a function that takes in an array and a letter as parameters
    const filteredWords = []                        // create an empty array to push into
    for(let i = 0; i < words.length; i++) {         // create for loop
        if(words[i].includes(letter)) {             // check if current word includes the letter
            filteredWords.push(words[i])            // push word into new array 
        }
    }
    return filteredWords
}
 


// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// Pseudo code:

// a) Create a test with expect statements using the variable provided.
describe("isFullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true

        expect(isFullHouse(hand1)).toEqual(true)
        expect(isFullHouse(hand2)).toEqual(false)
        expect(isFullHouse(hand3)).toEqual(false)
        expect(isFullHouse(hand4)).toEqual(true)
    })
})

const isFullHouse = (numbers) => {      // create a function called isFullHouse that takes in numbers
    if(numbers.length !== 5) {          // if length of number is not 5 return false
        return false 
    }

    const counts = {}                            //create an object counts to keep track of numbers 
    for(let i = 0; i < numbers.length; i++) {    //iterate 
        const number = numbers[i]       
        if(counts[number]) {                     // if counts contain the current number 
            counts[number]++                     // increment the count by 1 if its already counted 
        }
        else {                                  // start counting from 1 if its a new number
            counts[number] = 1
        }
    }

    const values = Object.values(counts)        //get the counts of each number
    
    if(values.length !==2) {                     //check if there are exactky 2 distinct numbers 
        return false
    }

    const hasThreeOfKind = values.includes(3)   //check of there are 3of a kind and a pair
    const hasTwoOfKind = values.includes(2)

    return hasThreeOfKind && hasTwoOfKind       

}
 

// b) Create the function that makes the test pass.

// Pseudo code:
