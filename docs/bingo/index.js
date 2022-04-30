function getLine () {
    const lines = [
        'Animated Movie',
        'Hard R in the movie',
        "Dong's Rec",
        'Time Left Shown Accidentally',
        'Boobas',
        'Non-English Film',
        'Horror/Gore',
        'Arguing Mid Movie',
        'WRONG CHANNEL',
        'Grammar wants to play Rocket League',
        'Bad CGI/Green Screen',
        'AD Placement',
        'Bad Sex Scene',
        'Sci-Fi',
        'Cam talks the whole movie',
        '~gay~',
        'Someone rhymes something with Pussy',
        'Potty Break',
        'Mad goes on Deafen',
        'Action Movie',
        'ASS',
        'Someone spoils the movie',
        'Amp Arrives',
        'Hydro Homie on Screen',
        'Brooke forgets to start the event',
        "Aliens when there really doesn't need to be aliens",
        'Audience Stand-In',
        'Major MCU Cameo',
        'F slur',
        'R slur',
        'Plot Armor saves lives',
        'Cheap jumpscare',
        'Mad defends his use of the J slur',
        'Main character has dead parents',
        'Brooke complains about space',
        'DOG',
        'Documentary/ Based on a True Story',
        'The subtitles are ridiculous',
        "Link's stream does the thing",
        'Main character accidentally murders a side character'
        ];

    var r = Math.floor(Math.random() * (lines.length - 1));
    return lines[r];
}

const usedLines = [];
for (var i = 0; i < 24; i++) {

    var same = true;
    while (same) {

        var line = getLine();
        same = false;

        for (var j = 0; j < usedLines.length; j++) {
            if (usedLines[j] == line) same = true;
            }
    }

    usedLines.push(line);
    var id = "b" + String(i+1);
    document.getElementById(id).value = line;
}

document.getElementById('middle').value = ":) WHEEL SPIN :)";


function hlBtn() {$(this).toggleClass('hlBtn');}
