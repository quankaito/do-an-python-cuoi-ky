(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {
		var quantityContainers = document.getElementsByClassName('quantity-container');
	
		function createBindings(quantityContainer) {
			var increaseBtn = quantityContainer.querySelector('.increase');
			var decreaseBtn = quantityContainer.querySelector('.decrease');
	
			increaseBtn.addEventListener('click', function(e) { increaseValue(e); });
			decreaseBtn.addEventListener('click', function(e) { decreaseValue(e); });
		}
	
		function init() {
			for (var i = 0; i < quantityContainers.length; i++) {
				createBindings(quantityContainers[i]);
			}
		};
	
		function increaseValue(event) {
			var quantityAmount = event.target.closest('.quantity-container').querySelector('.quantity-amount');
			var currentValue = parseInt(quantityAmount.textContent);
			var productId = quantityAmount.dataset.product;
			var action = 'add'; // Đặt hành động là 'add' hoặc 'remove' tùy thuộc vào yêu cầu của bạn.
			
			// Thực hiện cập nhật số lượng trên server bằng AJAX
			updateUserOrder(productId, action, currentValue + 1);
		}
	
		function decreaseValue(event) {
			var quantityAmount = event.target.closest('.quantity-container').querySelector('.quantity-amount');
			var currentValue = parseInt(quantityAmount.textContent);
			var productId = quantityAmount.dataset.product;
			var action = 'remove'; // Đặt hành động là 'add' hoặc 'remove' tùy thuộc vào yêu cầu của bạn.
			
			// Đảm bảo số lượng không âm trước khi giảm
			if (currentValue > 0) {
				// Thực hiện cập nhật số lượng trên server bằng AJAX
				updateUserOrder(productId, action, currentValue - 1);
			}
		}
	
		init();
	};
	
	sitePlusMinus();
})()