$ ->
    window.location.hash = 'home'#Reset all hashes upon page reload

    linkHandler = (e)->
        e.preventDefault()
        page      = $(@).data 'nav'
        bodyClass = $('body').attr 'class'
        section   = $('#section-'+page)
        context   = $(@).data 'context'
        nav       = $('#main-nav')                

        if context is 'home'
            $('body').removeClass().addClass 'category-work'
            nav.find('.category-work').addClass 'is-active'
            nav.find('a[data-nav='+page+']').addClass 'is-active'
        if context is 'nav'
            listItem      = $(@).closest 'li'
            listItemClass = listItem.attr 'class'
            unless bodyClass is listItemClass then $('body').removeClass().addClass listItemClass
            nav.find('a').removeClass 'is-active'
            $(@).addClass 'is-active'
            listItem.siblings().removeClass 'is-active'
            listItem.addClass 'is-active'
        if context is 'tab'
            nav.find('a').removeClass 'is-active'
            nav.find('a[data-nav='+page+']').addClass 'is-active'
            $(@).siblings().removeClass 'is-active'
            $(@).addClass 'is-active'
        if context is 'contact'
            $('body').removeClass().addClass 'category-contact'            
            nav.find('li').removeClass 'is-active'
            nav.find('a').removeClass 'is-active'
        if context is 'index'
            $('body').removeClass().addClass 'home'
            nav.find('li').removeClass 'is-active'
            nav.find('a').removeClass 'is-active'

        section.siblings().removeClass 'is-active'
        section.addClass 'is-active' 
        window.location.hash = page 


    $('#main-nav').on 'click','a',linkHandler
    $('#home-nav').on 'click','.home-nav-link', linkHandler
    $('.work-tab').on 'click', linkHandler
    $('.contact-link').attr({'data-nav':'contact','data-context':'contact'}).on 'click', linkHandler
    $('.contact-link').click()
    $('#logo').on 'click', linkHandler


    #Contact Button on Footer Animation
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

    #Lightbox
    $('.work-item').find('.desc').fancybox(
        padding:     0
        openEffect:  'elastic'
        closeEffect: 'elastic'   
        nextEffect:  'fade'
        prevEffect:  'fade'   
        beforeShow: ->
            desc = @.element.find('.title').text()
            @.title = desc
        helpers:
            title: null
    )
