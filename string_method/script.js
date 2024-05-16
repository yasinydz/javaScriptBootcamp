let name = "Yasin";
let surname = "Yıldız";
let age = 24;
let city = "Kocaeli";

let retired = (65 - age > 0) ? `"Emekliliğe ${65-age} yılım kaldı."` + (65-age) : "Emekliyim.";

let message = `Benim adım ${name} soyadım ${surname} yaşım : ${age} ${city}'de yaşıyorum.${retired}`;



console.log(message)