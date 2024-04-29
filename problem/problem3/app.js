let score = prompt("학점을 입력하세요");

if(score === 4.5)
    alert("신");
else if(score >= 4.0)
    alert("교수님");
else if(score >= 3.0)
    alert("인간");
else if(score >= 2.0)
    alert("돌고래");
else if(score >= 1.0)
    alert("플랑크톤");
else
    alert("값이 이상함");