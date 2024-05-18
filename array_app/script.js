let fruits = ["Elma","Armut","Muz","Çilek"];

let result = fruits.length;

console.log(result);

result = fruits.shift();
result = fruits.unshift();

console.log(result);

console.log(fruits.includes("Elma"));
console.log(fruits.indexOf("Elma"));


result = fruits.push("Kiraz");
fruits.pop();
fruits.pop();
console.log(fruits);

result = fruits.splice(fruits.length -2,2)
console.log(fruits);

const students = [
    {
        "name" : "Yiğit Bilgi",
        "birthday" : 2010,
        "note" : (70+80+80)
    },
    {
        "name" : "Ada Bilgi",
        "birthday" : 2012,
        note : (80+80+90)
    },
    {
        "name" : "Ahmet Turan",
        "birthday" : 2009,
        "note" : (60+60+70)
    }
]
for (const student of students) {
    const studentName = student.name;
    const age = new Date().getFullYear() - student.birthday;
    const average = student.note / 3;
    console.log(`Öğrenci ismi: ${studentName} | Yaşı: ${age} | Ders Ortalaması: ${Math.round(average)}`);
}
