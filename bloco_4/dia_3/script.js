function squareOfAsterisk (number) { 
    for (let i = 0;i < number; i++){
        console.log("*".repeat(number));
    }
}

function triangleOfAsterisk (number){
    for (let i = 1; i < number+1; i++){
        console.log("*".repeat(i));
    }
}

function invertTriangleOfAsterisk (number){
    for (let i = 1; i < number+1; i++){
        console.log(" ".repeat(number-i).concat("*".repeat(i)));
    }
}

function piramidOfAsterisk (number){
    for (let i =1; i < number+1; i += 2){
        console.log(" ".repeat((number-i)/2) + "*".repeat(i) + " ".repeat((number-i/2)));
    }
}

function blankPiramidOfAsterisk (number){
    for (let i = 1; i < number+1; i += 2){
        if (i == 1){
            console.log(" ".repeat((number-i)/2) + "*".repeat(i) + " ".repeat((number-i/2)));
        } else if (i == number){
            console.log("*".repeat(number));
        } else {
            console.log(" ".repeat((number-i)/2) + "*" + " ".repeat(i-2)+ "*" + " ".repeat((number-i/2)));
        }
    }
}

function isNumberPrime (number){
    if (number <= 1){
        return false;
    } else if (number == 2){
        return true;
    }
    for (let i = 2; i < number; i++){
        if (number % i == 0){
            return false;
        }
    }
    return true;
}

// squareOfAsterisk(5);

//triangleOfAsterisk(5);

//invertTriangleOfAsterisk(5);

//piramidOfAsterisk(5);

//blankPiramidOfAsterisk (7);

console.log(isNumberPrime());
