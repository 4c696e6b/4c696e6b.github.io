const lines = [
    '"dog"',
    '~gay~',
    '1+ Year Time Skip',
    'Action Movie',
    'AD Placement',
    'Animated Movie',
    'ASS',
    'Audience Stand-In',
    'Audio Balance Go Brrrrrr',
    'Bad CGI',
    'Bad Sex Scene',
    'Blatant Racism',
    'Boobas',
    'Cheap Jumpscare',
    'Based on a True Story',
    'DOG',
    'Fr*nch :/',
    'Full Frontal',
    'Homophobia',
    'Horror/Gore',
    'Hydro Homie on Screen',
    "Stream Does the Thing (tm)",
    'Main Character Accidentally Murders a Side Character',
    'Main Character has Dead Parents',
    'Major MCU Cameo',
    'Misogyny!!!!',
    'Non-English Film',
    'Plot Armor saves lives',
    'Roll Credits',
    'Sci-Fi',
    'SKRRT',
    'Straight People be Like',
    'The Subtitles are Ridiculous',
    'Time Left Accidentally Shown',
    'Toes >:/',
    'Wildly Incorrect Science',
    'Who Asked??????'
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
