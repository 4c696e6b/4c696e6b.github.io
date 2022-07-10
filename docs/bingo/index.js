function getLine () {
    const lines = [
        '~gay~',
        '1+ Year Time Skip',
        'Action Movie',
        'AD Placement',
        'Animated Movie',
        'Arguing Mid Movie',
        'ASS',
        'Audience Stand-In',
        'Bad CGI/Green Screen',
        'Bad Sex Scene',
        'Blatant Racism',
        'Boobas',
        'Brooke forgets to start the event',
        'Cheap jumpscare',
        'Documentary/ Based on a True Story',
        'DOG',
        'Fr*nch :/',
        'Homophobia',
        'Horror/Gore',
        'Hydro Homie on Screen',
        "Link's stream does the thing",
        'Mad goes on Mute',
        'Main character accidentally murders a side character',
        'Main character has dead parents',
        'Major MCU Cameo',
        'Non-English Film',
        'Plot Armor saves lives',
        'Potty Break',
        'Roll Credits',
        'Sci-Fi',
        'SKRRT',
        'Someone rhymes something with Pussy',
        'Someone spoils the movie',
        'The subtitles are ridiculous',
        'Time Left Shown Accidentally',
        'Toes >:/',
        'Wildly Incorrect Science'
        ];

    var r = Math.floor(Math.random() * lines.length);
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
