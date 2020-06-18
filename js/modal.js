$(document).ready(function () {
  // MODAL
  let modalText = {
    ordering: {
      title: 'Real Estate Web',
      tag: 'WHITE-LABEL ONLINE ORDERING SOLUTION.',
      detail:
        'Real-estate is a professional website of real estate agents in worldwide that specialises in finding rental properties (apartments, houses and offices) for embassies, diplomatic organisations, international companies, and other foreign clients around the world.',
      link: 'https://maximgordiyenko.github.io/movies'
    },
    discover: {
      title: 'Dog Hotel',
      tag: 'WHITE-LABEL ONLINE ORDERING SOLUTION.',
      detail:
        'The animal shelter was initially located in the village Yasnogorodka, Kyiv region. Since then, the shelter has been maintained by its creators and great many volunteers coming from Kyiv, Dnipro, Mykolayiv, and Cherkasy. So far, more than 4500 animals have found homes. Sirius vaccinates and sterilizes them as well as helps low-income families take care of the adopted pets absolutely for free.',
      link: 'https://maximgordiyenko.github.io/dogs-hotel/'
    },
    newrelic: {
      title: 'Homeless People',
      tag: 'APPLICATION HELP PEOPLE.',
      detail:
        'We are the national membership charity for organisations working directly with people who become homeless in England. We work to make services better and campaign for policy change that will help end homelessness.',
      link: 'https://maximgordiyenko.github.io/homeless-people/'
    },
    roambi: {
      title: 'The Universe',
      tag: 'ANIMATION WEBSITE.',
      detail:
        'Site have tons of JavaScript code and represents a Universe with modify mouse like spacecraft and many planets.',
      link: 'https://maximgordiyenko.github.io/Universe/'
    },
    walker: {
      title: 'Delivery Tracker',
      tag: 'PERFORMANCE METRICS.',
      detail:
        'Walker Tracker offers goal management, fitness tracking, and team competitions to companies for internal use. A Ruby on Rails and Javascript companion site for the Walker Tracker App. Features visual metrics and gamified progression system.',
      link: 'https://github.com/MaximGordiyenko/Tracker'
    },
    mystand: {
      title: 'Portfolio Theme',
      tag: 'CROWD-FUNDED CHARITY.',
      detail:
        'Portfolio Theme is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with JavaScript. Features social media sharing and large scale crowd-funding.',
      link: 'https://maximgordiyenko.github.io/Portfolio-Thems/'
    },
    never: {
      title: 'Guitar Shop',
      tag: 'Guitar.',
      detail:
        'Guitar Shop is a platform for the new Guitar Shop mobile app in hopes to raise awareness and research funding to fight Guitar Shop. Pure JavaScript marketing site to promote the new Guitar Shop app.',
      link: 'https://maximgordiyenko.github.io/Guitar-Store/'
    },
    powur: {
      title: 'Business Manager',
      tag: 'CONSUMER POWERED MARKETING.',
      detail:
        'Powur is a marketing platform for lead generation, recruitment, and team building. Built with React and NodeJS. Makes use of React-material for front-end visuals. Features complex user tree heiarchy and commission system.',
      link: 'https://github.com/MaximGordiyenko/Alawajim'
    },
    themall: {
      title: 'Traveler',
      tag: 'PEER GUIDED TRAVELER.',
      detail:
        'The Traveler is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with HTML and Handlebars. Features the ability to import thousands of top brands products into one shopping site.',
      link: 'https://maximgordiyenko.github.io/Traveler/'
    }
  };

  $('#gallery .button').on('click', function () {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function () {
    shiftSlide(-1);
  });
  $('#prev').click(function () {
    shiftSlide(1);
  });

  carousel.on('mousedown', function () {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function () {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function () {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function (index, value) {
      $(this).css({
        background:
          "url('/gmo/src/images/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
