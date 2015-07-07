$(document).ready(function(){
	$('.tab-panels li a').on('click', function(){
		var $panel = $(this).closest('.tab-panels');
		
		var $panelToShow = $(this).attr('rel');
		
		$panel.find('.nav-tabs li.active').removeClass('active');
		$(this).parent().addClass('active');
		
		$panel.find('.panels.active').slideUp(300, showNextPanel);
		
		function showNextPanel(){
			$(this).removeClass('active');
			$('#'+$panelToShow).slideDown(300, function(){
				$(this).addClass('active');
			});
		}
		
		
	})
});
