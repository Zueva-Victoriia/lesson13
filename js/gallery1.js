		



		var btn_prev = document.querySelector('#gallery .buttons .prev');   
		// создана переменная, нужно отобрать класс prev, то есть занесли в переменную класс prev
		var btn_next = document.querySelector('#gallery .buttons .next'); 

		var images = document.querySelectorAll('#gallery .photos img');


	

		// создана переменная тег img в переменную var images

			var i = 0; 
			// создали глобальную переменную

		// определяем функцию

		btn_prev.onclick = function(){
			images[i].style.display = 'none';
			
			
			i=i-1; 

			if(i<0) {
				i = images.length-1;
				}
				images[i].style.display ='block';
				

			}
		


		btn_next.onclick = function(){
			images[i].style.display = 'none';
			
	
			i=i+1; 

			if(i>=images.length) {
				i = 0;
				}
				images[i].style.display ='block';
				


			}
		

