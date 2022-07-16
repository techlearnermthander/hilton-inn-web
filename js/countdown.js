let daysItem = document.querySelector("#awards");
var timeleft = 42;
var interval = setInterval(function () {
    if (timeleft <= 0) {
        timeleft = 42;
    }
    daysItem.innerHTML = 43 - timeleft;
    timeleft -= 1;

}, 100);

let nationalPartner = document.querySelector("#nationalPartner");
var timeleftNP = 22;
var intervalNP = setInterval(function () {
    if (timeleftNP <= 0) {
        timeleftNP = 22;
    }
    nationalPartner.innerHTML = 23 - timeleftNP;
    timeleftNP -= 1;

}, 100);

let sclient = document.querySelector("#sclient");
var timeleftSP = 20;
var intervalSP = setInterval(function () {
    if (timeleftSP <= 0) {
        timeleftSP = 20;
    }
    let c = 21 - timeleftSP
    sclient.innerHTML = c + "K";
    timeleftSP -= 1;

}, 100);

let tmember = document.querySelector("#tmember");
var timeleftTM = 250;
var intervalTM = setInterval(function () {
    if (timeleftTM <= 0) {
        timeleftTM = 250;
    }
    tmember.innerHTML = 251 - timeleftTM;
    timeleftTM -= 1;

}, 100);

var i = 0;

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("bar5");
        var width = 1;
        var id = setInterval(frame, 100);

        function frame() {
            if (width >= 60) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

setInterval(move, 100);

var j = 0;

function moveJ() {
    if (j == 0) {
        j = 1;
        var elem = document.getElementById("bar4");
        var width = 1;
        var id = setInterval(frame, 100);

        function frame() {
            if (width >= 45) {
                clearInterval(id);
                j = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

setInterval(moveJ, 100);

var k = 0;

function moveK() {
    if (k == 0) {
        k = 1;
        var elem = document.getElementById("bar3");
        var width = 1;
        var id = setInterval(frame, 100);

        function frame() {
            if (width >= 20) {
                clearInterval(id);
                k = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

setInterval(moveK, 100);

var l = 0;

function moveL() {
    if (l == 0) {
        l = 1;
        var elem = document.getElementById("bar2");
        var width = 1;
        var id = setInterval(frame, 100);

        function frame() {
            if (width >= 7) {
                clearInterval(id);
                l = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

setInterval(moveL, 100);

var m = 0;

function moveM() {
    if (m == 0) {
        m = 1;
        var elem = document.getElementById("bar1");
        var width = 1;
        var id = setInterval(frame, 100);

        function frame() {
            if (width >= 17) {
                clearInterval(id);
                m = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

setInterval(moveM, 100);

let satclient = document.querySelector("#satclient");
var timeS1left = 20;
var interval = setInterval(function(){
    if(timeS1left <= 0){
    timeS1left=20;
  }
    var ty=21 - timeS1left;
    satclient.innerHTML= ty+'<span class="short">K';
    timeS1left -= 1;
    
}, 100);

let roomNo = document.querySelector("#roomNo");
var timeRleft = 240;
var interval = setInterval(function(){
    if(timeRleft <= 0){
    timeRleft=240;
  }
    roomNo.innerHTML= 241 - timeRleft;
    timeRleft -= 1;
    
}, 100);

let awardWin = document.querySelector("#awardWin");
var timeAWleft = 35;
var interval = setInterval(function(){
    if(timeAWleft <= 0){
    timeAWleft=35;
  }
    awardWin.innerHTML= 36 - timeAWleft;
    timeAWleft -= 1;
    
}, 100);

let teamMember = document.querySelector("#teamMember");
var timeTMSleft = 100;
var interval = setInterval(function(){
    if(timeTMSleft <= 0){
    timeTMSleft=100;
  }
    teamMember.innerHTML= 101 - timeTMSleft;
    timeTMSleft -= 1;
    
}, 100);
