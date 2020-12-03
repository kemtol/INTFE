function bodyCssChange() {
    if ($(window).width() < 720) {
        if($('.header-main .navbar-collapse').hasClass('show')) {
            $('body').css({'overflow':'auto'})
        } else {
            $('body').css({'overflow':'hidden'})
        }
    }
}