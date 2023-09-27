/*Préparation de mes variables*/
let randomNumber = 0;
let gain = 21;
let somme = 0;
let somme2 = 0;


/*la fonction de nombre aleatoire pour définir des valeur de cartes*/
function card1 () {
var randomNumber = Math.random();
randomNumber = randomNumber * 11;
randomNumber = Math.round(randomNumber);
console.log(randomNumber);
somme = somme + randomNumber;

console.log("La somme est " + somme);
}

/*Démarrage de la partie avec annonce du tour du J1 et sa première pioche*/
alert("Manche du joueur 1!");
console.log("Manche du joueur 1!");

card1();

/*fonction permettant la repioche et l'accumulation des valeurs de cartes en visant le score 21*/
function cardNext () {

while ( somme !== gain ) 
{if (somme > gain) {const lost = console.log("Perdu! Vous êtes allez au delà de 21.");break}

else if (somme === gain ) {console.log("Gagné, vous avez réussi un Blackjack!");break}

else { if (confirm("Voulez-vous piocher une nouvelle carte?")) card1();
        else { console.log("Si proche! Vous n'avez pas gagné mais pas loin avec  " + somme + " points.");break};
      ;

}}};

cardNext();

/*Annonce du score du J1*/
let scoreJoueur1 = somme;
console.log("Le joueur 1 a un score de " + scoreJoueur1);

/*fonction du tour de jeu du J2*/
function tourJoueur2 () {
alert("Manche du joueur 2!");
console.log("Manche du joueur 2!");
randomNumber = 0;
somme = 0;    
card1();
cardNext();
somme2 = somme2 + somme;

};

tourJoueur2();

/*Annonce score du J2*/
let scoreJoueur2 = somme2;
console.log("Le joueur 2 a un score de " + scoreJoueur2);

/* scores avec definition du vainqueur*/
alert("Voyons qui remporte cette manche...");

if(scoreJoueur1 > 21) {
    scoreJoueur1 = 0;} 
    else if(scoreJoueur2 > 21) {scoreJoueur2 = 0;};

console.log("joueur 1 a " + scoreJoueur1 + " points" );
console.log("joueur 2 a " + scoreJoueur2 + " points" );

if(scoreJoueur1 > scoreJoueur2) {console.log("Joueur 1 remporte la victoire!");}
else if(scoreJoueur2 > scoreJoueur1) {console.log("Joueur 2 remporte la victoire!");}
else if(scoreJoueur1 === gain){console.log("Blackjack du joueur 1 qui remporte automatiquement la victoire!");}
else if(scoreJoueur2 === gain){console.log("Blackjack du joueur 2 qui remporte automatiquement la victoire!");}
else if(scoreJoueur1 === gain && scoreJoueur2 === gain){console.log("Les deux joueurs ont fait un Blackjack! Ils remportent la victoire tout les deux!");}
else if(scoreJoueur1 === scoreJoueur2){console.log("Egalité!");}










