//Check if a number is odd or even in JavaScript
function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return "Number is even"
    } else {
        return "Number is odd"
    }
}

console.log(isEvenOrOdd(2))

//Check if input variable is a number or not
function isNumber(number) {
    if (isNaN(number)) {
        return "Variable is not a number"
    } else {
        return "Variable is a valid number"
    }
}

console.log(isNumber(22))

//Find the largest of two number
function findLargest(num1, num2) {
    if (num1 > num2) {
        return `${num1} is largest number`
    } else if (num2 > num1) {
        return `${num2} is largest number`
    } else {
        return `${num1} is equal to ${num2}`
    }
}

console.log(findLargest(11, 11))

//Find the largest of three number
function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `${num1} is largest number`
    } else if (num2 > num3) {
        return `${num2} is largest number`
    } else {
        return `else print ${num3}`
    }
}

console.log(findLargest(41, 91, 33))

//Check if a triangle is equilateral, scalene, or isosceles
function findTriangleType(side1, side2, side3) {
    if ((side1 == side2) && (side1 == side3)) {
        return "Equilateral triangle"
    } else if ((side1 == side2) || (side2 == side3)) {
        return "Isosceles triangle"
    } else {
        return "Scalene triangle"
    }
}

console.log(findTriangleType(41, 41, 61))

//Find the a number is present in given range
function checkInRange(num1, num2) {
    if (num1 >= num2 && num1 <= num2) {
        return "Between the range"
    } else {
        return "Outside the range"
    }
}

console.log(checkInRange(51, 41))

//Perform arithmetic operations on two numbers
function evalNumbers(num1, num2, op) {
    if (op == "add") {
        console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`)
    } else {
        return "Outside the range"
    }
}

evalNumbers(51, 41, "add")

//Find check if a year is leap year or not
function checkLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return "leap year"
    } else {
        return "not leap year"
    }
}

console.log(checkLeapYear(2011))