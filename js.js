    $("#stw").click(function()
    {
    	$("#practicas").show();
    	$("#asignatura_seleccionada").html("Sistemas y tecnologías web");
    	location.href="#practicas";
   		$("#mensaje_aviso").css("display","none");
   		$("#practica1").fadeIn();
    });
    $("#gco").click(function()
    {
    	$("#practicas").show();
    	$("#asignatura_seleccionada").html("Gestión del conocimiento en las organizaciones");
    	location.href="#practicas";
    	$("#practica1").css("display","none");
    	$("#mensaje_aviso").fadeIn();
 		$("#mensaje_aviso").html("No se han realizado prácticas");
    });
    $("#dsi").click(function()
    {
    	$("#practicas").show();
    	$("#asignatura_seleccionada").html("Desarrollo de sistemas informáticos");
    	location.href="#practicas";
    	$("#practica1").css("display","none");
    	$("#mensaje_aviso").fadeIn();
 		$("#mensaje_aviso").html("No se han realizado prácticas");
    });
    $("#tio").click(function()
    {
    	$("#practicas").show();
    	$("#asignatura_seleccionada").html("Tecnologías de la información para las organizaciones");
    	location.href="#practicas";
    	$("#practica1").css("display","none");
    	$("#mensaje_aviso").fadeIn();
		$("#mensaje_aviso").html("No se han realizado prácticas");
    	$("#resumen_practica").css("display","none");
    });
    $("#lpp").click(function()
    {
    	$("#practicas").show();
    	$("#asignatura_seleccionada").html("Lenguajes y paradigmas de programación");
    	location.href="#practicas";
    	$("#practica1").css("display","none");
    	$("#mensaje_aviso").fadeIn();
		$("#mensaje_aviso").html("No se han realizado prácticas");
    });
    $("#ia").click(function()
    {
    	$("#practicas").show();
    	$("#asignatura_seleccionada").html("Inteligencia artificial");
      	location.href="#practicas";
      	$("#practica1").css("display","none");
      	$("#mensaje_aviso").fadeIn();
		$("#mensaje_aviso").html("No se han realizado prácticas");
    });
    $("#ssi").click(function()
    {
    	$("#practicas").show();
    	$("#asignatura_seleccionada").html("Seguridad de Sistemas Informáticos");
      	location.href="#practicas";
      	$("#practica1").css("display","none");
      	$("#mensaje_aviso").fadeIn();
		$("#mensaje_aviso").html("No se han realizado prácticas");
    });
    $("#aeda").click(function()
    {
    	$("#practicas").show();
    	$("#asignatura_seleccionada").html("Algoritmos y Estructuras de Datos Avanzadas");
      	location.href="#practicas";
      	$("#practica1").css("display","none");
      	$("#mensaje_aviso").fadeIn();
		$("#mensaje_aviso").html("No se han realizado prácticas");
    });
    $("#uya").click(function()
    {
    	$("#practicas").show();
    	$("#asignatura_seleccionada").html("Usabilidad y Accesibilidad");
      	location.href="#practicas";
      	$("#practica1").css("display","none");
      	$("#mensaje_aviso").fadeIn();
		$("#mensaje_aviso").html("No se han realizado prácticas");
    });

    $("#practica1").click(function()
    {
    	
    	$("#resumen_practica").fadeIn();
    });