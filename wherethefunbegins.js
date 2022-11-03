const safetyOff = true;

console.log("It's starting!");

//important vars
let nameItem = document.getElementById("player");
let tetherItem = document.getElementById("tether");
let tetherScore = parseInt(tetherItem.value); //tether visibility order: Stats, Race, Background, Class/Ego
tetherItem.addEventListener('input', (event)=>{
    if(parseInt(tetherItem.value) >= 0) tetherScore = parseInt(tetherItem.value);
    if(nameItem.value) nameItem.dispatchEvent(new Event('input'));
});

const players = ["Jeff", "Nolan", "Ash", "Peyton", "Kaitlyn", "Peri"];

if (safetyOff){

    //we need to grab every modifiable attribute
    let strscore = document.getElementById("strscore");
    let strmod = document.getElementById("strmod");
    let dexscore = document.getElementById("dexscore");
    let dexmod = document.getElementById("dexmod");
    let conscore = document.getElementById("conscore");
    let conmod = document.getElementById("conmod");
    let intscore = document.getElementById("intscore");
    let intmod = document.getElementById("intmod");
    let wisscore = document.getElementById("wisscore");
    let wismod = document.getElementById("wismod");
    let chascore = document.getElementById("chascore");
    let chamod = document.getElementById("chamod");
    let ego = document.getElementById("ego");
    let cls = document.getElementById("cls");
    let backy = document.getElementById("backy");
    let race = document.getElementById("race");
    let align = document.getElementById("align");

    nameItem.addEventListener('input', (event)=>{
        if(players.includes(nameItem.value)){
            let cPlayer = nameItem.value;

            if(cPlayer == "Jeff"){
                //everyone gets a +2 ability and a +1 ability
                intscore.value = "14";
                intmod.value = "+2";
                chascore.value = "12";
                chamod.value = "+1";

                if(tetherScore >= 1){ //full base stats
                    strscore.value = "9";
                    strmod.value = "-1";
                    dexscore.value = "11";
                    dexmod.value = "+0";
                    conscore.value = "14";
                    conmod.value = "+2";
                    intscore.value = "16";
                    intmod.value = "+3";
                    wisscore.value = "13";
                    wismod.value = "+1";
                    chascore.value = "15";
                    chamod.value = "+2";
                }
                if(tetherScore >= 2){
                    race.value = "Half-Elf";
                    dexscore.value = "12";
                    dexmod.value = "+1";
                    intscore.value = "17";
                    intmod.value = "+3";
                    chascore.value = "17";
                    chamod.value = "+3";
                }
                if(tetherScore >= 3){
                    backy.value = "Anthropologist";
                }
                if(tetherScore >= 4){
                    cls.value = "Wizard 1";
                    ego.value = "Fool";
                }
            }
        }
    });
}