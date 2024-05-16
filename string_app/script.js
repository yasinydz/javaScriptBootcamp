let url = "https://www.linkedin.com/in/yasin-y%C4%B1ld%C4%B1z-698867276/";
let courseName = "Komple Uygulamalı Web Geliştirme Kursu.";

let stringApp = url.length;
console.log(stringApp);

let stringApp1 = courseName.split(" ").length;
console.log(stringApp1);

let stringAppUrl = courseName.startsWith("https");
console.log(stringAppUrl);

let stringApp2 = courseName.indexOf("Eğitimi");
console.log(stringApp2);

let stringApp3 = url.replace("/in/yasin-y%C4%B1ld%C4%B1z-698867276/","/web-gelistirme-kursu/");
console.log(stringApp3);