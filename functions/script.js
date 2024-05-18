function sayHello(msg) {
    console.log(msg);
}
sayHello("Hello World!");

function ageCalc(birthYear) {
    return new Date().getFullYear() - birthYear;
}

ageCalc(2000);

function retirementOfYear(birthYear,name) {
    let age = ageCalc(birthYear);
    let total_year = 65 - age;

    if(total_year > 0) {
        console.log(`${name} Bey, emekli olmanıza ${total_year} yıl kaldı.`)
    }else {
        console.log("Zaten emekli oldun!")
    }
}

retirementOfYear(2000,"Yasin");