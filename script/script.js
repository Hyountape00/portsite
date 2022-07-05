$(document).ready(function() {
    // swiper
    var swiper = new Swiper(".mySwiper", {
        speed: 1000,
    });
    // aos
    AOS.init({
      disable: function () {
        var desktop = 1023;
        return window.innerWidth < desktop;
      } // 1023px 이상일 때 disable
    });
    
    // cursor
    // let mouseCursor = document.querySelector(".cursor");
    // let menuCurs = document.querySelector(".nav-opener");

    // window.addEventListener('mousemove', cursor);
    // menuCurs.addEventListener('mouseenter', function(){
    //     mouseCursor.classList.add('curs-hov');
    //     mouseCursor.innerHTML = "<h3 style='opacity: 0'>MENU</h3>";
    //     setTimeout(function(){
    //         mouseCursor.innerHTML = "<h3 style='opacity: 1'>MENU</h3>";
    //     }, 50);
    // });
    // menuCurs.addEventListener('mouseleave', function(){
    //     mouseCursor.classList.remove('curs-hov');
    //     mouseCursor.innerHTML = ""
    // });

    // function cursor(e){
    //     mouseCursor.style.top = e.pageY + 'px';
    //     mouseCursor.style.left = e.pageX + 'px';
    // };

    // cursor 갖고오기
    $(function() {
        var prefix = function() {
          var a = window.getComputedStyle(document.documentElement, ""),
            b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
          return "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1], "-" + b + "-"
        }();
        $(document).mousemove(function(e) {
          mouseX = e.pageX + 15;
          mouseY = e.pageY - $(window).scrollTop() + 15;
          $('.theBall-outer').attr('style', prefix + 'transform:translate(' + mouseX + 'px,' + mouseY + 'px)');
        });
      
        // $(document).on('mouseenter', 'a', function() {
        //   $('.theBall').addClass('zooming');
        // }).on('mouseleave', 'a', function() {
        //   $(".theBall").removeClass("zooming")
        // });
      })
      // cursor change
      $('.bl').hover(function(){
        $('.theBall-outer').addClass('zoom');
      },function(){
        $('.theBall-outer').removeClass('zoom');
      });
      $('.bl2').hover(function(){
        $('.theBall-outer').addClass('zoom2');
      },function(){
        $('.theBall-outer').removeClass('zoom2');
      });
      $('.bl3').hover(function(){
        $('.theBall-outer').addClass('zoom3');
      },function(){
        $('.theBall-outer').removeClass('zoom3');
      });
    // end
    // letter effect
      const blItems = [...document.querySelectorAll('.menu-item')];
      blItems.forEach(item => {
        let word = item.children[0].children[0].innerText.split('');
        item.children[0].innerHTML = '';
        word.forEach((letter, idx) => {
          item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`
        })
        let cloneDiv = item.children[0].cloneNode(true);
        cloneDiv.style.position = 'absolute';
        cloneDiv.style.left = '0';
        cloneDiv.style.top = '0';
        item.appendChild(cloneDiv);
      })
    // end

    // menu 열기(클릭)
    var menuSwitch = true;
    $(".nav-opener").click(function() {
        if (menuSwitch) {
            $(".menu").addClass("active");
            menuSwitch = false;
        } else {
            console.log("agagag");
            $(".menu").removeClass("active");
            menuSwitch = true;
        }
    });
    // menu 안 list(클릭) {
    $('.section-list ul li a').click(function(){
      $(".nav-opener").trigger('click');
    });
    // about skill 열기닫기
    var aboutSwitch = true;
    $(".skill-opener").click(function() {
        if (aboutSwitch) {
            $(".ot-bord").addClass("active");
            aboutSwitch = false;
        } else {
            console.log("agagag");
            $(".ot-bord").removeClass("active");
            aboutSwitch = true;
        }
    });
    $(".skill-closer").click(function() {
        $(".ot-bord").removeClass("active");
        aboutSwitch = true;
    });

    // work tab 탭
    $('.work-tab p').click(function(){
      $('.work-tab p').removeClass('active');
      $(this).addClass('active');

      var wkNum = $(this).index();
      console.log(wkNum)
      $('.my-works__main').css({
        display: 'none'
      })
      $('.my-works__main').eq(wkNum).css({
        display: 'block'
      })
    })

    var picSize = $('.in-picture').css('width')
    var picSizeNum = picSize.replace('px', '');
    $('.picture-space').css({
      width: picSize
    })
    $('.skill-opener').css({
      left: Number(picSizeNum) + 60 +'px'
    })
    $(window).resize(function(){
    var picSize = $('.in-picture').css('width')
    var picSizeNum = picSize.replace('px', '');
    console.log(Number(picSizeNum) + 40)
      $('.picture-space').css({
        width: picSize
      });
      $('.skill-opener').css({
        left: Number(picSizeNum) + 60 +'px'
      })
    })
}); //end
