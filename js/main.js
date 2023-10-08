$(document).ready(function() {
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('.page-title').addClass("sticky");
		}
		else{
			$('.page-title').removeClass("sticky");
		}
	});

	function traduzir() {
		var titulo = document.querySelector('h1');
		var paragrafo = document.querySelector('p');
		
		// Substituir o texto com texto traduzido
		titulo.textContent = 'Translated Title';
		paragrafo.textContent = 'This is a sample paragraph to be translated.';
	}

});