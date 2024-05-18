let numbers = [1,5,7,15,3,25];

for(let i of numbers) {
    let square = i * i;
    console.log(square) 
}

console.log("*************************************************************")

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 5 === 0) {
        console.log(numbers[i] + " 5'in katıdır.")
    } 
}

console.log("*************************************************************")

let doubleTotal = 0;

for(let double of numbers) {
    if(double % 2 === 0) {
       doubleTotal += double
    } 
}
console.log(doubleTotal);

console.log("*************************************************************")

let products = ["Iphone 12" , "Samsung S22", "Iphone 13", "Samsung S23"];

for (const product of products) {
    console.log(product.toUpperCase());
}

let samsunPlus = 0;
for (const product of products) {
    if(product.includes("Samsung")){
        samsunPlus++;
    }
}

let students = [
    {"ad" : "Yiğit", "soyad" : "Bilgi", "notlar" : [60,70,60]}, 
    {"ad" : "Ada", "soyad" : "Bilgi", "notlar" : [80,70,80]}, 
    {"ad" : "Çınar", "soyad" : "Turan", "notlar" : [70,70,60]} 
];

for(let ogrenci of ogrenciler) {
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;
    for(let not of ogrenci.notlar) {
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;

    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencimnin not ortalaması : ${ortalama}.`);

    if(ortalama>=50) {
        console.log("başarılı.");
    } else {
        console.log("başarısız.");
    }    
}
