var catFactList=[
"*Cats are believed to be the only mammals who don't taste sweetness",
"*Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans.",
"*Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw).",
"*Cats can jump up to six times their length.",
"*Cats’ claws all curve downward, which means that they can’t climb down trees head-first. Instead, they have to back down the trunk.",
"*Cats’ collarbones don’t connect to their other bones, as these bones are buried in their shoulder muscles.",
"*Cats have 230 bones, while humans only have 206.",
"*Cats have an extra organ that allows them to taste scents on the air, which is why your cat stares at you with her mouth open from time to time.",
"*Cats have whiskers on the backs of their front legs, as well.",
"*Cats have nearly twice the amount of neurons in their cerebral cortex as dogs.",
"*Cats have the largest eyes relative to their head size of any mammal.",
"*Cats use their whiskers to “feel” the world around them in an effort to determine which small spaces they can fit into. A cat’s whiskers are generally about the same width as its body.",
"*Cats walk like camels and giraffes: They move both of their right feet first, then move both of their left feet. No other animals walk this way.",
"*It turns out that Abraham Lincoln was a crazy cat president! He had four cats that lived in the White House with him.",
"*Maria Assunta left her cat, Tomasso, her entire $13 million fortune when she died in 2011.",
"*President Bill Clinton’s cat, Socks, was a media darling during the Clinton administration and was said to receive more letters than the President himself.",
"*Stubbs, a 17-year-old orange tabby, is mayor of the historic district of Talkeetna, Alaska.",
"*Thieving behavior is not uncommon among cats. They will often grab objects like stuffed animals, feather dusters, and other things that remind them of prey.",
"*Each cat’s nose print is unique, much like human fingerprints.",
"*Every Scottish Fold cat in the world can trace its heritage back to the first one, which was found in Scotland in the 1960s.",
"*White cats with blue eyes are prone to deafness.",
"*A group of kittens is called a “kindle.”",
"*A house cat could beat superstar runner Usain Bolt in the 200 meter dash.",
"*Male cats are more likely to be left-pawed, while female cats are more likely to be right-pawed.",
"*Though cats can notice the fast movements of their prey, it often seems to them that slow-moving objects are actually stagnant.",
"*Some cats are ambidextrous, but 40% are either left- or right-pawed.",
"*Some cats can swim.",
"*There are cats who have more than 18 toes. These extra-digit felines are referred to as being “polydactyl.”",
"*Cats live longer when they stay indoors.",
"*Cats’ purring may be a self-soothing behavior, since they make this noise when they’re ill or distressed, as well as when they’re happy.",
"*Cats will refuse an unpalatable food to the point of starvation.",
"*Despite popular belief, many cats are actually lactose intolerant",
"*Cats like to sleep on things that smell like their owners, such as their pillows and dirty laundry (ick!).",
"*Cats love to sleep in laundry baskets, too, because they’re basically hiding places with peep holes.",
"*Cats often attack your ankles when they’re bored."]

// console.log(catFactList[9])
var lens= catFactList.length ;
// math random formula from : techonthenet.com
// var x= Math.random()*(lens-0)+0;
// console.log(x);
// console.log(randNum);


let texts= document.getElementById("texts");
let facts= document.getElementById("fact_0");
// console.log(facts);

facts.addEventListener("click", randFact);

let newFactList=[];

function randFact(){

    var randNum= Math.round( Math.random()*(lens-0));
    var a = catFactList[randNum];
    // newFactList.push(a);
    // console.log(a);
    texts.innerText= a;
    // debugger;


    
}

randFact();



