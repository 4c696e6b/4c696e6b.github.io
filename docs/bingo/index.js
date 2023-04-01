var r;

// set the middle square
document.getElementById('middle').value = "Free Space";

for (var i = 1; i <= 5; i++) {
    var id = "b" + String(i);
    
    var flag = true;
    while (flag) {
    
        flag = false;
        r =Math.floor(Math.random() * (15 - 1) + 1);
    
        for (var j = 1; j < i; j++) {
            var tempId = "b" + String(j);
            if (document.getElementById(tempId).value == r) {
                flag = true;
            }
        }
    }
    
    document.getElementById(id).value = r;
}

for (var i = 1; i <= 5; i++) {
    var id = "i" + String(i);
    
    var flag = true;
    while (flag) {
    
        flag = false;
        r =Math.floor(Math.random() * (30 - 16) + 16);
    
        for (var j = 1; j < i; j++) {
            var tempId = "i" + String(j);
            if (document.getElementById(tempId).value == r) {
                flag = true;
            }
        }
    }
    
    document.getElementById(id).value = r;
}

for (var i = 1; i <= 4; i++) {
    var id = "n" + String(i);
    
    var flag = true;
    while (flag) {
    
        flag = false;
        r =Math.floor(Math.random() * (45 - 31) + 31);
    
        for (var j = 1; j < i; j++) {
            var tempId = "n" + String(j);
            if (document.getElementById(tempId).value == r) {
                flag = true;
            }
        }
    }
    
    document.getElementById(id).value = r;
}

for (var i = 1; i <= 5; i++) {
    var id = "g" + String(i);
    
    var flag = true;
    while (flag) {
    
        flag = false;
        r =Math.floor(Math.random() * (60 - 46) + 46);
    
        for (var j = 1; j < i; j++) {
            var tempId = "g" + String(j);
            if (document.getElementById(tempId).value == r) {
                flag = true;
            }
        }
    }
    
    document.getElementById(id).value = r;
}

for (var i = 1; i <= 5; i++) {
    var id = "o" + String(i);
    
    var flag = true;
    while (flag) {
    
        flag = false;
        r =Math.floor(Math.random() * (75 - 61) + 61);
    
        for (var j = 1; j < i; j++) {
            var tempId = "o" + String(j);
            if (document.getElementById(tempId).value == r) {
                flag = true;
            }
        }
    }
    
    document.getElementById(id).value = r;
}

// function that allows the squares to be clicked
function hlBtn() {$(this).toggleClass('hlBtn');}
