$(document).ready(function(){
	
	//console.log('jquery esta funcionando')
	
	var header= document.getElementById("main-header");
	
	$(document).on('click', '.galeria--img', function(){
		let datoSrc=$(this).attr('src');
		
		$('#modal').toggleClass('modal--open');
		$('#modal__img').attr('src', datoSrc);
		
	});
	
	$('#modal__boton').click(function(){
		$('#modal').toggleClass('modal--open');
	});
	
	$('#modal__content').click(function(){
		$('#modal').toggleClass('modal--open');
	});
	
	
	
	window.onscroll=function(){scrollfunction();}

	function scrollfunction(){
	
		if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
			
			header.classList.add("headerscroll");
		}else{
			
			header.classList.remove("headerscroll");
		}	
	}
	
	
});