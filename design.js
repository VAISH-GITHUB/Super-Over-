//alert("Hey Everyone!!");

//var global scope
//const
//let block scope

/*var a=10
let b="name"
const c=true


console.log(a)
console.log(b)
console.log(c)
console.log("data type of a "+typeof(a))
console.log("data type of b "+typeof(b))
console.log("data type of a "+typeof(c))*/

var team1={
name:"Chennai Super Kings",
score:0,
runs:[]
};
var team2={
    name:"Mumbai Indians",
    score:0,
    runs:[]
};
var score=[0,1,2,3,4,5,6]
console.log(team1)
console.log(team2)
var toss;
 
window.onload=()=>{
selectToss();
updateName();
updateButtontext();
updateScores(); 
}

function selectToss(){
    toss=Math.round(Math.random())+1
    console.log(toss)
}

function updateName(){
 console.log("team 1 name "+team1.name)
 console.log("team 2 name "+team2.name)
}

function updateButtontext(){

    var button=document.getElementById("strikebutton")
    var result=document.getElementById("result")
   result.style.visibility=""
   if(team1.runs.length==6 && team2.runs.length==6){
       button.remove();
      console.log(team1.score===team2.score?"It is a draw":`${team1.score>team2.score?team1.name:team2.name} WINS`)
      result.textContent=team1.score===team2.score?"It is a draw":`${team1.score>team2.score?team1.name:team2.name} WINS`
    }
 else{
 
     toss=
     team1.runs.length===6? 2 :
     team2.runs.length===6? 1 :
      toss; 
 }
console.log(`${toss===1?team1.name :team2.name}"/t"BATTING`)
document.getElementById("strikebutton").textContent=`${toss===1?team1.name:team2.name}BATTING`;
}


handlestrike=()=>{
    var runs=score[Math.floor(Math.random()*score.length)];
    console.log(runs)
if(toss===1){
    team1.runs.push(runs);
    console.log(runs)
    team1.score=calculatescore(team1.runs)
}
else{
    team2.runs.push(runs);
    console.log(runs)
    team2.score=calculatescore(team2.runs)
}
updateScores(); 
updateButtontext();
updateName();
}

function updateScores(){
console.log("team1score "+team1.score)
console.log("team2score "+team2.score)
document.getElementById("team1score").textContent=team1.score;
document.getElementById("team2score").textContent=team2.score;
updateRuns();
}

function updateRuns(){
 var team1runs =document.getElementById("team1runs").children
 var team2runs =document.getElementById("team2runs").children
 team1.runs.forEach((run,index)=>{

    team1runs[index].textContent=run;
 });

 
 team2.runs.forEach((runs,i) =>{
    team2runs[i].textContent=runs;
});
}


var calculatescore=(runs)=>
{
    return runs.map(num=>{
        return num;
    }).reduce((total,num)=>total+num);
}
