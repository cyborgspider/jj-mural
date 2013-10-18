(function() {
  $(function() {
    $('#main-nav').on('click', 'a', function(e) {
      var bodyClass, listItem, listItemClass, pageLabel, section, sectionTitle;
      e.preventDefault();
      sectionTitle = $('#section-title');
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
    return $('#contact-btn').hover(function() {
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
  });

}).call(this);
