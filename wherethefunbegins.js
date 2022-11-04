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
    let skill = document.getElementById("skill");
    let lang = document.getElementById("lang");
    let weap = document.getElementById("weap");
    let armor = document.getElementById("armor");
    let tool = document.getElementById("tool");
    let ac = document.getElementById("ac");
    let hp = document.getElementById("hp");
    let speed = document.getElementById("speed");
    let featlist = document.getElementById("featlist");

    nameItem.addEventListener('input', (event)=>{
        if(players.includes(nameItem.value)){
            let cPlayer = nameItem.value;

            if(cPlayer == "Jeff"){
                //everyone gets a +2 ability and a +1 ability
                if(tetherScore == 0){
                    intscore.value = "14";
                    intmod.value = "+2";
                    chascore.value = "12";
                    chamod.value = "+1";
                    align.value = "Chaotic Neutral";
                }

                if(tetherScore == 1){ //full base stats
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
                    hp.value = "6";
                }
                if(tetherScore == 2){
                    race.value = "Half-Elf";
                    dexscore.value = "12";
                    dexmod.value = "+1";
                    intscore.value = "17";
                    intmod.value = "+3";
                    chascore.value = "17";
                    chamod.value = "+3";
                    ac.value = "11";

                    //languages
                    var lang1 = document.createElement('p');
                    var lang2 = document.createElement('p');
                    lang1.appendChild(document.createTextNode("Elven"));
                    lang2.appendChild(document.createTextNode("Sylvan"));
                    lang.appendChild(lang1);
                    lang.appendChild(lang2);

                    //features
                    var f1 = document.createElement('li');
                    var f2 = document.createElement('li');
                    var f3 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Darkvision (60ft)"));
                    f2.appendChild(document.createTextNode("Fey Ancestry"));
                    f3.appendChild(document.createTextNode("Skill Versatility"));
                    featlist.appendChild(f1);
                    featlist.appendChild(f2);
                    featlist.appendChild(f3);

                    //skills from Skill Versatility
                    var s1 = document.createElement('p');
                    var s2 = document.createElement('p');
                    s1.appendChild(document.createTextNode("Performance"));
                    s2.appendChild(document.createTextNode("Deception"));
                    skill.appendChild(s1);
                    skill.appendChild(s2);
                }
                if(tetherScore == 3){
                    backy.value = "Anthropologist";

                    //proficiencies: skills
                    var s1 = document.createElement('p');
                    var s2 = document.createElement('p');
                    s1.appendChild(document.createTextNode("Insight"));
                    s2.appendChild(document.createTextNode("Religion"));
                    skill.appendChild(s1);
                    skill.appendChild(s2);

                    //proficiencies: languages
                    var lang1 = document.createElement('p');
                    var lang2 = document.createElement('p');
                    lang1.appendChild(document.createTextNode("Dwarven"));
                    lang2.appendChild(document.createTextNode("Draconic"));
                    lang.appendChild(lang1);
                    lang.appendChild(lang2);

                    //features
                    var f1 = document.createElement('li');
                    var f2 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Cultural Chameleon"));
                    f2.appendChild(document.createTextNode("Adept Linguist"));
                    featlist.appendChild(f1);
                    featlist.appendChild(f2);
                }
                if(tetherScore == 4){
                    cls.value = "Wizard 1";

                    //have hit dice now
                    hp.value = "8";

                    //proficiencies: weapons
                    var w1 = document.createElement('p');
                    var w2 = document.createElement('p');
                    var w3 = document.createElement('p');
                    var w4 = document.createElement('p');
                    var w5 = document.createElement('p');
                    w1.appendChild(document.createTextNode("Dagger"));
                    w2.appendChild(document.createTextNode("Dart"));
                    w3.appendChild(document.createTextNode("Sling"));
                    w4.appendChild(document.createTextNode("Quarterstaff"));
                    w5.appendChild(document.createTextNode("Light Crossbow"));
                    weap.appendChild(w1);
                    weap.appendChild(w2);
                    weap.appendChild(w3);
                    weap.appendChild(w4);
                    weap.appendChild(w5);

                    //proficiencies: skills
                    var s1 = document.createElement('p');
                    var s2 = document.createElement('p');
                    s1.appendChild(document.createTextNode("Arcana"));
                    s2.appendChild(document.createTextNode("Investigation"));
                    skill.appendChild(s1);
                    skill.appendChild(s2);

                    //features
                    var f1 = document.createElement('li');
                    var f2 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Spellcasting"));
                    f2.appendChild(document.createTextNode("Arcane Recovery"));
                    featlist.appendChild(f1);
                    featlist.appendChild(f2);
                }
                if(tetherScore == 5){
                    ego.value = "The Chariot";

                    //features
                    var f1 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Chariot's Drive"));
                    featlist.appendChild(f1);
                }
            }
            

            else if(cPlayer == "Kaitlyn"){
                //everyone gets a +2 ability and a +1 ability
                if(tetherScore == 0) {dexscore.value = "14";
                dexmod.value = "+2";
                chascore.value = "12";
                chamod.value = "+1";
                align.value = "Chaotic Good";
                ac.value = "12";
                }

                if(tetherScore == 1){ //full base stats
                    strscore.value = "13";
                    strmod.value = "+1";
                    dexscore.value = "16";
                    dexmod.value = "+3";
                    conscore.value = "9";
                    conmod.value = "-1";
                    intscore.value = "11";
                    intmod.value = "+0";
                    wisscore.value = "14";
                    wismod.value = "+1";
                    chascore.value = "15";
                    chamod.value = "+2";
                    ac.value = "13";
                }
                if(tetherScore == 2){
                    race.value = "Fall Eladrin";
                    dexscore.value = "18";
                    dexmod.value = "+4";
                    chascore.value = "16";
                    chamod.value = "+3";
                    ac.value = "14";

                    //languages
                    var lang1 = document.createElement('p');
                    lang1.appendChild(document.createTextNode("Elven"));
                    lang.appendChild(lang1);

                    //features
                    var f1 = document.createElement('li');
                    var f2 = document.createElement('li');
                    var f3 = document.createElement('li');
                    var f4 = document.createElement('li');
                    var f5 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Darkvision (60ft)"));
                    f2.appendChild(document.createTextNode("Fey Ancestry"));
                    f3.appendChild(document.createTextNode("Trance"));
                    f4.appendChild(document.createTextNode("Keen Senses"));
                    f5.appendChild(document.createTextNode("Fey Step"));
                    featlist.appendChild(f1);
                    featlist.appendChild(f2);
                    featlist.appendChild(f3);
                    featlist.appendChild(f4);
                    featlist.appendChild(f5);

                    //Perception from Keen Senses
                    var s1 = document.createElement('p');
                    s1.appendChild(document.createTextNode("Perception"));
                    skill.appendChild(s1);
                }
                if(tetherScore == 3){
                    backy.value = "Charlatan";

                    //proficiencies: skills
                    var s1 = document.createElement('p');
                    var s2 = document.createElement('p');
                    s1.appendChild(document.createTextNode("Deception"));
                    s2.appendChild(document.createTextNode("Sleight of Hand"));
                    skill.appendChild(s1);
                    skill.appendChild(s2);

                    //proficiencies: tools
                    var tool1 = document.createElement('p');
                    var tool2 = document.createElement('p');
                    tool1.appendChild(document.createTextNode("Disguise Kit"));
                    tool2.appendChild(document.createTextNode("Forgery Kit"));
                    tool.appendChild(tool1);
                    tool.appendChild(tool2);

                    //features
                    var f1 = document.createElement('li');
                    f1.appendChild(document.createTextNode("False Identity"));
                    featlist.appendChild(f1);
                }
                if(tetherScore == 4){
                    cls.value = "Rogue 1";

                    //have hit dice now
                    hp.value = "7";

                    //proficiency: armor
                    var a1 = document.createElement('p');
                    a1.appendChild(document.createTextNode("Light armor"));
                    armor.appendChild(a1);

                    //proficiency: tools
                    var tool1 = document.createElement('p');
                    tool1.appendChild(document.createTextNode("Thieves' Tools"));
                    tool.appendChild(tool1);

                    //proficiencies: weapons
                    var w1 = document.createElement('p');
                    var w2 = document.createElement('p');
                    var w3 = document.createElement('p');
                    var w4 = document.createElement('p');
                    var w5 = document.createElement('p');
                    w1.appendChild(document.createTextNode("Simple weapons"));
                    w2.appendChild(document.createTextNode("Hand crossbows"));
                    w3.appendChild(document.createTextNode("Longswords"));
                    w4.appendChild(document.createTextNode("Rapiers"));
                    w5.appendChild(document.createTextNode("Shortswords"));
                    weap.appendChild(w1);
                    weap.appendChild(w2);
                    weap.appendChild(w3);
                    weap.appendChild(w4);
                    weap.appendChild(w5);

                    //proficiencies: skills
                    var s1 = document.createElement('p');
                    var s2 = document.createElement('p');
                    var s3 = document.createElement('p');
                    var s4 = document.createElement('p');
                    s1.appendChild(document.createTextNode("Intimidation"));
                    s2.appendChild(document.createTextNode("Stealth"));
                    s3.appendChild(document.createTextNode("Persuasion"));
                    s4.appendChild(document.createTextNode("Stealth"));
                    skill.appendChild(s1);
                    skill.appendChild(s2);
                    skill.appendChild(s3);
                    skill.appendChild(s4);

                    //features
                    var f1 = document.createElement('li');
                    var f2 = document.createElement('li');
                    var f3 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Expertise"));
                    f2.appendChild(document.createTextNode("Sneak Attack"));
                    f3.appendChild(document.createTextNode("Thieves' Cant"));
                    featlist.appendChild(f1);
                    featlist.appendChild(f2);
                    featlist.appendChild(f3);
                }
                if(tetherScore == 5){
                    ego.value = "The Fool";

                    //features
                    var f1 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Fool's World"));
                    featlist.appendChild(f1);
                }
            }

            else if(cPlayer == "Nolan"){
                //everyone gets a +2 ability and a +1 ability
                if(tetherScore == 0) {intscore.value = "14";
                intmod.value = "+2";
                conscore.value = "12";
                conmod.value = "+1";
                hp.value = "5";
                align.value = "Lawful Neutral";
                }

                if(tetherScore == 1){ //full base stats
                    strscore.value = "9";
                    strmod.value = "-1";
                    dexscore.value = "11";
                    dexmod.value = "+0";
                    conscore.value = "15";
                    conmod.value = "+2";
                    intscore.value = "16";
                    intmod.value = "+3";
                    wisscore.value = "13";
                    wismod.value = "+1";
                    chascore.value = "14";
                    chamod.value = "+2";
                    hp.value = "6";
                }
                if(tetherScore == 2){
                    race.value = "Tiefling";

                    intscore.value = "17";
                    intmod.value = "+3";
                    chascore.value = "16";
                    chamod.value = "+3";

                    //languages
                    var lang1 = document.createElement('p');
                    lang1.appendChild(document.createTextNode("Infernal"));
                    lang.appendChild(lang1);

                    //features
                    var f1 = document.createElement('li');
                    var f2 = document.createElement('li');
                    var f3 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Darkvision (60ft)"));
                    f2.appendChild(document.createTextNode("Hellish Resistance"));
                    f3.appendChild(document.createTextNode("Infernal Legacy"));
                    featlist.appendChild(f1);
                    featlist.appendChild(f2);
                    featlist.appendChild(f3);
                }
                if(tetherScore == 3){
                    backy.value = "Sage (Librarian)";

                    //proficiencies: skills
                    var s1 = document.createElement('p');
                    var s2 = document.createElement('p');
                    s1.appendChild(document.createTextNode("Arcana"));
                    s2.appendChild(document.createTextNode("Investigation"));
                    skill.appendChild(s1);
                    skill.appendChild(s2);

                    //proficiencies: languages
                    var lang1 = document.createElement('p');
                    var lang2 = document.createElement('p');
                    lang1.appendChild(document.createTextNode("Dwarven"));
                    lang2.appendChild(document.createTextNode("Sylvan"));
                    lang.appendChild(lang1);
                    lang.appendChild(lang2);

                    //features
                    var f1 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Researcher"));
                    featlist.appendChild(f1);
                }
                if(tetherScore == 4){
                    cls.value = "Wizard 1";

                    //have hit dice now
                    hp.value = "8";

                    //proficiencies: weapons
                    var w1 = document.createElement('p');
                    var w2 = document.createElement('p');
                    var w3 = document.createElement('p');
                    var w4 = document.createElement('p');
                    var w5 = document.createElement('p');
                    w1.appendChild(document.createTextNode("Dagger"));
                    w2.appendChild(document.createTextNode("Dart"));
                    w3.appendChild(document.createTextNode("Sling"));
                    w4.appendChild(document.createTextNode("Quarterstaff"));
                    w5.appendChild(document.createTextNode("Light Crossbow"));
                    weap.appendChild(w1);
                    weap.appendChild(w2);
                    weap.appendChild(w3);
                    weap.appendChild(w4);
                    weap.appendChild(w5);

                    //proficiencies: skills
                    var s1 = document.createElement('p');
                    var s2 = document.createElement('p');
                    s1.appendChild(document.createTextNode("Insight"));
                    s2.appendChild(document.createTextNode("Medicine"));
                    skill.appendChild(s1);
                    skill.appendChild(s2);

                    //features
                    var f1 = document.createElement('li');
                    var f2 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Spellcasting"));
                    f2.appendChild(document.createTextNode("Arcane Recovery"));
                    featlist.appendChild(f1);
                    featlist.appendChild(f2);
                }
                if(tetherScore == 5){
                    ego.value = "The Empress";

                    //features
                    var f1 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Empress' Order"));
                    featlist.appendChild(f1);
                }
            }
            else if(cPlayer == "Peyton"){
                //everyone gets a +2 ability and a +1 ability
                if(tetherScore == 0) {wisscore.value = "14";
                wismod.value = "+2";
                dexscore.value = "12";
                dexmod.value = "+1";
                ac.value = "11";
                align.value = "Neutral Good";
                }

                if(tetherScore == 1){ //full base stats
                    strscore.value = "13";
                    strmod.value = "+1";
                    dexscore.value = "15";
                    dexmod.value = "+2";
                    conscore.value = "9";
                    conmod.value = "-1";
                    intscore.value = "16";
                    intmod.value = "+2";
                    wisscore.value = "14";
                    wismod.value = "+1";
                    chascore.value = "11";
                    chamod.value = "+0";
                    ac.value = "12";
                }
                if(tetherScore == 2){
                    race.value = "Forest Gnome";

                    intscore.value = "18";
                    intmod.value = "+4";
                    dexscore.value = "16";
                    dexmod.value = "+3";
                    ac.value = "13";
                    speed.value = "25";

                    //languages
                    var lang1 = document.createElement('p');
                    lang1.appendChild(document.createTextNode("Gnomish"));
                    lang.appendChild(lang1);

                    //features
                    var f1 = document.createElement('li');
                    var f2 = document.createElement('li');
                    var f3 = document.createElement('li');
                    var f4 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Darkvision (60ft)"));
                    f2.appendChild(document.createTextNode("Gnome Cunning"));
                    f3.appendChild(document.createTextNode("Natural Illusionist"));
                    f4.appendChild(document.createTextNode("Speak with Small Beasts"));
                    featlist.appendChild(f1);
                    featlist.appendChild(f2);
                    featlist.appendChild(f3);
                    featlist.appendChild(f4);
                }
                if(tetherScore == 3){
                    backy.value = " Artisan";

                    //proficiencies: skills
                    var s1 = document.createElement('p');
                    var s2 = document.createElement('p');
                    s1.appendChild(document.createTextNode("Insight"));
                    s2.appendChild(document.createTextNode("Persuasion"));
                    skill.appendChild(s1);
                    skill.appendChild(s2);

                    //proficiencies: tools
                    var tool1 = document.createElement('p');
                    tool1.appendChild(document.createTextNode("Smith's tools"));
                    tool.appendChild(tool1);

                    //proficiencies: languages
                    var lang1 = document.createElement('p');
                    lang1.appendChild(document.createTextNode("Undercommon"));
                    lang.appendChild(lang1);

                    //features
                    var f1 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Known Expert"));
                    featlist.appendChild(f1);
                }
                if(tetherScore == 4){
                    cls.value = "Artificer 1";

                    //have hit dice now
                    hp.value = "7";

                    //proficiency: armor
                    var a1 = document.createElement('p');
                    var a2 = document.createElement('p');
                    var a3 = document.createElement('p');
                    a1.appendChild(document.createTextNode("Light armor"));
                    a2.appendChild(document.createTextNode("Medium armor"));
                    a3.appendChild(document.createTextNode("Shields"));
                    armor.appendChild(a1);
                    armor.appendChild(a2);
                    armor.appendChild(a3);

                    //proficiency: tools
                    var tool1 = document.createElement('p');
                    var tool2 = document.createElement('p');
                    var tool3 = document.createElement('p');
                    tool1.appendChild(document.createTextNode("Thieves' Tools"));
                    tool2.appendChild(document.createTextNode("Tinker's Tools"));
                    tool3.appendChild(document.createTextNode("Leatherworker's Tools"));
                    tool.appendChild(tool1);
                    tool.appendChild(tool2);
                    tool.appendChild(tool3);

                    //proficiencies: weapons
                    var w1 = document.createElement('p');
                    w1.appendChild(document.createTextNode("Simple weapons"));
                    weap.appendChild(w1);

                    //proficiencies: skills
                    var s1 = document.createElement('p');
                    var s2 = document.createElement('p');
                    s1.appendChild(document.createTextNode("Sleight of Hand"));
                    s2.appendChild(document.createTextNode("Arcana"));
                    skill.appendChild(s1);
                    skill.appendChild(s2);

                    //features
                    var f1 = document.createElement('li');
                    var f2 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Magical Tinkering"));
                    f2.appendChild(document.createTextNode("Spellccasting"));
                    featlist.appendChild(f1);
                    featlist.appendChild(f2);
                }
                if(tetherScore == 5){
                    ego.value = "The Magician";

                    //features
                    var f1 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Magician's Court"));
                    featlist.appendChild(f1);
                }
            }
            if(cPlayer == "Ash"){
                //everyone gets a +2 ability and a +1 ability
                if(tetherScore == 0) {
                    intscore.value = "14";
                    intmod.value = "+2";
                    wisscore.value = "12";
                    wismod.value = "+1";
                    align.value = "Neutral Good";
                }

                if(tetherScore == 1){ //full base stats
                    strscore.value = "9";
                    strmod.value = "-1";
                    dexscore.value = "11";
                    dexmod.value = "+0";
                    conscore.value = "14";
                    conmod.value = "+2";
                    intscore.value = "16";
                    intmod.value = "+3";
                    wisscore.value = "15";
                    wismod.value = "+2";
                    chascore.value = "13";
                    chamod.value = "+1";
                    hp.value = "6";
                }
                if(tetherScore == 2){
                    race.value = "Firbolg";

                    wisscore.value = "17";
                    wismod.value = "+3";
                    strscore.value = "10";
                    strmod.value = "+0";

                    //languages
                    var lang1 = document.createElement('p');
                    var lang2 = document.createElement('p');
                    lang1.appendChild(document.createTextNode("Elvish"));
                    lang2.appendChild(document.createTextNode("Giant"));
                    lang.appendChild(lang1);
                    lang.appendChild(lang2);

                    //features
                    var f1 = document.createElement('li');
                    var f2 = document.createElement('li');
                    var f3 = document.createElement('li');
                    var f4 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Firbolg Magic"));
                    f2.appendChild(document.createTextNode("Hidden Step"));
                    f3.appendChild(document.createTextNode("Powerful Build"));
                    f4.appendChild(document.createTextNode("Speech of Beast and Leaf"));
                    featlist.appendChild(f1);
                    featlist.appendChild(f2);
                    featlist.appendChild(f3);
                    featlist.appendChild(f4);
                }
                if(tetherScore == 3){
                    backy.value = "Cloistered Scholar";

                    //proficiencies: skills
                    var s1 = document.createElement('p');
                    var s2 = document.createElement('p');
                    s1.appendChild(document.createTextNode("History"));
                    s2.appendChild(document.createTextNode("Nature"));
                    skill.appendChild(s1);
                    skill.appendChild(s2);

                    //proficiencies: languages
                    var lang1 = document.createElement('p');
                    var lang2 = document.createElement('p');
                    lang1.appendChild(document.createTextNode("Sylvan"));
                    lang2.appendChild(document.createTextNode("Primordial"));
                    lang.appendChild(lang1);
                    lang.appendChild(lang2);

                    //features
                    var f1 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Library Access"));
                    featlist.appendChild(f1);
                }
                if(tetherScore == 4){
                    cls.value = "Druid 1";

                    //have hit dice now
                    hp.value = "10";

                    //proficiency: armor
                    var a1 = document.createElement('p');
                    var a2 = document.createElement('p');
                    var a3 = document.createElement('p');
                    a1.appendChild(document.createTextNode("Light armor"));
                    a2.appendChild(document.createTextNode("Medium armor"));
                    a3.appendChild(document.createTextNode("Shields"));
                    armor.appendChild(a1);
                    armor.appendChild(a2);
                    armor.appendChild(a3);

                    //proficiency: tools
                    var tool1 = document.createElement('p');
                    tool1.appendChild(document.createTextNode("Herbalism Kit"));
                    tool.appendChild(tool1);

                    //proficiencies: weapons
                    var w1 = document.createElement('p');
                    var w2 = document.createElement('p');
                    var w3 = document.createElement('p');
                    var w4 = document.createElement('p');
                    var w5 = document.createElement('p');
                    var w6 = document.createElement('p');
                    var w7 = document.createElement('p');
                    var w8 = document.createElement('p');
                    var w9 = document.createElement('p');
                    var w10 = document.createElement('p');
                    w1.appendChild(document.createTextNode("Clubs"));
                    w2.appendChild(document.createTextNode("Daggers"));
                    w3.appendChild(document.createTextNode("Darts"));
                    w4.appendChild(document.createTextNode("Javelins"));
                    w5.appendChild(document.createTextNode("Maces"));
                    w6.appendChild(document.createTextNode("Quarterstaffs"));
                    w7.appendChild(document.createTextNode("Scimitars"));
                    w8.appendChild(document.createTextNode("Sickles"));
                    w9.appendChild(document.createTextNode("Slings"));
                    w10.appendChild(document.createTextNode("Spears"));
                    weap.appendChild(w1);
                    weap.appendChild(w2);
                    weap.appendChild(w3);
                    weap.appendChild(w4);
                    weap.appendChild(w5);
                    weap.appendChild(w6);
                    weap.appendChild(w7);
                    weap.appendChild(w8);
                    weap.appendChild(w9);
                    weap.appendChild(w10);

                    //proficiencies: skills
                    var s1 = document.createElement('p');
                    var s2 = document.createElement('p');
                    s1.appendChild(document.createTextNode("Medicine"));
                    s2.appendChild(document.createTextNode("Survival"));
                    skill.appendChild(s1);
                    skill.appendChild(s2);

                    //features
                    var f1 = document.createElement('li');
                    var f2 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Druidic"));
                    f2.appendChild(document.createTextNode("Spellccasting"));
                    featlist.appendChild(f1);
                    featlist.appendChild(f2);
                }
                if(tetherScore == 5){
                    ego.value = "Temperance";

                    //features
                    var f1 = document.createElement('li');
                    f1.appendChild(document.createTextNode("Temperance's Clarity"));
                    featlist.appendChild(f1);
                }
            }
            if(cPlayer == "Peri"){
                //everyone gets a +2 ability and a +1 ability
                if(tetherScore == 0) {
                    dexscore.value = "14";
                    dexmod.value = "+2";
                    chascore.value = "12";
                    chamod.value = "+1";
                    align.value = "Chaotic Neutral";
                }

                if(tetherScore == 1){ //full base stats
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
                    hp.value = "6";
                }
                if(tetherScore == 2){
                    race.value = "Half-Elf";
                }
                if(tetherScore == 3){
                    backy.value = "Anthropologist";
                }
                if(tetherScore == 4){
                    cls.value = "Wizard 1";
                }
                if(tetherScore == 5){
                    ego.value = "The Fool";
                }
            }
        }
    });
}