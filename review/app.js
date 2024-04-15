const reviewList =[
    {
        id: 1,
        name: "버팔로",
        type: "indoor",
        img: "./img/1.jpg",
        text: "장병준은 버팔로다"
    },
    {
        id : 2,
        name: "낼름",
        type: "outdoor",
        img: "./img/2.jpg",
        text: "하상현의 혀바닥이다"
    },
    {
        id: 3,
        name: "감튀정식",
        type: "indoor",
        img: "./img/3.jpg",
        text: "롯데리아에서 감튀를 먹는 정식이다"
    }
]

const mainimg = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextbtn = document.querySelector("#next-btn");

let currentIndex = 0;

window.addEventListener("DOMContentLoaded",function(){
    let item = reviewList[currentIndex];
    mainimg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
});

function showReview(index){
    const item = reviewList[index];
    mainimg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
}

preBtn.addEventListener("click",function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = reviewList.length - 1;
    }
    showReview(currentIndex);
});

nextbtn.addEventListener("click", function(){
    currentIndex++;
    if(currentIndex >= reviewList.length){
        currentIndex = 0;
    }
    showReview(currentIndex);
});