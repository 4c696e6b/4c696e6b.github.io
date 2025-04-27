const lines = [
"chicken jockey",
"racism",
"dog tamed",
"netherite mentioned",
"no enchanting",
"kill = items",
"durability",
"herobrine",
"youtuber references",
"capes",
"fall damage / elytra death",
"cave noises",
"oof noise",
"eating noise",
"HUD mentioned",
"inventory mentioned",
"notch??",
"item looks wrong",
"tree punch",
"post credits",
"in-game credits",
"commands",
"talking mob",
"title screen text",
"c418 music",
"ender dragon",
"cat!",
"stronghold found easy",
"bad sex scene",
"~gay~",
"villager baby",
"fox",
"creeper explodes",
"smoker/blast"
    ];


var numOfSquares = 0;
var len = lines.length;
var r;

for (var i = 0; i < 24; i++) {

    // generate a random number based on the length of the array
    r = Math.floor(Math.random() * len);
    line = lines[r];
    
    // swap the chosen line and the last line in the array
    lines[r] = lines[len-1];
    lines[len-1] = line;

    // get the current square id and assign its value
    var id = "b" + String(i+1);
    document.getElementById(id).value = line;
    
    len -= 1;
}

// set the middle square
document.getElementById('middle').value = ":) WHEEL SPIN :)";

// function that allows the squares to be clicked
function hlBtn() {$(this).toggleClass('hlBtn');}
