const students = ["yasin" , "teksen" , "asaf"];
result = students.length;

//array to string
result = students.toString();
result = students.join("-");

//eleman silme
result = students.pop(); //son elemanı siler ve döndürür
result = students.shift(); //ilk elemanı siler ve döndürür

//ekleme
result = students.push("samet"); //son elemana ekle
result = students.unshift("furkan"); //ilk elemana ekle

//concat

let mark = ["mazda","mercedes"]
let mark1 = ["bmw","auidi"]
let mark2 = ["mazda","mercedes"]

result = mark.concat(mark1,mark2);

//splice
result = mark.splice(0,1,"bmw","auidi");
result = mark.splice(0, 1);

console.log(result);
console.log(students);