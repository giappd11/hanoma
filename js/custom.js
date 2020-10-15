$(document).ready(function () {
	searchModule();
	$(".menu .card").hover(showmenu);
	$(".search-form input").focus(function() {
		$(".result").slideToggle(200);
	}).focusout(function() {
		$(".result").slideToggle(200);
	});
 
	
	
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
			slidesPerView: 2.5
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
			slidesPerView: 2
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
			slidesPerView: 2.5
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

document.addEventListener(
	"DOMContentLoaded", () => {
		const menu = new MmenuLight(
			document.querySelector( "#my-menu" ),
			"(max-width: 992px)"
		);

		const navigator = menu.navigation({
			title: "Danh Mục",
		});
		const drawer = menu.offcanvas();

		document.querySelector( "a[href='#my-menu']" )
			.addEventListener( "click", ( evnt ) => {
				evnt.preventDefault();
				drawer.open();
			});
	}
);


function edit(name ) { 
	if ($("input[name=" + name + "]").attr('readonly')) {
		$("input[name=" + name + "]").removeAttr('readonly');
	} else {
		$("input[name=" + name + "]").attr('readonly', 'true');
	}
}







