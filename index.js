// Code your solution here

    //1. define findMatching
    //2. 2 arguments
        //drivers (an array)
        //a string
    //3. returns matching list of drivers
    //4. NOT case sensitive
let findMatching = (drivers, string) => drivers.filter( myMatch => myMatch.toLowerCase() === string.toLowerCase() )

let fuzzyMatch = (drivers, string) => drivers.filter( myMatch => myMatch.toLowerCase().indexOf( string.toLowerCase()) === 0)

let matchName = (drivers, string) => drivers.filter( (myMatch) => myMatch.name === string)