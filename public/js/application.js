$(document).ready(function(){

  $("#get_color").on('click', function(e){
  	e.preventDefault();

  	$.ajax({
  		url: '/color',
  		type: 'post',
  	}).done(function(server_data){
  	    console.log(server_data.cell);
  	    $("#color_me > li:nth-child(" + server_data.cell + ")").css('background-color', server_data.color)
  	}).fail(function(){
  		console.log("fail")
  	});
  });
});