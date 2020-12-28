const age = prompt("How old are you?");

if(age >= 18 && age <= 21){
    console.log("You can drink but you should not");
} else if(age > 21) {
    console.log("Go ahead.");
} else {
    console.log("You can't drink.");
}
