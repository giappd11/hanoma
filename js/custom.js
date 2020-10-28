$(document).ready(function () {
	searchModule();
	$(".menu .card").click(showmenu);

	$(document).on("click", function(event){
        var $trigger = $(".menu .card");
        if($trigger !== event.target && !$trigger.has(event.target).length) {
			$(".show_menu").next().slideUp("fast");
		}      
	});
	
	
	


	$(".search-form input").focus(function() {
		$(".result").slideToggle(200);
	}).focusout(function() {
		$(".result").slideToggle(200);
	});
	editMenuNews();
	
	
new Swiper('.menu-search-result', 
{ 
		slidesPerView: 6,
		spaceBetween: 0,
		breakpoints: {
			0: {
				slidesPerView: 2
			},
			640: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 4
			},
			1024: {
				slidesPerView: 6
			}
		}
	}
);	


new Swiper('.ads-container', 
{ 
		slidesPerView: 3,
		spaceBetween: 12,
		freeMode: true,
		autoplay: {
			delay: 2000
		},
		breakpoints: {
			0: {
			  slidesPerView: 1
			},
			321: {
				slidesPerView: 1
			},
			415: {
				slidesPerView: 2
			},
			640: {
			  slidesPerView: 2
			},
			768: {
			  slidesPerView: 3
			},
			1024: {
			  slidesPerView: 3
			}
		}
	}
);	
new Swiper('.jobs-container', 
	{ 
		slidesPerView: 8,
		spaceBetween: 10,
		freeMode: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: true,
		}, breakpoints: {
			0: {
			  slidesPerView: 2
			}, 321: {
				slidesPerView: 3
			}, 415: {
				slidesPerView: 3
			}, 
			640: {
			  slidesPerView: 3
			},
			768: {
			  slidesPerView: 6
			},
			992: {
			  slidesPerView: 6
			},
			1025: {
			  slidesPerView: 8
			}
		}
	}
);

new Swiper('.products-container', {
	slidesPerView: 5,
	spaceBetween: 10,
	slidesPerColumn: 2, 
	slidesPerColumnFill: 'row',
	breakpoints: {
		0: {
			slidesPerView: 1.5
		}, 321: {
			slidesPerView: 1.5
		}, 415: {
			slidesPerView: 2
		}, 640: {
		  slidesPerView: 3
		},
		768: {
		  slidesPerView: 4
		},
		1200: {
		  slidesPerView: 5
		},
		1024: {
		  slidesPerView: 5
		}
	}
});
var newsContainer =  new Swiper('.news-container', {
	slidesPerView: 4,
	spaceBetween: 10,
	slidesPerColumn: 2, 
	slidesPerColumnFill: 'row',
	breakpoints: {
		0: {
			slidesPerView: 1
		}, 414: {
			slidesPerView: 1
		},  640: {
		  slidesPerView: 2
		},
		768: {
		  slidesPerView: 3
		},
		1024: {
		  slidesPerView: 4
		}
	}
});

new Swiper('.products-container-layout1', {
	slidesPerView: 5,
	spaceBetween: 10,
	slidesPerColumnFill: 'row',
	breakpoints: {
		0: {
			slidesPerView: 1.5
		}, 321: {
			slidesPerView: 1.5
		}, 415: {
			slidesPerView: 2
		}, 640: {
		  slidesPerView: 3
		},
		768: {
		  slidesPerView: 4
		},
		1200: {
		  slidesPerView: 5
		},
		1024: {
		  slidesPerView: 5
		}
	}
});

new Swiper('.banner-container', {
	slidesPerView: 'auto',
	pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
	},autoplay: {
		delay: 2000
	},navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});


var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 3.5,
	loop: false,
	freeMode: true,
	loopedSlides: 5, //looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	autoHeight: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: true,
	}
});
var galleryTop = new Swiper('.gallery-top', {
	loop: false,
	zoom: true,
	loopedSlides: 5,
	autoHeight: true,	//looped slides should be the same
	thumbs: {
		swiper: galleryThumbs,
	}, pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
	},navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});


$(".loadajax").click(function (e) {
	e.preventDefault();
	if ($(this).attr("href") == "#") {
		return;
	}
	$(".loadajax").removeClass('active');
	$(this).addClass('active');
	$.ajax({
		url: $(this).attr("href") , 
		success: function(result){
			$("#tkcontent").html("");
			$("#tkcontent").html(result);
		}
	});

});


$('.ajaxcall').click(function(event) {
	event.preventDefault();
	callAjaxModal(this , "#popup"); 
});


var adsSlider = new Swiper('.ads-slider', 
{ 
		slidesPerView: 3,
		spaceBetween: 17.5,
		freeMode: true,
		autoplay: {
			delay: 2000
		},
		breakpoints: {
			0: {
			  slidesPerView: 1
			},
			321: {
				slidesPerView: 1
			},
			415: {
				slidesPerView: 2
			},
			640: {
			  slidesPerView: 2
			},
			768: {
			  slidesPerView: 3
			},
			1024: {
			  slidesPerView: 3
			}
		}
	}
);	
	
function copyAdsToSlider () {
	if ($(window).width() > 992 ) {
		return;
	}
	$('.banner1').each(function () {
		var html  = $(this).html();
		if ( html == '' || $(this).hasClass('hasCopy')) {
			return;
		}
		$(this).addClass('hasCopy');
		adsSlider.appendSlide([
			'<div class="swiper-slide"> ' + html + '</div>'
		]);
	});

	 

}
copyAdsToSlider();

$(window).resize(function () {
	copyAdsToSlider();
});
 
 
});

$( document ).ajaxComplete(function() {
	$('.ajaxcall').unbind("click").bind("click", function(event) {
		event.preventDefault();
		callAjaxModal(this , "#popup"); 
	});
	$('.ajaxNCcall').unbind("click").bind("click", function(event) {
		event.preventDefault();
		console.log('1');
		callAjaxModal(this , "#main-popup", "#startpopup"); 
	}); 
		 
	$('.ajaxNCpopupcall').unbind("click").bind("click", function(event) {
		event.preventDefault();
		console.log('1');
		callAjaxModal(this , "#main-popup", "#startpopup"); 
	}); 
		 
	$(".startModal").click(function () {
		$('#startpopup').modal('show');
	}); 
	
	$('.selectpicker').select2();
	$(".more-action").unbind("click").bind("click", function() {
		$(this).next('.action').slideToggle(200);

	});

	$(".openPopUp").unbind("click").bind("click", function () {
		$("#main-popup").modal('hide');
		$("#optionpopup").modal('show');

	});
	// $(document).on("click", function(event) {
	// 	var $trigger = $(".more-action");
	// 	alert(event.target);
    //     if($trigger !== event.target && !$trigger.has(event.target).length) {
	// 		$(".action").slideUp("fast");
    //     }         
	// });
	$(".decrease").click(function () {
		decreaseQty("#quantity");
	})
	$(".increase").click(function () {
		increaseQty("#quantity");
	})
});

function decreaseQty (qtyTexbox) {
	var qty =  Number.parseInt($(qtyTexbox).val());
	
	if (qty <= 1) {
		$(qtyTexbox).val(1);
	} else {
		$(qtyTexbox).val(qty - 1);
	}
}
function increaseQty (qtyTexbox) {
	var qty = Number.parseInt($(qtyTexbox).val());
	console.log(qty);
	if (qty < 1) {
		$(qtyTexbox).val(1);
	} else {
		$(qtyTexbox).val(qty + 1);
	}
}

function callAjaxModal(obj, openPopup, closePopup) {
	
	var url = $(obj).attr('action');
	if (url == null || url == '') {
		url = $(obj).attr('href');
	}
    $.ajax({
        type: "GET",
        url: url,
		dataType: 'text',
		async : false,
        success: function(res) {
            // update modal content
			$(openPopup  + ' .modal-body').html(res); 
			$(closePopup).modal('hide');
			// show modal 
            $(openPopup).modal('show');
            
        },
        error:function(request, status, error) {
            console.log("ajax call went wrong:" + request.responseText);
        }
	});
	return false;
} 
$(window).resize(function () {
	editMenuNews();
});

function searchModule() {
	$(".progressbar").html("");
	var indexHasValue = 0;
	var countOfInput = $(".search-module .search-content   .step").each(function (index) {
		if ($(this).find('select').val().length > 0 && indexHasValue >= 0) {
			$(".progressbar").append("<li class = 'complete'><div class = 'counter'>"+ (index + 1 )+ "</div></li>");
			
			indexHasValue = index;
		} else {
			$(".progressbar").append("<li><div class = 'counter'>"+ (index + 1 )+ "</div></li>");
			if(index > 0 && indexHasValue < 0) {
				$(this).find('select').val("");
				$(this).find('select').attr("disabled", "true");
			} else {
				$(this).find('select').val("");
				$(this).find('select').removeAttr("disabled");
			}
			indexHasValue = -1;
		}
	});
}

var showmenu = function showMenu () {
	$(".show_menu").next().slideToggle(300);
		
}

$("img").lazy({
	scrollDirection: 'vertical'
});
 
$(function() {
				
	var menu = new MmenuLight( document.getElementById( "my-menu" ), "(max-width: 991px)" );
 
	const navigator = menu.navigation({
		title: "Danh Mục",
	});
	const drawer = menu.offcanvas();
	document.querySelector( "a[href='#my-menu']").addEventListener("click", function (evnt) {
				evnt.preventDefault();
				drawer.open();
			});
});

 

function edit(name ) { 
	if ($("input[name=" + name + "]").attr('readonly')) {
		$("input[name=" + name + "]").removeAttr('readonly');
	} else {
		$("input[name=" + name + "]").attr('readonly', 'true');
	}
}

function editMenuNews() {
	var width = $( window ).width();
	var maxItem = 8;
	if (width > 1200) {
		maxItem = 8;
	} else if (width > 984) {
		maxItem = 6;
	} else {
		maxItem = -1;
	}
	if ($('.knowledge').length > 0 && maxItem != -1) {
		maxItem = maxItem - 2;
	}
	var count = 0;
	var listDispay = "";
	var listShowMore = "";
	$('ul.menu-news-bottom li').each(function () {
		if (maxItem == -1 || count++ < maxItem) {
			listDispay += '<li class = "nav-item">' + $(this).html() + '</li>';
		} else {
			listShowMore += '<li class = "nav-item">' + $(this).html() + '</li>';
		}
	});
	$('.more-news-dropdow > ul li').each(function () {
		if (maxItem == -1 || count++ < maxItem) {
			listDispay += '<li class = "nav-item">' + $(this).html() + '</li>';
		} else {
			listShowMore += '<li class = "nav-item">' + $(this).html() + '</li>';
		}
	});
	$('ul.menu-news-bottom').html(listDispay);
	$('.more-news-dropdow > ul').html(listShowMore);
}

