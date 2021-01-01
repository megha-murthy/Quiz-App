let start= document.querySelector("#start");
let divOne= document.querySelector(".content");
let result= document.querySelector(".result");
let question= document.querySelector(".question");
let answerContainer= document.querySelector(".answer-container");
let ul=document.querySelector("#ans-cont");
// let para= document.querySelector("#para-q");
let score= document.querySelector("#final-score");
let allDone= document.querySelector(".all-done");
let questionIndex= document.querySelector(".question-index");
let qa= document.querySelector(".qa");
let highScores=document.querySelector(".high-scores");
let high=document.querySelector("#high");
let clear=document.querySelector("#clear");


let qCount=0;
let correctCount=0;
let incorrectCount=0;
let para;

let questions=[
    {
        src:"./images/image1.jpeg",
        choices:['flower','animal','bird','planet'],
        answer:'flower'
    },
    {
        src:"./images/image2.jpg",
        choices:['Issac Newton','Albert Einstein','Galileo Galilei','Pythagoras'],
        answer:'Albert Einstein'
    },
    {
        src:"./images/image3.jpg",
        choices:['Mango','Banana','Peach','Kiwi'],
        answer:'Kiwi'
    },
    {
        src:"./images/image4.jpg",
        choices:['Digital','Analog','Big Ben','Bell'],
        answer:'Big Ben'
    },
    {
        src:"./images/image5.jpg",
        choices:['Badminton','Chess','Volleyball','Tennis'],
        answer:'Badminton'
    },
    {
        src:"./images/image6.jpg",
        choices:['The Statue of Unity','Christ The Redeemer','The Thinker','The Statue of Liberty'],
        answer:'The Statue of Liberty'
    },
    {
        src:"./images/image7.jpg",
        choices:['Baroque','The Mona Lisa','The Last Supper','The Starry Night'],
        answer:'The Mona Lisa'
    },
    {
        src:"./images/image8.jpg",
        choices:['The USA','India','Canada','Japan'],
        answer:'The USA'
    },
    {
        src:"./images/image9.jpg",
        choices:['Coit Tower','Leaning Tower of Pisa','Eiffel Tower','Tokyo Tower'],
        answer:'Eiffel Tower'
    },
    {
        src:"./images/image10.png",
        choices:['Screwdriver','Spanner','Screws','Hammer'],
        answer:'Screwdriver'
    }

]

function startQuiz(){
    nextQuestion();
}

function nextQuestion(){
    // console.log(qCount)
    divOne.innerHTML="";
    result.innerHTML="";
    if (qCount<questions.length){
        ul.innerHTML="";
        question.innerHTML="";
        let para=document.createElement("img");
        let ques= questions[qCount].src;
        para.setAttribute('src',ques);
        question.appendChild(para);
        

        for(let j=0;j<questions[qCount].choices.length;j++){
            let li= document.createElement("li");
            li.setAttribute("id",j)
            li.setAttribute("style","background-color: wheat;width:200px;margin-bottom:10px;padding:5px;border-radius:5px;height:35px;")
            li.textContent=questions[qCount].choices[j]; 
            ul.appendChild(li);
        }

    }
    else{
        //event.preventDefault();
        questionIndex.innerHTML="";
        newDiv= document.createElement("div");
        newDiv.setAttribute("id","new-div");
        allDone.appendChild(newDiv);
        
        let paraOne=document.createElement("h2");
        paraOne.textContent="All Done!";
        newDiv.appendChild(paraOne);

        let newPara= document.createElement("h4");
        newPara.textContent= "Your final score is:  ";
        newDiv.appendChild(newPara);

        let spanTag= document.createElement("span");
        spanTag.setAttribute("id", "score-span");
        spanTag.textContent= correctCount;
        newPara.appendChild(spanTag);


        formDiv= document.createElement("form");
        formDiv.setAttribute("style","margin-right:30px;margin-top:30px;margin-bottom:30px;")
        allDone.appendChild(formDiv);
        label= document.createElement("label");
        
        // label.textContent="Enter initials: "
        // formDiv.appendChild(label);
        // let input= document.createElement("input");
        // input.setAttribute("type","text");
        // input.setAttribute("id", "one");
        // formDiv.appendChild(input);

        // sepDiv= document.createElement("span");
        // allDone.appendChild(sepDiv);
        // submitButton= document.createElement("button");
        // submitButton.setAttribute("id","submit");

        // submitButton.setAttribute("onclick",'viewHighscores()');
        // submitButton.textContent= "Submit";
        // submitButton.setAttribute("style","background-color:blue; width:100px; height: 30px; color:white;font-size:15px;")
        // sepDiv.appendChild(submitButton);
        

    }
}

// function viewHighscores(){

//     let getLabel=document.querySelector("#one").value;
//     let getScore=document.querySelector("#score-span").textContent;

//     obj = {"init":getLabel,"score":getScore};
    
//     let data = JSON.parse(localStorage.getItem('person'));
//     if (data) {
//         data.push(obj);
//     } else {
//         data = [];
//         data.push(obj);
//     }

//     localStorage.setItem('person', JSON.stringify(data));
//     location.assign("viewhighscores.html");
// }


function clickAnswer(){
    if (event.target.matches("li")===true){
        // console.log("YES")
        var index= event.target.getAttribute("id");
    
        if (questions[qCount].choices[index]===questions[qCount].answer){
            result.textContent="Correct!";  
            result.setAttribute("style","color:green;")
            correctCount++;
            // nextQuestion();
        }
        else{ 
            //debugger;       
            result.textContent="Incorrect";  
            result.setAttribute("style","color:red;")
            incorrectCount++;

            // nextQuestion();
                
        }
    }
    qCount++;
    setTimeout(nextQuestion, 1000);
    
}

if(start){
    start.addEventListener('click',startQuiz)
}

if (ul) {
    ul.addEventListener("click",clickAnswer);
}
