let Input = document.getElementById("password");
let Copy = document.getElementById("copy");
let Button = document.querySelector(".outerbutton");

let Length = 12;


let CapitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let SmallLetters = "abcdefghijklmnopqrstuvwxyz";
let Numbers = "0123456789";
let SpecialCharacters = "!@#$%^&*()_+[]{}\|;:'?/><.,";

let All = CapitalLetters + SmallLetters + Numbers + SpecialCharacters ;

Button.addEventListener("click",function(){
    let Password = "";
    Password += CapitalLetters[Math.floor(Math.random()* CapitalLetters.length)];
    Password += SmallLetters[Math.floor(Math.random()* SmallLetters.length)];
    Password += Numbers[Math.floor(Math.random()* Numbers.length)];
    Password += SpecialCharacters[Math.floor(Math.random()* SpecialCharacters.length)];

    while(Length > Password.length){
        Password += All[Math.floor(Math.random()* All.length)];
    }
    Input.value = Password;
});

Copy.addEventListener("click",function(){
    Input.select();
    document.execCommand("copy");
});