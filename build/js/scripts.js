(function() {
  $(function() {
    var linkHandler;
    window.location.hash = 'home';
    $('form')[0].reset();
    linkHandler = function(e) {
      var bodyClass, context, listItem, listItemClass, nav, page, section;
      e.preventDefault();
      page = $(this).data('nav');
      bodyClass = $('body').attr('class');
      section = $('#section-' + page);
      context = $(this).data('context');
      nav = $('#main-nav');
      if (context === 'home') {
        $('body').removeClass().addClass('category-work');
        nav.find('.category-work').addClass('is-active');
        nav.find('a[data-nav=' + page + ']').addClass('is-active');
      }
      if (context === 'nav') {
        listItem = $(this).closest('li');
        listItemClass = listItem.attr('class');
        if (bodyClass !== listItemClass) {
          $('body').removeClass().addClass(listItemClass);
        }
        nav.find('a').removeClass('is-active');
        $(this).addClass('is-active');
        listItem.siblings().removeClass('is-active');
        listItem.addClass('is-active');
      }
      if (context === 'tab') {
        nav.find('a').removeClass('is-active');
        nav.find('a[data-nav=' + page + ']').addClass('is-active');
      }
      if (context === 'contact') {
        $('body').removeClass().addClass('category-contact');
        nav.find('li').removeClass('is-active');
        nav.find('a').removeClass('is-active');
      }
      if (context === 'index') {
        $('body').removeClass().addClass('home');
        nav.find('li').removeClass('is-active');
        nav.find('a').removeClass('is-active');
      }
      section.siblings().removeClass('is-active');
      section.addClass('is-active');
      return window.location.hash = page;
    };
    $('#main-nav').on('click', 'a', linkHandler);
    $('#home-nav').on('click', '.home-nav-link', linkHandler);
    $('.work-tab').on('click', linkHandler);
    $('.contact-link').attr({
      'data-nav': 'contact',
      'data-context': 'contact'
    }).on('click', linkHandler);
    $('#logo').on('click', linkHandler);
    $('#contact-btn').hover(function() {
      $(this).addClass('is-active');
      return $('#contact-tab').show().animate({
        opacity: 1,
        height: '270px'
      }, 200);
    }, function() {
      $(this).removeClass('is-active');
      return $('#contact-tab').animate({
        opacity: 0,
        height: '0'
      }, 200, function() {
        return $(this).hide();
      });
    });
    $('.work-item').find('.desc').fancybox({
      padding: 0,
      openEffect: 'elastic',
      closeEffect: 'elastic',
      nextEffect: 'fade',
      prevEffect: 'fade',
      beforeShow: function() {
        var desc;
        desc = this.element.find('.title').text();
        return this.title = desc;
      },
      helpers: {
        title: null
      }
    });
    $('#contact-form').parsley({
      successClass: 'success',
      errorClass: 'error'
    });
    return $('#submit-btn').click(function() {
      return $.ajax({
        type: 'POST',
        url: 'php/send-email.php',
        data: $('#contact-formm').serialize(),
        success: function() {
          return $('#contact-form').html('<h3>Thanks for contacting us! We will get back to you shortly.');
        }
      });
    });
  });

}).call(this);
