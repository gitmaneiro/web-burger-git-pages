$(document).ready(function(){
	
	console.log('jquery de tablas burger ');
	$('#menu--bebidas').hide();
	$('#menu--snack').hide();
	
	$('#btn--burger--tab').click(function(){
		$('#menu--bebidas').hide();
		$('#menu--snack').hide();
		$('#menu--burger').show();
	});
	
	$('#btn--bebidas--tab').click(function(){
		$('#menu--snack').hide();
		$('#menu--burger').hide();
		$('#menu--bebidas').show();
	});
	
	$('#btn--snack--tab').click(function(){
		$('#menu--bebidas').hide();
		$('#menu--burger').hide();
		$('#menu--snack').show();
	});
	
});