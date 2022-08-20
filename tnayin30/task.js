"use strict";
const db = [
    "Անի",
    "Անուշ",
    "Գեղամ",
    "Գրիգ",
    "Էդգար",
    "Սեդա",
    "Պողոս",
    "Արամ",
    "Գևորգ"
];

let input = document.querySelector("#text");
let names = document.querySelectorAll("p");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (ev)=>{
    if(input.value != ""){
        for(let i = 0; i < db.length; i++){
            names[i].textContent = "";
        }
        
        db.forEach((el, i) => {
            if(el.toLowerCase().search(input.value) != -1){
                names[i].textContent = el;
            }
        });
        
    }else if(input.value == ""){
        for(let i = 0; i < db.length; i++){
            names[i].textContent = db[i];
        }
    }
    
});


