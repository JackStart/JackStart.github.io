var pagenum = 1;

function getdate() {
	$.get("https://www.apiopen.top/meituApi", {
			'page': pagenum,
		},
		function(shuju, textStatus, xhr) {
			console.log(shuju);
			var x = shuju;
			$.each(x.data, function(index, item) {
				var newImg = '<img src="' + item.url +
					'" class="img-thumbnail" data-toggle="modal" data-target="#exampleModal">';
				if(index % 4 === 0) {
					$('.col001').append(newImg);
				} else if(index % 4 === 1) {
					$('.col002').append(newImg);
				} else if(index % 4 === 2) {
					$('.col003').append(newImg);
				} else if(index % 4 === 3) {
					$('.col004').append(newImg);
				}
			})
		},
	);
	pagenum++;
}

getdate();

var button;

$('#exampleModal').on('show.bs.modal', function(event) {
	button = $(event.relatedTarget) // Button that triggered the modal
	var recipient = button.attr('src') // Extract info from data-* attributes
	console.log(recipient)

	var modal = $(this);
	modal.find('img').attr('src', recipient);
})
//下一张
function next() {
	if(button.next().length) {
		button = button.next();
	} else {
		button = button.parent().next().children().first();
	}
	var recipient = button.attr('src')

	$('.modal').find('img').attr('src', recipient);
}

//  上一张
function prev() {
	if(button.prev().length) {
		button = button.prev();
	} else {
		button = button.parent().prev().children().first();
	}
	var recipient = button.attr('src')

	$('.modal').find('img').attr('src', recipient);
}

// 滚动监听
var scrollDone = true;
document.body.onscroll = function(ev) {
	if(window.pageYOffset > ($('.more').offset().top - window.innerHeight + $('.more').height())) {
		if(scrollDone === true) {
			scrollDone = false;
			getdate();
			setTimeout(function() {
				scrollDone = true;
			}, 1000);
		}
	}
}