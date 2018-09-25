
function moveImg(list, point) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].className == 'start') { //清除li的透明度样式
            list[i].className = '';
        }
    }
    list[point].className = 'start';
}

function moveIndex(list, num) { //移动小圆圈
    for (var i = 0; i < list.length; i++) {
        if (list[i].className == 'first') { //清除li的背景样式
            list[i].className = '';
        }
    }
    list[num].className = 'first';
}
var imgList = document.getElementById('photo').getElementsByTagName('li');
var list = document.getElementById('point').getElementsByTagName('li');
var point = 0;
var timer;

for (var i = 0; i < list.length; i++) { //鼠标覆盖上哪个小圆圈，图片就移动到哪个小圆圈，并停止
    list[i].point = i;
    list[i].onmouseover = function () {
        var clickIndex = parseInt(this.point);
        point = clickIndex;

        moveImg(imgList, point);
        moveIndex(list, point);
        clearInterval(timer);
    };
    list[i].onmouseout = function () { //移开后继续轮播
        play();
    };

}

var nextMove = function () {
    point += 1;
    if (point >= 5) {
        point = 0
    }
    moveImg(imgList, point);
    moveIndex(list, point);
};
var play = function () {
    timer = setInterval(function () {
        nextMove();
    }, 3000);
};
play();