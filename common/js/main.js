//next tab
function openPage(pageName, elmnt, color, classParent) {
  // console.log({ pageName, elmnt, color,classParent });

  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(`.${classParent} .tabcontent`);
  // console.log(tabcontent);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.querySelectorAll(`.${classParent} .tablink`);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
    tablinks[i].classList.remove('active_tab');
  }
  document.querySelector(`.${classParent} #${pageName}`).style.display =
    'block';
  elmnt.style.backgroundColor = color;
  elmnt.classList.add('active_tab');
  // reset color white

  $(`.outProducts.${classParent}  .row__bottom .tab .tablink`).css(
    'color',
    '#fff'
  );
  //when element seclect -> color has #0c4947
  elmnt.style.color = '#0c4947';
  // reset padding nho
  $(`.${classParent} .tablink`).css('padding', '1.5rem 0.6rem');
  // console.log(`.${classParent} .tablink`);
  //who is active -> Padding big
  elmnt.style.padding = '1.8rem 0.6rem';
  //activeTab  
  if (pageName == 'ProductType') {
    $(`.${classParent} .tab`).click(function(){
      $(this).css("justify-content", "flex-start");
      $(this).find(".tablink ").removeClass('activeAfter');
    });
  }

  if (pageName == 'Industry') {
    $(`.${classParent} .tab`).click(function(){
      $(this).css("justify-content", "center");
      $(this).find(".tablink").addClass("activeBefore");
      $(this).find(".tablink ").addClass("activeAfter");
    });
  }
  if (pageName == 'Purpose') {
    $(`.${classParent} .tab`).click(function(){
      $(this).css("justify-content", "flex-end");
      $(this).find(".tablink ").removeClass('activeBefore');
    });
  }
// hover remove before afer
  $(document).ready(function(){
    let $tab2 = '.outProducts .row__bottom .tab .tablink-2';
    // console.log(tabTwo);
    if (pageName == 'ProductType') {
      $($tab2).hover(function(){
        $(this).parent().find(".tablink-3").addClass("clear");
        }, function(){
        $(this).parent().find(".tablink-3").removeClass("clear");
      });       
    }
    else if(pageName == 'Purpose'){
      $($tab2).hover(function(){
        $(this).parent().find(".tablink-1").addClass("clear");
        }, function(){
        $(this).parent().find(".tablink-1").removeClass("clear");
      });   
    }
  });
//tablink
}
// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();
document.getElementById('defaultOpen-2').click();
// scroll to top of page
$(document).ready(function () {
  //Dectech scroll show hide Arrrow
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) {
      $('.js-top').fadeIn();
    }
    
    if (scrolled < 300) {
      $('.js-top').fadeOut();
    }
    //console.log(scrolled);
  });

  //Click event scroll  back to Top
  $('.js-top').click(function () {
    $('html, body').animate({ scrollTop: '0' }, 500);
    return false;
  });
  console.log(category);
});
/// SLIDER
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
// set time cho showslide chạy theo giây mặc định
setInterval(function () {
  if (slideIndex == 4) {
    return showSlides((slideIndex = 1));
  } else {
    showSlides((slideIndex += 1));
  }
}, 5000);
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('demo');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  // detect active
  let slideSpan = document.querySelectorAll(`.slide span`);
  // console.log(slideSpan);
  slideSpan.forEach((slide) => {
    slide.style.opacity = 0;
  });
  // var slide;
  // for (slide = 0; slide < slideSpan.length; slide++) {
  //   slideSpan[slide].style.display = 'none';
  // }
  //Only element active ,when element active -> call this
  document.querySelector(`.slide-${slideIndex} span`).style.opacity = 1;
}

//show slideshow
$(document).ready(function () {
  $('.js-navbar').click(function () {
    $('.js-close').addClass('block');
    $('.js-navbar').addClass('none');
    $('.navbar__right--support').slideDown();
  });
  $('.js-close').click(function () {
    $('.js-navbar').removeClass('none');
    $('.js-close').removeClass('block');
    $('.navbar__right--support').slideUp();
  });
});
