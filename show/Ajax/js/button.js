$('span').hover(function (ev) {
    $('span+i').css({
        top: (ev.clientY - $('span').offset().top - 50),
        left: (ev.clientX - $('span').offset().left - 50)
    })
    $('span').addClass('active');
    console.log((ev.clientX - $('span').offset().left) + '/' + (ev.clientY - $('span').offset().top))

}, function () {
    $('span').removeClass('active');
})