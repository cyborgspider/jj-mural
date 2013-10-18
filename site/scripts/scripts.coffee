$ ->
    $('#main-nav').on 'click','a', (e)->
        e.preventDefault() 
        sectionTitle  = $('#section-title')
        pageLabel     = $(@).data 'nav' #store the data-nav attribute to determine which page to navigate to
        bodyClass     = $('body').attr 'class' #store the class of the body. We change the body class based on what section we're in.
        section       = $('#section-'+pageLabel) #store the class of the section. We change the section class based on what links we click
        listItem      = $(@).closest 'li' #the parent li of the <a> we click.
        listItemClass = listItem.attr 'class' #the parent li class of the <a> we click. This will be match the body class.
        unless bodyClass is listItemClass then $('body').removeClass().addClass listItemClass
        $('#main-nav').find('a').removeClass 'is-active'
        $(@).addClass 'is-active'
        listItem.siblings().removeClass 'is-active'
        listItem.addClass 'is-active'
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active'    
        window.location.hash = pageLabel #hash handler


    $('#contact-btn').hover(
        ->
            $(@).addClass 'is-active'    
            $('#contact-tab').show().animate(
                opacity:1
                height:'270px'
                200
            )
        ->
            $(@).removeClass 'is-active' 
            $('#contact-tab').animate(
                opacity:0
                height:'0'
                200 
                -> $(@).hide()
            )
    )

