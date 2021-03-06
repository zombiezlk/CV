	$(document).ready(function() {
    	$('#pagepiling').pagepiling({
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3'],
			sectionsColor: ['#bfda00', '#2ebe21', '#22c3aa'],
			navigation: {
				'position': 'right',
				'tooltips':['info','project','internship']
			},

			 afterLoad: function(anchorLink, index){
			        //section1
				/**if(index == 1){
					$('#section1').find('#photo').animate({
						bottom:'0'
					},500,'linear',function(){
						$('#section1').find('h1').fadeIn(700,function(){
							$('#section1').find('p').fadeIn(600);
						});
					});
				}**/
					

			    	//section 2
				if(index == 2){
					//moving the image
					$('#section2').find('.intro').delay(100).animate({
						left: '0'
					}, 1000, 'linear', function(){
						$('#section2').find('.row').first().fadeIn(700, function(){
							$('#section2').find('.row').last().fadeIn(600);
						});
					});
				}

				//section 3
				if(anchorLink == 'page3'){
					//section 3
					$('#section3').find('.intro').delay(100).animate({
							left: '0%'
					}, 1000, 'linear');
				}

			   }
		});
	  });
