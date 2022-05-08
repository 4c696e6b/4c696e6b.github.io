function getLine () {
    const lines = [
        'Animated Movie',
        'Hard R in the movie',
        'Time Left Shown Accidentally',
        'Boobas',
        'Non-English Film',
        'Horror/Gore',
        'Arguing Mid Movie',
        'WRONG CHANNEL',
        'Bad CGI/Green Screen',
        'AD Placement',
        'Bad Sex Scene',
        'Sci-Fi',
        '~gay~',
        'Someone rhymes something with Pussy',
        'Potty Break',
        'Mad goes on Mute',
        'Action Movie',
        'ASS',
        'Someone spoils the movie',
        'Hydro Homie on Screen',
        'Brooke forgets to start the event',
        "Aliens when there really doesn't need to be aliens",
        'Audience Stand-In',
        'Major MCU Cameo',
        'F slur',
        'R slur',
        'Plot Armor saves lives',
        'Cheap jumpscare',
        'Main character has dead parents',
        'DOG',
        'Documentary/ Based on a True Story',
        'The subtitles are ridiculous',
        "Link's stream does the thing",
        'Main character accidentally murders a side character',
        'Roll Credits',
        'Wildly Incorrect Science',
        '1+ Year Time Skip'
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
