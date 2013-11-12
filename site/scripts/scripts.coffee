$ ->
    window.location.hash = 'home'#Reset all hashes upon page reload
    $('form')[0].reset() #Reset contact form upon page reload

    # $.History.bind (state) ->
    #     # Update the page's title with our current state on the end
    #     console.log(state)


    # Bind a handler for state: Our Mission
    $.History.bind "/our-mission", (state) ->

        # Update Menu
        $('body').removeClass('home').addClass('category-about')

        # Show apricots tab, hide the other tabs
        $('#section-our-mission').siblings().removeClass 'is-active'
        $('#section-our-mission').addClass 'is-active'


    # Bind a handler for state: bananas
    $.History.bind "/about-jj", (state) ->

        # Update Menu
        $('body').removeClass('home').addClass('category-about')

        # Show apricots tab, hide the other tabs
        $('#section-about-jj').siblings().removeClass 'is-active'
        $('#section-about-jj').addClass 'is-active'

    # Bind a handler for state: coconuts
    $.History.bind "/about-artist", (state) ->

        # Update Menu
        $('body').removeClass('home').addClass('category-about')

        # Show apricots tab, hide the other tabs
        $('#section-about-artist').siblings().removeClass 'is-active'
        $('#section-about-artist').addClass 'is-active'



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


    # $('#main-nav').on 'click','a',linkHandler
    # $('#home-nav').on 'click','.home-nav-link', linkHandler
    # $('.work-tab').on 'click', linkHandler
    # $('.contact-link').attr({'data-nav':'contact','data-context':'contact'}).on 'click', linkHandler
    # #$('.contact-link').click()
    # $('#logo').on 'click', linkHandler


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

    #Contact Form
    $('#submit-btn').click (e) ->
        e.preventDefault()
        if $('input[name="form-phone"]').val() is '' then $('input[name="form-phone"]').val('No phone number provided')
        d = $('#contact-form').serialize()
        if $('#contact-form').parsley('validate')
            $.ajax
                type: 'POST'
                url: 'php/send-email.php'
                data: d
                success: ->
                    $('#contact-form').html('<h3>Thanks for contacting us! We will get back to you shortly.</h3>')
                error: ->
                    $('#contact-form').html('<h3>There was an error with your submission. Please contact us at (213) 555-555.</h3>')

