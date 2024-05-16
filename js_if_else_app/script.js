//--------------------------------------------------------------------------

let number = 15;

if((number > 10) && (number < 50)) {
    console.log("Sayı 10 ve 50 arasında")
}else {
    console.log("Sayı 10 dan küçük veya 50 den büyük.")
}

//--------------------------------------------------------------------------

let numberPositive = 43;

if(numberPositive % 2 && numberPositive >= 0) {
        console.log("Sayı pozitif tektir.");
}else {
    console.log("Sayı pozitif çifttir");
}

//--------------------------------------------------------------------------

let x = 10;
let y = 20;
let z = 30;

if(x > y && x > z) {
    console.log("x en büyük sayıdır.")
}else if (y > x && y > z)  {
    console.log("y en büyük sayıdır.")
}else if (z > x && z > y)  {
    console.log("z en büyük sayıdır.")
}else {
    console.log("sayıların hepsi eşittir.")
}

//--------------------------------------------------------------------------

let exam1 = 30;
let exam2 = 60;
let examFinal = 60;

let average = ((exam1 + exam2 + examFinal) / 3);

if(average >= 50) {
    console.log("Başarılı." + " Ortalama: " + average + " Final Notu: " + examFinal)
}else {
    console.log("Başarısız." + " Ortalama: " + average + " Final Notu: " + examFinal)
}

if(average >= 50 && examFinal >= 50) {
    console.log("Başarılı." + " Ortalama: " + average + " Final Notu: " + examFinal)
}else {
    console.log("Başarısız." + " Ortalama: " + average + " Final Notu: " + examFinal)
}

if(average >= 50 || examFinal >= 70) {
    console.log("Başarılı." + " Ortalama: " + average + " Final Notu: " + examFinal)
}else {
    console.log("Başarısız." + " Ortalama: " + average + " Final Notu: " + examFinal)
}
