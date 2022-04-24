function getLine () {
    const lines = ['Animated\n Movie', 'Hard R\n in the\n movie', "Dong's\n Rec", 'Time Left\n Shown\n Accidentally',
            'Boobas', 'Non-English\n Film', 'Horror/Gore', 'Arguing\n Mid Movie', 'WRONG\n CHANNEL',
            'Grammar\n wants to\n play\n Rocket\n League', 'Bad\n CGI/Green\n Screen', 'AD\n Placement',
            'Bad Sex\n Scene', 'Sci-Fi', 'Cam talks\n the whole\n movie', '~gay~',
            'Someone\n rhymes\n something\n with Pussy', 'Potty\n Break', 'Mad goes\n on Deafen', 'Action\n Movie',
            'ASS', 'Someone\n spoils\n the movie', 'Amp\n Arrives', 'Hydro\n Homie\n on\n Screen',
            'Brooke\n forgets\n to start\n the event', 'Documentary',
            "Aliens\n when there\n really doesn't\n need to\n be aliens", 'Audience\n Stand-In',
            'Major MCU\n Cameo'];

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

document.getElementById('middle').value = ":)\n WHEEL SPIN \n:)";

function hlBtn () {
  $(this).toggleClass('hlBtn');
};
