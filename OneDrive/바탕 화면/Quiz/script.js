var updateCnt = 1; //업데이트 페이지 횟수 세기
var nowCnt = 0; //
var score = 0; //최종 점수

function updatePage(){
    
    console.log("update"+updateCnt);

    const p = document.querySelector('.question-p');
    const question = document.querySelector('.question');
    var meter = document.querySelector('.meter');

    document.querySelector('.last-container').style.visibility = "hidden";
    // 배경색 초기화
    document.querySelector('.child1').style.backgroundColor = 'transparent';
    document.querySelector('.child2').style.backgroundColor = 'transparent';
    document.querySelector('.child3').style.backgroundColor = 'transparent';
    document.querySelector('.child4').style.backgroundColor = 'transparent';
        
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

        case 5:
            //score과 replay버튼
            document.querySelector('.last-container').style.visibility = "visible";
            document.querySelector('.first-container').style.visibility = "hidden";
            document.querySelector('.second-container').style.visibility = "hidden";
            document.querySelector('.total-score').innerHTML = score;

    }
    ++updateCnt;
}

function checkAnswer(a){
    //1-1 2-3 3-2 4-4
    console.log("now"+ ++nowCnt);
    const sc = document.querySelector('.score');
    var str = '.child'+a;
    console.log(str);
    switch (nowCnt){
        case 1: 
            if(a === 1) {
                score += 1; 
                sc.innerHTML = score;
                document.querySelector('.child1').style.backgroundColor = 'green';
            } else {
                document.querySelector(str).style.backgroundColor = 'red';
            }
            break;

        case 2: 
            if(a === 3) {
                score += 1; 
                sc.innerHTML = score;
                document.querySelector('.child3').style.backgroundColor = 'green';
            } else {
                document.querySelector(str).style.backgroundColor = 'red';
            }
            break;

        case 3: 
            if(a === 2) {
                score += 1; 
                sc.innerHTML = score;
                document.querySelector('.child2').style.backgroundColor = 'green';
            } else {
                document.querySelector(str).style.backgroundColor = 'red';
            }
            break;
            
        case 4: 
            if(a === 4) {
                score += 1; 
                sc.innerHTML = score;
                document.querySelector('.child4').style.backgroundColor = 'green';
            } else {
                document.querySelector(str).style.backgroundColor = 'red';
            }
            break;
    }

    setTimeout(updatePage, 1000);


    //todo 체크해서 점수 4번 후 마지막 페이지 
}
