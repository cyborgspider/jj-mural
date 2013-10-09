$ ->
  $('#main-nav').on 'click','a', (e)->
    e.preventDefault()
    pageLabel = $(this).data 'nav'
    bodyClass = $('body').attr('class')
    listItem = $(this).closest('li')
    unless bodyClass is pageLabel then $('body').removeClass().addClass(pageLabel)
    listItem.siblings().removeClass()
    listItem.addClass 'is-active'
