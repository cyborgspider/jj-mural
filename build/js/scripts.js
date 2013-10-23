(function() {
  $(function() {
    $('#main-nav').on('click', 'a', function(e) {
      var bodyClass, listItem, listItemClass, pageLabel, section;
      e.preventDefault();
      pageLabel = $(this).data('nav');
      bodyClass = $('body').attr('class');
      section = $('#section-' + pageLabel);
      listItem = $(this).closest('li');
      listItemClass = listItem.attr('class');
      if (bodyClass !== listItemClass) {
        $('body').removeClass().addClass(listItemClass);
      }
      $('#main-nav').find('a').removeClass('is-active');
      $(this).addClass('is-active');
      listItem.siblings().removeClass('is-active');
      listItem.addClass('is-active');
      section.siblings().removeClass('is-active');
      section.addClass('is-active');
      return window.location.hash = pageLabel;
    });
    $('#home-nav').on('click', '.home-nav-link', function(e) {
      var bodyClass, pageLabel, section;
      e.preventDefault();
      pageLabel = $(this).data('nav');
      bodyClass = 'category-work';
      section = $('#section-' + pageLabel);
      $('body').removeClass().addClass(bodyClass);
      $('#main-nav').find('.category-work').addClass('is-active');
      $('#main-nav').find('a[data-nav=' + pageLabel + ']').addClass('is-active');
      section.siblings().removeClass('is-active');
      section.addClass('is-active');
      return window.location.hash = pageLabel;
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
    $('.work-tab').click(function() {
      var link, page, section;
      page = $(this).data('nav');
      link = $('#main-nav').find('a[data-nav=' + page + ']');
      section = $('#section-' + page);
      section.siblings().removeClass('is-active');
      section.addClass('is-active');
      link.siblings().removeClass('is-active');
      link.addClass('is-active');
      $(this).siblings().removeClass('is-active');
      return $(this).addClass('is-active');
    });
    return $('.work-item').find('.desc').fancybox({
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
  });

}).call(this);
