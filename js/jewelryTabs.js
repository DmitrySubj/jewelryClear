/**
 * Created by PetePearl on 20.05.2016.
 * contact: pzhemchugov@gmail.com
 */
$(document).ready(function () {
	window.jewelryTabs = {
		show: function (tabId, options) {
			options = $.extend({
				scroll: false
			}, options);

			tabId = (tabId[0] == '#') ? tabId : '#' + tabId;

			var $tab = $(tabId),
				$tabs = $tab.closest('.tabs');

			$('.tab', $tabs).removeClass('tab--active');
			$tab.addClass('tab--active');


			window.location.hash = tabId;

			$('.tabs__bookmark', $tabs)
				.removeClass('tabs__bookmark--active')
				.filter('[href = "' + tabId + '"]')
				.addClass('tabs__bookmark--active');

			if($('.poster').hasClass('poster--services')) {
				$('.poster__image').removeClass('poster__image--active');
				$('.poster__image[data-tab="'+tabId+'"]').addClass('poster__image--active');

				$('.poster__subtitle--services').removeClass('poster__subtitle--active');
				$('.poster__subtitle--services[data-tab="'+tabId+'"]').addClass('poster__subtitle--active');
			}

			return false;
		},


		bind: function () {
			$(document).on('click', '.js-show-tab', function () {
				var tab = $(this).attr('href');

				if (!tab) return false;

				jewelryTabs.show(tab);

				return false;
			});
		},

		onLoad: function () {
			var tabId = document.location.hash,
				$tab = $(tabId);

			if ($tab.length) {
				this.show(tabId, {
					scroll: true
				});
			}
		},

		init: function () {
			this.bind();
			this.onLoad();
		}
	};

	jewelryTabs.init();
});
