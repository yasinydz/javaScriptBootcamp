let courseName = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let result;

result = courseName.toLowerCase();
result = courseName.toUpperCase();
result = courseName.length;
result = courseName[0];
result = courseName.slice(0,6);
result = courseName.substring(0,6);

result = courseName.replace("Komple","Pratik");
result = courseName.trim();
result = courseName.trimEnd();
result = courseName.trimStart();

result = courseName.indexOf("Komple");
result = courseName.split(" ");
result = courseName.split(" ")[0];

console.log(result)