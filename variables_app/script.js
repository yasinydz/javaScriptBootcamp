const student1 = {
    name : "Ada Bilgi",
    birthday : "2012"
};

const student2 = {
    name : "Yiğit Bilgi",
    birthday : "2010"
}

const studentMath1 = ((70+70+80)/3);
const studentMath2 = ((40+40+50)/3);

if(studentMath1 >= 50) {
    console.log("Tebrikler " + student1.name + " dersten geçtiniz.");
}else {
    console.log(student1.name + " dersten geçemediniz.");
}

if(studentMath2 >= 50) {
    console.log("Tebrikler " + student2.name + " dersten geçtiniz.");
}else {
    console.log(student2.name + " Doğum yılı :" + (student2.birthday) + " dersten geçemediniz.");
}