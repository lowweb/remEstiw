//add consignment block
$(".step-block__sep-btn-add").click ( function () {
//add del btn to first element
	if ($( ".consignment" ).length == 1 )
		$( ".consignment .step-block__sep").append("<div class='step-block__sep-btn-close'></div>");
	var consignmentCount= $( ".consignment" ).length + 1;
	$( ".consignment" ).last().after($( "<section class='consignment'><div class='step-block__sep'><h2 class='step-block__sep-cap'>Партия №" + consignmentCount +"</h2><div class='step-block__sep-line'></div><div class='step-block__sep-btn-close'></div> </div></section>" ));
});

//del consignment block 
$(document.body).on('click', '.step-block__sep-btn-close' ,function(){
// $(".step-block__sep-btn-close").click ( function () {
	// alert('dsdsa');

	$(this).parent().parent().remove();

	var consignmentElement = document.getElementsByClassName("consignment");
		for(var i=0; i < consignmentElement.length; i++){
			$(consignmentElement[i]).find('.step-block__sep-cap').replaceWith("<h2 class='step-block__sep-cap'>Партия №"+ (i+1) +"</h2>");
		}

	if ($( ".consignment" ).length == 1 )
		$( ".consignment .step-block__sep .step-block__sep-btn-close").remove();
 	// $( ".consignment" ).last().after($( "<section class='consignment'><div class='step-block__sep'><h2 class='step-block__sep-cap'>Партия</h2><div class='step-block__sep-line'></div><div class='step-block__sep-btn-close'></div> </div></section>" ));
});