let age = 18;
let graduation = "university"

if((age >= 18) && (graduation == "high school" || graduation == "university")) {
    console.log("Can get a driving license!")
}else if (!((age >= 18) && (graduation == "high school" || graduation == "university"))) {    
    console.log("Cannot get a driver's license")
}else {
    console.log("Please get information.")
}