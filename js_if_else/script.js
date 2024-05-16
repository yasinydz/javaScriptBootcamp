let isLoggedin = true;

if(isLoggedin) {
    console.log("Your welcome!")
}else if (!isLoggedin) {    
    console.log("Try again!")
}else {
    console.log("Email not found!")
}

let username = "pickerwork";
let password = "12345";

if(username == "pickerwork") {
    if(password === 12345){
        console.log("Your welcome!")
    }else{
        console.log("Password or username incorrect!")
    }
}else if (!username || !password) {    
    console.log("Try again!")
}else {
    console.log("Not found!")
}