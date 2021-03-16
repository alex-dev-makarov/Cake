 
//hamburgee

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_list'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_list_active');
    });

    menuItem.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_list_active');
      });
    });
//modal
    $('.modal_close').on('click', function() {
      $('.overlay, #follow').fadeOut('slow');
    });
    $('#email-form').validate({
      rules: {
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        email: {
          required:"Пожалуйста введите свой e-mail",
          email: "Жаль, но Вы пытаетесь нас обмануть)"
          }
        }
    });

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()    
      }).done(function(){
        console.log($('#email-form').validate());
        const isValid = $('#email-form').validate().errorList.length < 1;
          if (isValid) {
            $(this).find("input").val("");
            $('.overlay, #follow').fadeIn('slow');
            $('form').trigger('reset');
          }
      });   
  });
//scroll
    $(window).scroll(function() {
      if($(this).scrollTop() > 1800)  {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
            //ANIMATION
   new WOW().init(); 
  });

  // undefinedmapboxgl.accessToken = 'undefined';
  // var map = new mapboxgl.Map({
  // container: 'footer_map', // container ID
  // style: 'mapbox://styles/mapbox/streets-v11', // style URL
  // center: [-74.5, 40], // starting position [lng, lat]
  // zoom: 9 // starting zoom
  // });
    
   



