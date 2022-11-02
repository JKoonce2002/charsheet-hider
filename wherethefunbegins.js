const safetyOff = true;

console.log("It's starting!");

//important vars
let nameItem = document.getElementById("player");
let tetherItem = document.getElementById("tether");
let tetherScore = parseInt(tetherItem.value); //tether visibility order: Stats, Race, Background, Class/Ego
tetherItem.addEventListener('input', (event)=>{
    if(parseInt(tetherItem.value) >= 0) tetherScore = parseInt(tetherItem.value);
    if(nameItem.value) nameItem.dispatchEvent('input');
    console.log("Numbers");
});

const players = ["Jeff", "Nolan", "Ash", "Peyton", "Kaitlyn", "Peri"];

if (safetyOff){
    nameItem.addEventListener('input', (event)=>{
        console.log("This is an update");
    });
}