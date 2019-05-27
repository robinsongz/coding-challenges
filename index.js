

// Project Euler problem 1: 

const sum = x => {
    
    // make empty array
    let array = [];

    // run for loop on all numbers below x and push into array
    // creates new array of all numbers below x
    for (let i = 0; i < x; i++) {
        array.push(i);
    }

    // filter new array by numbers that are divisible by 3 or 5
    let newArray = array.filter(number => number % 3 == 0 || number % 5 == 0)

    // add all numbers in new array
    return newArray.reduce((a, b) => { return a + b });

   
}

// Project Euler problem 2:

const fiboSum = x => {

    // filter array by numbers that are even
    let evenArray = x.filter(number => number % 2 == 0);

    // add numbers in new array
    return evenArray.reduce((a, b => {
        return a + b;
    }))
}

// Greatest Sum problem: 

const greatestSum = x => {

    // reduce array to find largest number

    let largestNumber = x.reduce((a,b => {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }))

    // remove largest number from array
    let index = x.indexOf(largestNumber);

    let newArray = x.splice(index, 1);

    // reduce new array to find new largest number
    let secondLargestNumber = newArray.reduce((a,b => {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }))

    // add largest and second largest numbers to find sum
    return largestNumber + secondLargestNumber;

}


// Hacker rank ransom challenge 

const checkMagazine = (magazine, note) => {

    // iterate through first array
    for (let i = 0; i < magazine.length; i++) {

        // iterate first word from first array through second array's words
        for (let l = 0; l < note.length; l++) {

            // if word from magazine matches word from note, delete word from second array and break loop
            if (magazine[i] == note[l]) {

                let word = note[l];

                let index = note.indexOf(word);

                if (index > -1) {
                    note.splice(index, 1);
                    break;
                }
                
            }
        }
    }

    // if note array is empty, return yes. otherwise, return no
    if (note.length == 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

// hacker rank left side rotation


function rotLeft(a, d) {

    // apply function d number of times
    for (var i = 0; i < d; i++) {

            // push first element, then delete first element
            a.push(a[0]);
            a.shift();
        }
    
    return a;
    
}







