let spaghetti = 400;
let guanciale = 250;
let eggYolks = 18; // 1 egg yolk is 18 grams 
let cheese = 50;
let pepper = 4;
let salt = 0.5;
let water = 15; // 1 spoon of water in grams

console.log("Spaghetti alla Carbonara Recipe:");
console.log("Ingredients for 4 persons:");
console.log("* Spaghetti " + spaghetti + " grams");
console.log("* Guanciale " + guanciale + " grams");
console.log("* Very fresh egg yolks " + eggYolks + " grams");
console.log("* Aged grated Pecorino Romano cheese " + cheese + " grams");
console.log("* Raw black pepper " + pepper + " grams");
console.log("* Salt " + salt + " grams");

console.log("Instructions:");
console.log("To make classic carbonara, first cut the guanciale into 1cm layers, then into long strips. Combine the egg yolks with the finely grated Pecorino Romano. Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and chees mixture, set aside the rest. Brown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down. Cook the pasta with a pinch of salt in the water (guanciale is already very salty); set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente. Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat: this will create a creamy sauce with the pasta starch contained in that water. TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together. Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy. It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs. Add the remaining roasted black pepper and serve immediately.");

let step1 = eggYolks * 6 + cheese;

let step2 = step1 + pepper * 0.5;

let step3 = step2 + spaghetti * 1.5;

let step4 = step3 + salt;

let step5 = step4 + water * 2;

let step6 = step5 + guanciale;

let carbonara = step6;

console.log("You have " + carbonara + " grams of carbanora, enjoy your meal!");
