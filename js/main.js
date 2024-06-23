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