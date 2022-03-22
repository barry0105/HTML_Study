const menu = document.getElementById('menu');
const corrent_awnser = ["apple","great","front","phone","fault","plane","sault"];
var choose;
function rand_Choice(){
    choose = corrent_awnser[Math.floor(Math.random()*corrent_awnser.length)];
    console.log(choose);
}
rand_Choice();
menu.addEventListener('mouseover', function(){
    document.querySelector('.expand_menu').style.display = 'block';
});
menu.addEventListener('mouseleave', function(){
    document.querySelector('.expand_menu').style.display = 'none';
});
var inbox = document.querySelectorAll('.inner');
let cnt = 0;
var anwser;
function insert(ins){
    for(let i=0; i<inbox.length;i++){
        if(inbox[i].value == ""){
            inbox[i].value = ins;
            cnt++;
            anwser+=ins;
            console.log(anwser);
            if(cnt>5){
                alert("제출하세용?");
                inbox[i].value = "";
                break;
            }
            break;
        }
        else{
            console.log("못 넣는데용?");
            console.log(inbox[i].value);
        }
    }
}
document.querySelector("#Q").addEventListener('click',function(){insert('Q')});
document.querySelector("#W").addEventListener('click',function(){insert('W')});
document.querySelector("#E").addEventListener('click',function(){insert('E')});
document.querySelector("#R").addEventListener('click',function(){insert('R')});
document.querySelector("#T").addEventListener('click',function(){insert('T')});
document.querySelector("#Y").addEventListener('click',function(){insert('Y')});
document.querySelector("#U").addEventListener('click',function(){insert('U')});
document.querySelector("#I").addEventListener('click',function(){insert('I')});
document.querySelector("#O").addEventListener('click',function(){insert('O')});
document.querySelector("#P").addEventListener('click',function(){insert('P')});
document.querySelector("#A").addEventListener('click',function(){insert('A')});
document.querySelector("#S").addEventListener('click',function(){insert('S')});
document.querySelector("#D").addEventListener('click',function(){insert('D')});
document.querySelector("#F").addEventListener('click',function(){insert('F')});
document.querySelector("#G").addEventListener('click',function(){insert('G')});
document.querySelector("#H").addEventListener('click',function(){insert('H')});
document.querySelector("#J").addEventListener('click',function(){insert('J')});
document.querySelector("#K").addEventListener('click',function(){insert('K')});
document.querySelector("#L").addEventListener('click',function(){insert('L')});
document.querySelector("#Z").addEventListener('click',function(){insert('Z')});
document.querySelector("#X").addEventListener('click',function(){insert('X')});
document.querySelector("#C").addEventListener('click',function(){insert('C')});
document.querySelector("#V").addEventListener('click',function(){insert('V')});
document.querySelector("#B").addEventListener('click',function(){insert('B')});
document.querySelector("#N").addEventListener('click',function(){insert('N')});
document.querySelector("#M").addEventListener('click',function(){insert('M')});
