
function BrightMode(n) {
    const light = document.getElementById("lightMode");
    const dark = document.getElementById("darkMode");
    const bodyColor = document.querySelector("body");

    if (n == 1) {
        light.style.display = "inline-block";
        dark.style.display = "none";
        bodyColor.className += " Dark";
    }
    else {
        light.style.display = "none";
        dark.style.display = "inline-block";
        bodyColor.className -= " Dark";
    }
}
$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $('#fixedHeaderDiv').addClass('fixed_header');
        $('#fixedHeaderDiv').removeClass('fixed_header_up');
    }
    if ($(window).scrollTop() < 200) {
        $('#fixedHeaderDiv').addClass('fixed_header_up');
        $('#fixedHeaderDiv').removeClass('fixed_header');
    }
});
function goToUp() {
    window.scrollTo(0, 0);
}
// 헤더 메인메뉴
$(function () {
    /*
    const navLevel2 = document.getElementsByClassName('NavLevel2');
    for (let i = 0; i < navLevel2.length; i++) {
        for (let j = 0; j < navLevel2[i].childElementCount; j++) {
            navLevel2[i].children[j].setAttribute('index',j);
        }
    }
    */
    //for (let i = 0; i < $('.NavLevel2 li').length; i++) {
    //$('.NavLevel2 li')[i].setAttribute('index', i+1);

    //}
    //$('#NavLevel3Div > div').css('width', String($('.NavLevel2 li').length * 1520) + "px");
    //$('.NavLevel1 li').click(function () {
    //    const index = $(this).attr('index');
    //    const level2 = $('.NavLevel2');
    //    for (let i = 0; i < level2.length; i++) {
    //        if (index == i) {
    //            level2[i].style.display = "flex";
    //        }
    //        else {
    //            level2[i].style.display = "none";
    //        }
    //    }
    //    
    //});
    //$('.NavLevel2 li').click(function () {
    //    const index = $(this).attr('index');
    //    console.log(String((index * -1520)));
    //    const slickTrack = $('.SlideNav div .slick-track');
    //    slickTrack.css({'transform': 'translate3d('+ String((index * -1520)) + //'px, 0px, 0px)'});
    //});
    $('.SlideNav').slick({
        arrows: true,
        dots: true,
        dotsClass: 'NavDots',
        prevArrow: '<button type="button" class="NavSlides_PrevBtn"><img src="./img/prevBtn.png"></button>',
        nextArrow: '<button type="button" class="NavSlides_NextBtn"><img src="./img/nextBtn.png"></button>'
    });

    $('.MainImgSlides').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        //prevArrow: '<button type="button" class="MainImgSlides_PrevBtn"><img src="./img/prevBtn.png"></button>',
        //nextArrow: '<button type="button" class="MainImgSlides_NextBtn"><img src="./img/nextBtn.png"></button>'
        dots: true,
        dotsClass: 'MainImgSlides_Dots'
    });
    $('.InformSlides').slick({
        dots: true,
        dotsClass: 'InformSlides_Dots',
        prevArrow: '<button type="button" class="InformSlides_PrevBtn"><img src="./img/prevBtn.png"></button>',
        nextArrow: '<button type="button" class="InformSlides_NextBtn"><img src="./img/nextBtn.png"></button>'
    });
    $('.NavDots').hide();
    $('.SlideNav .slick-list').css({ 'height': '0px' });

    $('.NavLevel1 li').click(function () {

        for (let i = 0; i < $('.NavLevel1 li').length; i++) {
            $('.NavLevel1 li')[i].className = "";
        }
        $(this).addClass('MyActive');
        $('.NavDots').slideDown("fast");
        const myindexs = $(this).attr('myindexs');
        console.log(myindexs);
        $('.NavDots li').hide();
        if (myindexs == 0) {
            for (let i = 0; i < 5; i++) {
                $('.NavDots li')[i].style.display = "block";
            }
        }
        if (myindexs == 1) {
            for (let i = 5; i < 9; i++) {
                $('.NavDots li')[i].style.display = "block";
            }
        }
        if (myindexs == 2) {
            for (let i = 9; i < 14; i++) {
                $('.NavDots li')[i].style.display = "block";
            }
        }
        if (myindexs == 3) {
            //$('.NavDots li')[19].style.display = "block";
        }
        //switch (index) { 왜 안되냐? 
        //    case 0:
        //        console.log(index);
        //        $('.NavDots li').hide();
        //        for (let i = 0; i < 5; i++) {
        //            $('.NavDots li')[i].style.display="block";                   
        //        }
        //        break;
        //    case 1:
        //        $('.NavDots li').hide();
        //        for (let i = 5; i < 9; i++) {
        //            $('.NavDots li')[i].style.display="block";                   
        //        }
        //        
        //        break;
        //    case 2:
        //        $('.NavDots li').hide();
        //        for (let i = 9; i < 17; i++) {
        //            $('.NavDots li')[i].style.display="block";                   
        //        }
        //        
        //        break;
        //    case 3:
        //        $('.NavDots li').hide();
        //        for (let i = 17; i < 18; i++) {
        //            $('.NavDots li')[i].style.display = "block";
        //        }
        //        break;
        //    default:
        //        console.log(index);
        //}
    });
    $('.NavDots li button').click(function () {
        $('.SlideNav .slick-list').css({ 'height': '500px' });
    });
    $('.SlideNav').mouseleave(function () {
        $('.SlideNav .slick-list').css({ 'height': '0px' });
    });

    /*$('.SlideNav').mouseup(function () {
        let slideIndex = "";
        setTimeout(function () {
            const getSlideIndex = getComputedStyle($('.slick-track')[0]).getPropertyValue('transform'); 
            for (i = getSlideIndex.indexOf('-'); i < getSlideIndex.lastIndexOf(','); i++) {
                slideIndex += getSlideIndex[i];
            }
            if (-parseInt(slideIndex) % 1520 != 0) {
                slideIndex = "";
                setTimeout(function () {
                    const getSlideIndex = getComputedStyle($('.slick-track')[0]).getPropertyValue('transform');
                    for (i = getSlideIndex.indexOf('-'); i < getSlideIndex.lastIndexOf(','); i++) {
                        slideIndex += getSlideIndex[i];
                    }
                    slideIndex = (parseInt(slideIndex)/-1520)-1;
                    console.log(slideIndex);
                }, 1000);
            }
            else {
                slideIndex = (parseInt(slideIndex)/-1520)-1;
                console.log(slideIndex);
            }
            if (slideIndex < 5 && slideIndex >= 0) {
                $('.NavDots li').hide();
                for (let i = 0; i < 5; i++) {
                    $('.NavDots li')[i].style.display = "block";
                }
            }
            if (slideIndex < 9 && slideIndex >= 5) {
                $('.NavDots li').hide();
                for (let i = 5; i < 9; i++) {
                    $('.NavDots li')[i].style.display = "block";
                }
            }
            if (slideIndex < 14 && slideIndex >= 9) {
                $('.NavDots li').hide();
                for (let i = 9; i < 14; i++) {
                    $('.NavDots li')[i].style.display = "block";
                }
            }
            if (slideIndex = 14) {
                $('.NavDots li').hide();
                //$('.NavDots li')[19].style.display = "block";
            }
        }, 1000);
    });*/
    $('.SlideNav').mouseup(function () {
        setTimeout(function () {
            const slideNavIndex = String($('.SlideNav .slick-track .slick-active').attr('data-slick-index'));
            $('.NavDots li').hide();
            for (let i = 0; i < 4; i++) {
                $('.NavLevel1 li')[i].className = '';
            }
            if (slideNavIndex < 5 && slideNavIndex >= 0) {
                $('.NavLevel1 li')[0].className = 'MyActive';
                for (let i = 0; i < 5; i++) {
                    $('.NavDots li')[i].style.display = "block";
                }
            }
            if (slideNavIndex < 9 && slideNavIndex >= 5) {
                $('.NavLevel1 li')[1].className = 'MyActive';
                for (let i = 5; i < 9; i++) {
                    $('.NavDots li')[i].style.display = "block";
                }
            }
            if (slideNavIndex < 14 && slideNavIndex >= 9) {
                $('.NavLevel1 li')[2].className = 'MyActive';
                for (let i = 9; i < 14; i++) {
                    $('.NavDots li')[i].style.display = "block";
                }
            }
            console.log(slideNavIndex);
        }, 100);
    });
    $('.SlideNav').bind('touchend', function () {
        setTimeout(function () {
            const slideNavIndex = String($('.SlideNav .slick-track .slick-active').attr('data-slick-index'));
            $('.NavDots li').hide();
            for (let i = 0; i < 4; i++) {
                $('.NavLevel1 li')[i].className = '';
            }
            if (slideNavIndex < 5 && slideNavIndex >= 0) {
                $('.NavLevel1 li')[0].className = 'MyActive';
                for (let i = 0; i < 5; i++) {
                    $('.NavDots li')[i].style.display = "block";
                }
            }
            if (slideNavIndex < 9 && slideNavIndex >= 5) {
                $('.NavLevel1 li')[1].className = 'MyActive';
                for (let i = 5; i < 9; i++) {
                    $('.NavDots li')[i].style.display = "block";
                }
            }
            if (slideNavIndex < 14 && slideNavIndex >= 9) {
                $('.NavLevel1 li')[2].className = 'MyActive';
                for (let i = 9; i < 14; i++) {
                    $('.NavDots li')[i].style.display = "block";
                }
            }
            console.log(slideNavIndex);
        }, 100);
    });
    const navLevel2Lists = {
        '크루즈': '테마',
        '트레킹': '테마',
        '허니문': '테마',
        '골프': '테마',
        '성지순례': '테마',
        '제주도': '국내',
        '바다': '국내',
        '산': '국내',
        '도시': '국내',
        '유럽': '해외',
        '미국': '해외',
        '호주': '해외',
        '아시아': '해외',
        '아프리카': '해외'
    }
    const informSlidesLists = ['요즘 뜨는 여행지', '비행기', '호텔', '패키지 여행'];
    for (let i = 0; i < Object.keys(navLevel2Lists).length; i++) {
        $('.NavDots li button')[i].innerHTML = Object.keys(navLevel2Lists)[i];

    }
    for (let i = 0; i < $('.MainImgSlides_Dots li button').length; i++) {
        $('.MainImgSlides_Dots li button')[i].innerHTML = "";
    }
    try {
        for (let i = 0; i < informSlidesLists.length; i++) {
            $('.InformSlides_Dots li button')[i].innerHTML = informSlidesLists[i];
    
        }
    } catch (e) {
        console.log("index.js의 287번째 줄 오류, 로그인화면은 당연히 오류");
    }
    $('#headerSearch').click(function () {

    });
    $('.MenuNav').hide();
    $('#menuNav').click(function () {
        console.log(1);
        $('.MenuNav').toggle("fast");
    });
});




