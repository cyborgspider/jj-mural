(function() {
  $(function() {
    return $('#main-nav').on('click', 'a', function(e) {
      var bodyClass, listItem, pageLabel;
      e.preventDefault();
      pageLabel = $(this).data('nav');
      bodyClass = $('body').attr('class');
      listItem = $(this).closest('li');
      if (bodyClass !== pageLabel) {
        $('body').removeClass().addClass(pageLabel);
      }
      listItem.siblings().removeClass();
      return listItem.addClass('is-active');
    });
  });

}).call(this);
