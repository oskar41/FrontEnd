$(document).ready(function() {
	var dataBase = { 
		merc:[ 
		'img/мерседес/минимальный.jpg',
		'img/мерседес/стандарт.jpg',
		'img/мерседес/стандарт+.jpg',
		'img/мерседес/стандарт++.jpg',
		'img/мерседес/стандарт+++.jpg',
		'img/мерседес/целиком.jpg',
		'img/мерседес/оптика.jpg',
		'img/мерседес/пороги-внутренние.jpg',
		'img/мерседес/пороги-наружние.jpg',
		'img/мерседес/двери.jpg',
		'img/мерседес/задние-крылья.jpg',
		'img/мерседес/капот.jpg',
		'img/мерседес/передний-бампер.jpg',
		'img/мерседес/задний-бампер.jpg',		
		'img/мерседес/чистый.jpg'
		], 
		mazda:[
		'img/мазда/минимальный.jpg',
		'img/мазда/стандарт.jpg',
		'img/мазда/стандарт+.jpg',
		'img/мазда/стандарт++.jpg',
		'img/мазда/стандарт+++.jpg',
		'img/мазда/целиком.jpg',
		'img/мазда/оптика.jpg',
		'img/мазда/пороги-внутренние.jpg',
		'img/мазда/пороги-наружние.jpg',
		'img/мазда/двери.jpg',
		'img/мазда/заднее-крыло.jpg',
		'img/мазда/капот.jpg',
		'img/мазда/передний-бампер.jpg',
		'img/мазда/задний-бампер.jpg',
		'img/мазда/чистая.jpg'
		], 
		mini:[
		'img/ситроен/минимальный.jpg',
		'img/ситроен/стандарт.jpg',
		'img/ситроен/стандарт+.jpg',
		'img/ситроен/стандарт++.jpg',
		'img/ситроен/стандарт+++.jpg',
		'img/ситроен/целиком.jpg',
		'img/ситроен/оптика.jpg',
		'img/ситроен/пороги-внутренние.jpg',
		'img/ситроен/пороги-наружние.jpg',
		'img/ситроен/двери.jpg',
		'img/ситроен/задние-крылья.jpg',
		'img/ситроен/капот.jpg',
		'img/ситроен/передний-бампер.jpg',
		'img/ситроен/задний-бампер.jpg',
		'img/ситроен/чистый.jpg'] 
	};

	var assembly = [
		'img/сборка/сборка_минимальный.png',
		'img/сборка/сборка_стандарт.png',
		'img/сборка/сборка_стандарт+.png',
		'img/сборка/сборка_стандарт++.png',
		'img/сборка/сборка_стандарт+++.png'
		];

	$(".testArea").click(function(){

		$(".testArea").siblings("span").children().removeClass("show_arrow");	
		 
		$(this).siblings("span").children().addClass("show_arrow");

		$(".li_active").addClass("active")

	    $(".menu").mouseover(function() {
	    	$(".li_active").removeClass("active");
	    });	

		var a = $(this).attr("id");
		$(".menu").attr('id', a);

		var changeMain = dataBase[a][3];
	    $("#mainPng").attr("src", changeMain);

	    var changeBottom = assembly[3]; 
	    $("#bottomPng").attr("src", changeBottom);

	
	});



	$(".active-li").click(function(){
	  $(this).children().toggleClass("activeClass");
	});

	$(".active-li").click(function(){
	  $(this).toggleClass("arrow_black");
	});


	$('.bar > li').hover(function(){ 
       	
       	var ParId = $(this).parent(".menu").attr("id");
		var li = $(this);
	 	var objs = li.map(function(){
			   			 return this;
				   }).get();

	    var n = objs[0].getAttribute("dataset");

	    if(typeof (objs[0].getAttribute("dataset")) != "string"){
	    	$("#mainPng").attr("src", dataBase[ParId][14]);
		};

	  	var change = dataBase[ParId][n];
	    $("#mainPng").attr("src", change);

 		var $set = $('ul li');
      	var x=$set.index(this);
      	if(x<=4){
      		var changeBottom = assembly[n]; 
     	 	$("#bottomPng").attr("src", changeBottom);
      	}else{
      		$("#bottomPng").attr("src", "");
      	}
     });		

});
