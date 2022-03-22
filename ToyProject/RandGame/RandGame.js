var targetNum;
var startStatus = false;
var cnt = 0;
var maxCnt = 10;
var compare = "";
var startBtn = document.getElementById("sbtn");
var applyBtn = document.getElementById("apbtn");
var reStartBtn = document.getElementById("restartBtn");
var endBtn = document.getElementById("endBtn");
var numIn = document.getElementById("numinput")
function gameStart(){
    targetNum = Math.floor(Math.random() * 100) + 1;
    console.log("맞춰야될 숫자 : ", targetNum);
    document.querySelector('.stage02').style.display = 'block';
    trace.chanceLeft(10);
    startBtn.style.display = 'none';
}
function Trace(){
    this.clear = function(){
        document.querySelector('.log').innerHTML = "";
    }
    this.log = function(msg){
        var ul = document.querySelector('.log');
        var li = document.createElement('li');
        li.innerHTML = msg;
        ul.appendChild(li);
    }
    this.chanceLeft = function(leftChance){
        document.querySelector('.leftNum').innerHTML = leftChance + "번";
    }
}
var trace = new Trace();

function applyNum(){
    var userNum = document.querySelector('input[name="num"]').value;

    if(userNum == "" || userNum == undefined){
        alert('값을 입력하세요.');
    }else{
        cnt++;
        trace.chanceLeft(maxCnt-cnt);
        
        if(targetNum == userNum){
            compare = "같아요! 축하합니다 ! YOU WIN";
            Reset.endStatus();
        }else{
            if(targetNum > userNum){
                compare = "높아요";
            }else{
                compare = "낮아요";
            }
            if(cnt === maxCnt && targetNum !== userNum){
                Reset.endStatus();
                compare = compare + "! 틀렸습니다! YOU LOSE";
            }
        }
        log = userNum+"를 입력했어요, "+userNum+"보다 "+compare+"!";
        trace.log(log);
        document.querySelector('input[name="num"]').value="";
    }
}

function Reset(){
    this.clearStatus = function(){
        document.querySelector('.gameStartText').style.display = "block";
        document.querySelector('.reStart').style.display = 'none';
        document.querySelector('input[name="num"]').disabled = false;
        document.querySelector('input[name="num"]').value = "";
        trace.clear();
        cnt = 0;
        startBtn.style.display = 'block';
    }
    this.endStatus = function(){
        document.querySelector('.reStart').style.display = 'block';
        document.querySelector('input[name="num"]').disabled = true;
    }
    this.focusInput = function(){
        document.querySelector('input[name="num"]').focus();
    }
}
var Reset = new Reset();

function gameEnd(){
    Reset.clearStatus();
    document.querySelector('.stage02').style.display = "none";
    document.querySelector('.reStart').style.display + "none";
}
function re_Start(){
    Reset.clearStatus();
    gameStart();
}
function enterCheck(){
    if(event.keyCode === 13){
        applyNum();
    }
}
numIn.addEventListener("onkeydown",enterCheck);
reStartBtn.addEventListener("click",re_Start);
endBtn.addEventListener("click",gameEnd);
applyBtn.addEventListener("click",applyNum);
startBtn.addEventListener("click",gameStart);