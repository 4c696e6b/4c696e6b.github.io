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
        'Audio Balance Go Brrrrrr',
        'Bad CGI/Green Screen',
        'Bad Sex Scene',
        'Blatant Racism',
        'Boobas',
        'Cheap jumpscare',
        'Documentary/ Based on a True Story',
        'DOG',
        'Fr*nch :/',
        'Homophobia',
        'Horror/Gore',
        'Hydro Homie on Screen',
        "Link's stream does the thing",
        'Main character accidentally murders a side character',
        'Main character has dead parents',
        'Major MCU Cameo',
        'Misogyny!!!!',
        'Non-English Film',
        'Plot Armor saves lives',
        'Potty Break',
        'Roll Credits',
        'Sci-Fi',
        'SKRRT',
        'Someone spoils the movie',
        'Straight People be Like',
        'The subtitles are ridiculous',
        'Time Left Shown Accidentally',
        'Toes >:/',
        'Wildly Incorrect Science',
        'Who Asked??????'
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
alert(temp);


function hlBtn() {$(this).toggleClass('hlBtn');}
