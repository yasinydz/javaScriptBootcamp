function word(wordPrint,number) {
    for (let i = 0; i < number; i++) {
        console.log(wordPrint)
    }
}
word("Hello World!", 5);


function rectangleCalc(short,long) {
    let field = short * long;
    let environment = (short + long) * 2;

    return `alan : ${field} çevre : ${environment}`
}

let result = rectangleCalc(5,7);
console.log(result);

function yaziTura() {
    let random = Math.random();

    if (random < 0.5) {
        console.log("Tura");
    } else {
        console.log("Yazı");
    }
}
yaziTura();

function tamBolenler(numberOne) {
    let numbers = [];

    for (let i = 2; i < numberOne; i++) {
       if(numberOne % i == 0 ){
        numbers.push(i);
       }
    }
    return numbers;
}
console.log(tamBolenler(15));

function total(a,b) {
    return a+b;
}
console.log(total(2,5));

function totalTwo() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
         result += arguments[i];
        
    }
    return result;
}

console.log(totalTwo(2,5,7));