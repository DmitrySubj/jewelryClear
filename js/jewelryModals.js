/**
 * Created by PetePearl on 20.05.2016.
 * contact: pzhemchugov@gmail.com
 */

$(document).ready(function () {
	window.jewelryModals = {
		bodyPadding: 0,
		$body: $(document.body),

		//определение наличия скроллбара в body
		isScroll: function () {
			return (document.body.scrollHeight > $(window).height())
		},

		//вычисление ширины скроллбара body
		getScrollWidth: function () {
			var div = $('<div>').css({
				position: "absolute",
				top: "0",
				left: "0",
				width: "100px",
				height: "100px",
				visibility: "hidden",
				overflow: "scroll"
			});

			$('body').eq(0).append(div);

			var width = div.get(0).offsetWidth - div.get(0).clientWidth;

			div.remove();

			return width;
		},

		//скрытие модального окна
		hide: function (options) {
			options = $.extend({
				beforeHide: function () {
				},
				afterHide: function () {
				}
			}, options);

			options.beforeHide();

			$('.modals__fog').fadeOut('fast');
			$('.modal:visible').fadeOut('fast', function () {
				options.afterHide();

				if (jewelryModals.isScroll()) {
					$('body')
						.css({'padding-right': 0})
						.removeClass('body-modal');
				}

				$('.modal').off('click');
			});
		},

		//открытие модального окна
		show: function (className, options) {
			options = $.extend({
				fog: true,
				close: true,
				title: false,
				message: false,
				speed: 300,

				beforeShow: function () {
				},
				afterShow: function () {
				},
				beforeHide: function () {
				},
				afterHide: function () {
				}
			}, options);

			className = (className[0] == '.') ? className : '.' + className;

			options.beforeShow();

			if (jewelryModals.isScroll()) {
				$('body')
					.css({'padding-right': jewelryModals.getScrollWidth()})
					.addClass('body-modal');
			}

			if (options.fog) {
				$('.modals__fog').fadeIn(options.speed);
			}

			if (options.close) {
				var closeOptions = {
					beforeHide: options.beforeHide,
					afterHide: options.afterHide
				};

				$('.modal__close', $(className)).show().one('click', function () {
					jewelryModals.hide(closeOptions);
					return false;
				});

				$('.modal').on('click', function (e) {
					if (e.target !== this)
						return;

					jewelryModals.hide(closeOptions);
				});
			} else {
				$('.modal__close', $(className)).hide();
			}

			if (options.title) {
				$('.modal__header', $(className)).html('<div class="modal__title">' + options.title + '</div>');
			}

			if (options.message) {
				$('.modal__content', $(className)).html(options.message);
			}

			$('.modal:visible').fadeOut();
			$(className).fadeIn(options.speed, function () {
				options.afterShow();
			});
		},

		//бинды событий
		bind: function () {
			$(document).on('click', '[data-modal]', function () {
				var modal = $(this).data('modal');

				jewelryModals.show(modal);
				return false;
			});
		},

		init: function () {
			this.bind();
		}
	};

	jewelryModals.init();
});

