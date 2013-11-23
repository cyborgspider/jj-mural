$ ->
    window.location.hash = 'home'#Reset all hashes upon page reload
    $('form')[0].reset() #Reset contact form upon page reload
    body  = $('body') #Cache body element

    # $.History.bind (state) ->
    #     # Update the page's title with our current state on the end
    #     console.log(state)


    # Bind a handler for state: Our Mission
    $.History.bind "/our-mission", (state) ->
        page    = 'our-mission'
        section = $('#section-'+page)
        link    = $('a[data-nav='+page+']')
        navCategory = $('#main-nav').find('.category-about')

        # Update Menu
        body.removeClass().addClass('category-about')
        link.siblings().removeClass 'is-active'
        link.addClass 'is-active'
        navCategory.siblings().find('.is-active').removeClass 'is-active'
        navCategory.siblings().removeClass 'is-active'
        navCategory.addClass 'is-active'

        # Show section, hide the other sections
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active'


    $.History.bind "/about-jj", (state) ->

        page    = 'about-jj'
        section = $('#section-'+page)
        link    = $('a[data-nav='+page+']')
        navCategory = $('#main-nav').find('.category-about')

        # Update Menu
        body.removeClass().addClass('category-about')
        link.siblings().removeClass 'is-active'
        link.addClass 'is-active'
        navCategory.siblings().find('.is-active').removeClass 'is-active'
        navCategory.siblings().removeClass 'is-active'
        navCategory.addClass 'is-active'
        
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active'

    $.History.bind "/about-artist", (state) ->
        page    = 'about-artist'
        section = $('#section-'+page)
        link    = $('a[data-nav='+page+']')
        navCategory = $('#main-nav').find('.category-about')

        # Update Menu
        body.removeClass().addClass('category-about')
        link.siblings().removeClass 'is-active'
        link.addClass 'is-active'
        navCategory.siblings().find('.is-active').removeClass 'is-active'
        navCategory.siblings().removeClass 'is-active'
        navCategory.addClass 'is-active'

        # Show sections tab, hide the other sections
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active'

    $.History.bind "/services", (state) ->
        page    = 'services'
        section = $('#section-'+page)
        link    = $('a[data-nav='+page+']')
        navCategory = $('#main-nav').find('.category-services')

        # Update Menu
        body.removeClass().addClass('category-services')
        link.siblings().removeClass 'is-active'
        link.addClass 'is-active'
        navCategory.siblings().find('.is-active').removeClass 'is-active'
        navCategory.siblings().removeClass 'is-active'
        navCategory.addClass 'is-active'
        
        # Show sections tab, hide the other sections
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active' 

    $.History.bind "/how-it-works", (state) ->
        page    = 'how-it-works'
        section = $('#section-'+page)
        link    = $('a[data-nav='+page+']')
        navCategory = $('#main-nav').find('.category-services')

        # Update Menu
        body.removeClass().addClass('category-services')
        link.siblings().removeClass 'is-active'
        link.addClass 'is-active'
        navCategory.siblings().find('.is-active').removeClass 'is-active'
        navCategory.siblings().removeClass 'is-active'
        navCategory.addClass 'is-active'
        
        # Show sections tab, hide the other sections
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active'

    $.History.bind "/how-it-works", (state) ->
        page    = 'how-it-works'
        section = $('#section-'+page)
        link    = $('a[data-nav='+page+']')
        navCategory = $('#main-nav').find('.category-services')

        # Update Menu
        body.removeClass().addClass('category-services')
        link.siblings().removeClass 'is-active'
        link.addClass 'is-active'
        navCategory.siblings().find('.is-active').removeClass 'is-active'
        navCategory.siblings().removeClass 'is-active'
        navCategory.addClass 'is-active'
        
        # Show sections tab, hide the other sections
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active'
        
    $.History.bind "/faq", (state) ->
        page    = 'faq'
        section = $('#section-'+page)
        link    = $('a[data-nav='+page+']')
        navCategory = $('#main-nav').find('.category-services')

        # Update Menu
        body.removeClass().addClass('category-services')
        link.siblings().removeClass 'is-active'
        link.addClass 'is-active'
        navCategory.siblings().find('.is-active').removeClass 'is-active'
        navCategory.siblings().removeClass 'is-active'
        navCategory.addClass 'is-active'
        
        # Show sections tab, hide the other sections
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active' 

    $.History.bind "/murals", (state) ->
        page    = 'murals'
        section = $('#section-'+page)
        link    = $('a[data-nav='+page+']')
        navCategory = $('#main-nav').find('.category-work')

        # Update Menu
        body.removeClass().addClass('category-work')
        link.siblings().removeClass 'is-active'
        link.addClass 'is-active'
        navCategory.siblings().find('.is-active').removeClass 'is-active'
        navCategory.siblings().removeClass 'is-active'
        navCategory.addClass 'is-active'

        # Show sections tab, hide the other sections
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active'  

    $.History.bind "/fine-art", (state) ->
        page    = 'fine-art'
        section = $('#section-'+page)
        link    = $('a[data-nav='+page+']')
        navCategory = $('#main-nav').find('.category-work')

        # Update Menu
        body.removeClass().addClass('category-work')
        link.siblings().removeClass 'is-active'
        link.addClass 'is-active'
        navCategory.siblings().find('.is-active').removeClass 'is-active'
        navCategory.siblings().removeClass 'is-active'
        navCategory.addClass 'is-active'
        
        # Show sections tab, hide the other sections
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active'                                                

    $.History.bind "/framed", (state) ->
        page    = 'framed'
        section = $('#section-'+page)
        link    = $('a[data-nav='+page+']')
        navCategory = $('#main-nav').find('.category-work')

        # Update Menu
        body.removeClass().addClass('category-work')
        link.siblings().removeClass 'is-active'
        link.addClass 'is-active'
        navCategory.siblings().find('.is-active').removeClass 'is-active'
        navCategory.siblings().removeClass 'is-active'
        navCategory.addClass 'is-active'
        

        # Show sections tab, hide the other sections
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active'

    $.History.bind "/contact", (state) ->
        page    = 'contact'
        section = $('#section-'+page)
        nav = $('#main-nav')

        # Update Menu
        body.removeClass().addClass('category-contact')
        nav.find('li').removeClass 'is-active'
        nav.find('a').removeClass 'is-active'
        

        # Show sections tab, hide the other sections
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active'   

    $.History.bind "/home", (state) ->
        page    = 'home'
        section = $('#section-'+page)
        nav = $('#main-nav')

        # Update Menu
        body.removeClass().addClass('home')
        nav.find('li').removeClass 'is-active'
        nav.find('a').removeClass 'is-active'
        
        # Show sections tab, hide the other sections
        section.siblings().removeClass 'is-active'
        section.addClass 'is-active'                


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

