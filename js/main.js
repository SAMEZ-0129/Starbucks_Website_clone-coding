const searchElment = document.querySelector('.search');
// .search input 으로 하는 것 보다 이미 변수에 추가한 .search 요소에 해당하는 변수를 document 부분에 대신 넣어서 효율적으로 작성
const searchInputEl = searchElment.querySelector('input'); 

//돋보기 아이콘을 클릭할 경우 기존 search 클래스의 focus 이벤트를 동일하게 실행시킴
searchElment.addEventListener('click', function () {
    //서치라는 클래스 가지고 있는 div요소를 클릭할 경우 발생할 이벤트
    searchInputEl.focus();
});

// focus 될 경우
searchInputEl.addEventListener('focus', function () {
    //돋보기 클릭 시 이벤트 발생하면 실행
    searchElment.classList.add('focused'); //focused 클래스를 추가
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// focus 가 해제될 경우
searchInputEl.addEventListener('blur', function () {
    //돋보기 클릭 해제될 경우
    searchElment.classList.remove('focused'); //focused 클래스를 삭제
    searchInputEl.setAttribute('placeholder', '');
});

// 우측 배너가 스크롤 시 사라지도록
const badgeEl = document.querySelector('header .badges');
 // window 객체는 현재 보고있는 창 자체 이해하면 쉽다
window.addEventListener('scroll', _.throttle( function(){  // lodash의 throttle 함수를 통해 300ms 주기로 함수 실행 = 브라우저 과부하 방지
    console.log(window.scrollY);
    if (window.scrollY > 500){
        // 우측 배너 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6 , {
            opacity: 0,
            display: 'none'
        });
    }
    else{
        // 우측 배너 보여주기
        gsap.to(badgeEl, .6 , {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
