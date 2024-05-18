const user = [
    {
        "name" : "Yasin",
        "lastname" : "Yıldız",
        "age" : 2000,
        "adress" : {
            "city" : "Kocaeli",
            "county" : "Başiskele"
        },
        "hobbies" : [
            "kitap okumak",
            "fitness"
        ]
    }
];

let example = user[0].name;
console.log(example)

for (const userInfo of user) {
    const userFullName = userInfo.name + " " + userInfo.lastname;
    const age = new Date().getFullYear() - userInfo.age;
    const userAdress = userInfo.adress.city + "/" + userInfo.adress.county;
    const hobbies1 = userInfo.hobbies[0];
    console.log(`Kullanıcı ismi: ${userFullName} | Yaşı: ${age} | Adres: ${userAdress} | Hobbiler : ${hobbies1}`);
}
