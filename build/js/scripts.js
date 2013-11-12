(function() {
  $(function() {
    var linkHandler;
    window.location.hash = 'home';
    $('form')[0].reset();
    $.History.bind("/our-mission", function(state) {
      $('body').removeClass('home').addClass('category-about');
      $('#section-our-mission').siblings().removeClass('is-active');
      return $('#section-our-mission').addClass('is-active');
    });
    $.History.bind("/about-jj", function(state) {
      $('body').removeClass('home').addClass('category-about');
      $('#section-about-jj').siblings().removeClass('is-active');
      return $('#section-about-jj').addClass('is-active');
    });
    $.History.bind("/about-artist", function(state) {
      $('body').removeClass('home').addClass('category-about');
      $('#section-about-artist').siblings().removeClass('is-active');
      return $('#section-about-artist').addClass('is-active');
    });
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
    return $('#submit-btn').click(function(e) {
      var d;
      e.preventDefault();
      if ($('input[name="form-phone"]').val() === '') {
        $('input[name="form-phone"]').val('No phone number provided');
      }
      d = $('#contact-form').serialize();
      if ($('#contact-form').parsley('validate')) {
        return $.ajax({
          type: 'POST',
          url: 'php/send-email.php',
          data: d,
          success: function() {
            return $('#contact-form').html('<h3>Thanks for contacting us! We will get back to you shortly.</h3>');
          },
          error: function() {
            return $('#contact-form').html('<h3>There was an error with your submission. Please contact us at (213) 555-555.</h3>');
          }
        });
      }
    });
  });

}).call(this);
