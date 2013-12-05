(function() {
  $(function() {
    var body;
    $('form')[0].reset();
    body = $('body');
    $.History.bind("/our-mission", function(state) {
      var link, navCategory, page, section;
      page = 'our-mission';
      section = $('#section-' + page);
      link = $('a[data-nav=' + page + ']');
      navCategory = $('#main-nav').find('.category-about');
      body.removeClass().addClass('category-about');
      link.siblings().removeClass('is-active');
      link.addClass('is-active');
      navCategory.siblings().find('.is-active').removeClass('is-active');
      navCategory.siblings().removeClass('is-active');
      navCategory.addClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
    $.History.bind("/about-jj", function(state) {
      var link, navCategory, page, section;
      page = 'about-jj';
      section = $('#section-' + page);
      link = $('a[data-nav=' + page + ']');
      navCategory = $('#main-nav').find('.category-about');
      body.removeClass().addClass('category-about');
      link.siblings().removeClass('is-active');
      link.addClass('is-active');
      navCategory.siblings().find('.is-active').removeClass('is-active');
      navCategory.siblings().removeClass('is-active');
      navCategory.addClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
    $.History.bind("/about-artist", function(state) {
      var link, navCategory, page, section;
      page = 'about-artist';
      section = $('#section-' + page);
      link = $('a[data-nav=' + page + ']');
      navCategory = $('#main-nav').find('.category-about');
      body.removeClass().addClass('category-about');
      link.siblings().removeClass('is-active');
      link.addClass('is-active');
      navCategory.siblings().find('.is-active').removeClass('is-active');
      navCategory.siblings().removeClass('is-active');
      navCategory.addClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
    $.History.bind("/services", function(state) {
      var link, navCategory, page, section;
      page = 'services';
      section = $('#section-' + page);
      link = $('a[data-nav=' + page + ']');
      navCategory = $('#main-nav').find('.category-services');
      body.removeClass().addClass('category-services');
      link.siblings().removeClass('is-active');
      link.addClass('is-active');
      navCategory.siblings().find('.is-active').removeClass('is-active');
      navCategory.siblings().removeClass('is-active');
      navCategory.addClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
    $.History.bind("/how-it-works", function(state) {
      var link, navCategory, page, section;
      page = 'how-it-works';
      section = $('#section-' + page);
      link = $('a[data-nav=' + page + ']');
      navCategory = $('#main-nav').find('.category-services');
      body.removeClass().addClass('category-services');
      link.siblings().removeClass('is-active');
      link.addClass('is-active');
      navCategory.siblings().find('.is-active').removeClass('is-active');
      navCategory.siblings().removeClass('is-active');
      navCategory.addClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
    $.History.bind("/how-it-works", function(state) {
      var link, navCategory, page, section;
      page = 'how-it-works';
      section = $('#section-' + page);
      link = $('a[data-nav=' + page + ']');
      navCategory = $('#main-nav').find('.category-services');
      body.removeClass().addClass('category-services');
      link.siblings().removeClass('is-active');
      link.addClass('is-active');
      navCategory.siblings().find('.is-active').removeClass('is-active');
      navCategory.siblings().removeClass('is-active');
      navCategory.addClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
    $.History.bind("/faq", function(state) {
      var link, navCategory, page, section;
      page = 'faq';
      section = $('#section-' + page);
      link = $('a[data-nav=' + page + ']');
      navCategory = $('#main-nav').find('.category-services');
      body.removeClass().addClass('category-services');
      link.siblings().removeClass('is-active');
      link.addClass('is-active');
      navCategory.siblings().find('.is-active').removeClass('is-active');
      navCategory.siblings().removeClass('is-active');
      navCategory.addClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
    $.History.bind("/murals", function(state) {
      var link, navCategory, page, section;
      page = 'murals';
      section = $('#section-' + page);
      link = $('a[data-nav=' + page + ']');
      navCategory = $('#main-nav').find('.category-work');
      body.removeClass().addClass('category-work');
      link.siblings().removeClass('is-active');
      link.addClass('is-active');
      navCategory.siblings().find('.is-active').removeClass('is-active');
      navCategory.siblings().removeClass('is-active');
      navCategory.addClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
    $.History.bind("/fine-art", function(state) {
      var link, navCategory, page, section;
      page = 'fine-art';
      section = $('#section-' + page);
      link = $('a[data-nav=' + page + ']');
      navCategory = $('#main-nav').find('.category-work');
      body.removeClass().addClass('category-work');
      link.siblings().removeClass('is-active');
      link.addClass('is-active');
      navCategory.siblings().find('.is-active').removeClass('is-active');
      navCategory.siblings().removeClass('is-active');
      navCategory.addClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
    $.History.bind("/custom-art", function(state) {
      var link, navCategory, page, section;
      page = 'custom-art';
      section = $('#section-' + page);
      link = $('a[data-nav=' + page + ']');
      navCategory = $('#main-nav').find('.category-work');
      body.removeClass().addClass('category-work');
      link.siblings().removeClass('is-active');
      link.addClass('is-active');
      navCategory.siblings().find('.is-active').removeClass('is-active');
      navCategory.siblings().removeClass('is-active');
      navCategory.addClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
    $.History.bind("/contact", function(state) {
      var nav, page, section;
      page = 'contact';
      section = $('#section-' + page);
      nav = $('#main-nav');
      body.removeClass().addClass('category-contact');
      nav.find('li').removeClass('is-active');
      nav.find('a').removeClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
    $.History.bind("/home", function(state) {
      var nav, page, section;
      page = 'home';
      section = $('#section-' + page);
      nav = $('#main-nav');
      body.removeClass().addClass('home');
      nav.find('li').removeClass('is-active');
      nav.find('a').removeClass('is-active');
      section.siblings().removeClass('is-active');
      return section.addClass('is-active');
    });
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
        return this.title = '<a href="//www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(document.location.href) + '&media=' + encodeURIComponent('http://jjmural.com/' + this.href) + '&description=Pin from JJMural.com"' + ' data-pin-do="buttonPin" data-pin-config="none" class="btn-pin" target="_blank"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_gray_28.png" /></a>';
      },
      helpers: {
        title: {
          type: 'outside',
          position: 'top'
        }
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
