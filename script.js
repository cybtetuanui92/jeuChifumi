/*
////////////////////////////////////////////////////////////////////pseudo-code

ALGORITHME exoChifumi

VARIABLE

    tabChifumi---TABLEAU(index)
    player---STRING
    lapChoice---INT
    result---STRING

DEBUT

    player---SAISIR ""
    tabChifumi---[PIERRE, FEUILLE, CISEAU]
    lapChoice---ALEATOIRE(tabChifumi[index])
    result---AFFICHER EGALITE/ORDI GAGNE/PLAYER GAGNE

    SI (player==lapChoice) ALORS 
        "EGALITE"
    SINON SI (player!=lapChoice) ALORS
            SI (player==index0 && lapChoice==index1 && player==index1 && lapChoice==index2 && player==index2 && lapChoice==index0) ALORS 
                "ORDI GAGNE"
            SINON SI(player==index0 && lapChoice==index2 && player==index1 && lapChoice==index0 && player==index2 && lapChoice==index1) ALORS 
                    "Player GAGNE" 
                FINSI
            FINSI
        FINSI
    FINSI



    SI player==pierre && lapChoice==feuille ALORS "ORDI GAGNE"
    SI player==feuille && lapChoice==ciseau ALORS "ORDI GAGNE"
    SI player==ciseau && lapChoice==pierre ALORS "ORDI GAGNE"

    SI player==pierre && lapChoice==ciseau ALORS "Player GAGNE"  
    SI player==feuille && lapChoice==pierre ALORS "Player GAGNE"
    SI player==ciseau && lapChoice==feuille ALORS "Player GAGNE"


FIN

////////////////////////////////////////////////////////////////////code
*/


let player = window.prompt("Choisissez entre pierre, feuille ou ciseau ");
let tabChifumi = ["pierre", "feuille", "ciseau"];
let length = tabChifumi.length;/*INT */
let random = Math.floor(Math.random()*length);/*INT */
let lapChoice = "";/*STRING */


// console.log(length);
console.log(random);

function toString(random) {
    switch (random) {
        case 0:
            lapChoice = "pierre";
            break;
        case 1:
            lapChoice = "feuille";
            break;
        case 2:
            lapChoice = "ciseau";
            break;
    }
    return lapChoice;
}
toString(random);

console.log(lapChoice);

do{
    if (player=="pierre" && lapChoice=="feuille" || player=="feuille" && lapChoice=="ciseau" || player=="ciseau" && lapChoice=="pierre") {
        alert(`Chehhh!!!! ORDI GAGNE, car il joue ${lapChoice} et tu perds avec ${player} !`);
    }
    else if (player=="pierre" && lapChoice=="ciseau" || player=="feuille" && lapChoice=="pierre" || player=="ciseau" && lapChoice=="feuille") {
        alert(`Player joue ${player} et GAGNE contre ${lapChoice} !`);
    }
    else {
        alert(`EGALITE, l'ordinateur joue ${lapChoice} aussi!`);
    }
}while(false)

window.location.reload()

