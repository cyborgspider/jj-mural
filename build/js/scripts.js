(function() {
  $(function() {
    return $('#main-nav').on('click', 'a', function(e) {
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
      listItem.siblings().removeClass('is-active');
      listItem.addClass('is-active');
      section.siblings().removeClass('is-active');
      section.addClass('is-active');
      return window.location.hash = pageLabel;
    });
  });

}).call(this);
