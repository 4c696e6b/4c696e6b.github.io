var r;

for (var col = 1; col <= 5; col++) {
    
    for (var i = 1; i <= 5; i++) {
        var id = col + String(i);
    
        var flag = true;
        while (flag) {
            flag = false;
            r = bingoNum(col);
    
            for (var j = 1; j < i; j++) {
                var tempId = col + String(j);
                if (document.getElementById(tempId).value == r)
                    flag = true;
            }
        }
        document.getElementById(id).value = r;
    }
}
document.getElementById('33').value = "Free Space";

function bingoNum (col) {
    
    switch(col) {
        case 1: return Math.floor(Math.random() * (15 - 1) + 1);
        case 2: return Math.floor(Math.random() * (30 - 16) + 16);
        case 3: return Math.floor(Math.random() * (45 - 31) + 31);
        case 4: return Math.floor(Math.random() * (60 - 46) + 46);
        case 5: return Math.floor(Math.random() * (75 - 61) + 61);
    }
}

function hlBtn() {$(this).toggleClass('hlBtn');}
