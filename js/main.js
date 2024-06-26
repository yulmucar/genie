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
    if (getComputedStyle(searchBox).display === 'none') {
      searchBox.style.display = 'block'
    }//else {
    //searchBox.style.display = 'none'
    //}
  })
  searchX.addEventListener('click', () => {
    if (getComputedStyle(searchBox).display === 'block') {
      searchBox.style.display = 'none'
    }
  })

  //모바일메뉴

  let mobileBtn = document.getElementsByClassName('mobile_menu')[0];
  let mobileMenu = document.getElementsByClassName('mobile_nav')[0];

  mobileBtn.onclick = function () {
    mobileMenu.style.display = 'block'
  }

  document.getElementsByClassName('mobile_close')[0].onclick = function () {
    mobileMenu.style.display = 'none'
  }


  //지니차트
  /* let list = document.querySelectorAll('.track_list');
  let prevBtn = document.getElementsByClassName('prev')[0];
  let nextBtn = document.getElementsByClassName('next')[0];

  let i = 0;

  nextBtn.addEventListener('click', () => {
    i++;
    if (i >= list.length) {
      i = 0;
    }
    list.forEach(function (item) {
      item.classList.remove('on');
    });

    console.log(list[i])
    list[i].classList.add('on');
  })//nextBtn.click end

  prevBtn.addEventListener('click', () => {
    i--;
    if (i < 0) {
      //i < 0;
      //i = 2;
      i = imageWrap.length - 1;
    }

    list.forEach(function (item) {
      item.classList.remove('on')
    })
    list[i].classList.add('on');
    /* itemImage.src = imageWrap[i]; */
    //click[i].classList.add('on');

  //}); */

  //지니차트
  var swiper = new Swiper(".track", {
    slidesPerView: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { 
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },      
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      }, 
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      }, 
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      }, 

    },
  });

  //에디터탭메뉴
  let editorMenu = $('.editor .editor_tab li');
  let editorList = $('.editor .editor--list');

  editorMenu.click(function () {
    editorMenu.removeClass('on');
    $(this).addClass('on');

    editorList.removeClass('on');
    editorList.eq($(this).index()).addClass('on');
  })

  //뮤비
  let mvMenu = $('.mv .title_tab a');
  let mvList = $('.mv .mv-list');

  mvMenu.click(function () {
    mvMenu.removeClass('on');
    $(this).addClass('on');

    mvList.removeClass('on');
    mvList.eq($(this).index()).addClass('on');
  })


  //뮤비슬라이드
  var swiper = new Swiper(".mv-list", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});