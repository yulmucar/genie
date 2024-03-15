$(function () {
  //링크방지
  $('a').click(function (e) {
    e.preventDefault();
  });

  //🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚스크립트시작

  //해더 검색창
  let searchBtn = document.getElementsByClassName('mobile_saerch')[0];
  let searchBox = document.getElementsByClassName('saerch')[0];
  let searchX = document.getElementsByClassName('x')[0];

  searchBtn.addEventListener('click', () => {
    //alert();
    if(getComputedStyle(searchBox).display === 'none'){
        searchBox.style.display = 'block'
    }//else {
      //searchBox.style.display = 'none'
    //}
  })
  searchX.addEventListener('click', () => {
      if(getComputedStyle(searchBox).display === 'block'){
        searchBox.style.display = 'none'
      }
  })


  //에디터탭메뉴
  let editorMenu = $('.editor .editor_tab li');
  let editorList = $('.editor .editor--list');

  editorMenu.click(function (){
    editorMenu.removeClass('on');
    $(this).addClass('on');

    editorList.removeClass('on');
    editorList.eq($(this).index()).addClass('on');
  })

  //뮤비
  let mvMenu = $('.mv .title_tab a');
  let mvList = $('.mv .mv-list');
  
  mvMenu.click(function (){
    mvMenu.removeClass('on');
    $(this).addClass('on');

    mvList.removeClass('on');
    mvList.eq($(this).index()).addClass('on');
  })



  //슬라이드
  var swiper = new Swiper(".mv-list", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });
  document.querySelector('#ex-in').addEventListener('input', e => {
    document.querySelector('#ex-out').innerHTML = e.target.value;
  });
});