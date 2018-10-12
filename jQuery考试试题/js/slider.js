var num = 0;
$(function () {
    //右侧按钮 点击
    $('#nex').click(function () {
        if (num < 3)
            num++;
        if (num >= 3) {
            $('.img_list').css('margin-left', '0px');
            num = 0;
        }
        // console.log(num);
        if (num == 3) {
            $('.sp_poi').css('backgroundColor', '#ffffff');
            $('.sp_poi').eq(0).css('backgroundColor', '#00c37e');
        } else {
            $('.sp_poi').css('backgroundColor', '#ffffff');
            $('.sp_poi').eq(num).css('backgroundColor', '#00c37e');
        }
        $('.img_list').stop().animate({
            'margin-left': -790 * num + "px"
        }, 500);
    });
    //左侧按钮 点击
    $('#pre').click(function () {
        if (num >= 0)
            num--;
        if (num < 0) {
            num = 3;
            $('.img_list').css('margin-left', '-5530px');
            $('.sp_poi').css('backgroundColor', '#ffffff');
            $('.sp_poi').eq(0).css('backgroundColor', '#00c37e');
        } else {
            $('.sp_poi').css('backgroundColor', '#ffffff');
            $('.sp_poi').eq(num).css('backgroundColor', '#00c37e');
        }
        console.log(num);
        $('.img_list').stop().animate({
            'margin-left': -790 * num + "px"
        }, 100);
    });
    //鼠标悬浮在整个图片区域时 停止轮播， 离开后 继续轮播
    $('.box').hover(function () {
        clearInterval(m_auto);
        //鼠标在小圆点上滑过，显示对应位置的图片
        $('.sp_poi').on('mouseenter', function () {
            num = $(this).index();
            $('.sp_poi').css('backgroundColor', '#ffffff');
            $('.sp_poi').eq(num).css('backgroundColor', '#00c37e');
            $('.img_list').animate({
                'margin-left': -790 * num + "px"
            }, 100);
        })
    }, function () {
        m_auto = setInterval(auto, 2000);
    })
    //自动轮播
    var m_auto = setInterval(auto, 2000);
});

function auto() {
    if (num < 3)
        num++;
    if (num >= 3) {
        num = 0;
        $('.img_list').css('margin-left', '0px');
        $('.sp_poi').css('backgroundColor', '#ffffff');
        $('.sp_poi').eq(0).css('backgroundColor', '#00c37e');
    } else {
        $('.sp_poi').css('backgroundColor', '#ffffff');
        $('.sp_poi').eq(num).css('backgroundColor', '#00c37e');
    }
    $('.img_list').animate({
        'margin-left': -790 * num + "px"
    });
}
