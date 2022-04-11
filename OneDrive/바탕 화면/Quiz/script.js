var updateCnt = 1; //페이지 횟수 세기
var score = 0; //최종 점수

function updatePage(){
    
    console.log(updateCnt);
    const p = document.querySelector('.question-p');
    const question = document.querySelector('.question');
    var meter = document.querySelector('.meter');
        

    switch (updateCnt){
        case 2: 
            p.innerHTML = "Question 2/4";
            question.innerHTML = "What is 3+4?"
            meter.value = 50;
            document.querySelector('.child1').innerHTML=
            document.querySelector('.child1').innerHTML.replace('4','2');

            document.querySelector('.child2').innerHTML=
            document.querySelector('.child2').innerHTML.replace('3','9');

            document.querySelector('.child3').innerHTML=
            document.querySelector('.child3').innerHTML.replace('5','7');

            document.querySelector('.child4').innerHTML=
            document.querySelector('.child4').innerHTML.replace('6','5');
            
            break;
        case 3: 
            p.innerHTML = "Question 3/4";
            question.innerHTML = "What is 8-5?"
            meter.value = 70;
            document.querySelector('.child1').innerHTML=
            document.querySelector('.child1').innerHTML.replace('2','11');

            document.querySelector('.child2').innerHTML=
            document.querySelector('.child2').innerHTML.replace('9','3');

            document.querySelector('.child3').innerHTML=
            document.querySelector('.child3').innerHTML.replace('7','5');

            document.querySelector('.child4').innerHTML=
            document.querySelector('.child4').innerHTML.replace('5','6');
            break;
        case 4: 
            p.innerHTML = "Question 4/4";
            question.innerHTML = "What is 7*2?"
            meter.value = 100;

            document.querySelector('.child1').innerHTML=
            document.querySelector('.child1').innerHTML.replace('11','8');

            document.querySelector('.child2').innerHTML=
            document.querySelector('.child2').innerHTML.replace('3','21');

            document.querySelector('.child3').innerHTML=
            document.querySelector('.child3').innerHTML.replace('5','16');

            document.querySelector('.child4').innerHTML=
            document.querySelector('.child4').innerHTML.replace('6','14');
            break;
    }
    ++updateCnt;
}
function checkAnswer(){
    setTimeout(updatePage, 1000);


    
}
